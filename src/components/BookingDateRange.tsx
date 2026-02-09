import React, { useState, useRef } from 'react';
import { DateRange } from 'react-date-range';
import {
  addDays,
  isBefore,
  isWithinInterval,
  format,
  parse,
  differenceInCalendarDays,
} from 'date-fns';
import Popover from '@mui/material/Popover';
import TextField from '@mui/material/TextField';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import { Alert, Box, Grid } from '@mui/material';
import './bookingDateRange.scss';

function getPriceForDate(date) {
  const month = date.getMonth() + 1;
  if (month >= 6 && month <= 8) return 150; // alta stagione
  if (month === 5 || month === 9) return 120; // media stagione
  return 100; // bassa stagione
}

export default function BookingDateRange({
  pricePerDay,
  unavailableDates,
  onChange,
  errorText,
  setErrorText,
}) {
  const today = new Date();
  const minCheckIn = addDays(today, 1);
  const [range, setRange] = useState<{
    startDate: string;
    endDate: string;
  }>({
    startDate: format(minCheckIn, 'dd/MM/yyyy'),
    endDate: format(addDays(minCheckIn, 7), 'dd/MM/yyyy'),
  });
  const [rangeInput, setRangeInput] = useState([
    {
      startDate: minCheckIn,
      endDate: addDays(minCheckIn, 7),
      key: 'selection',
    },
  ]);
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const [activeInput, setActiveInput] = useState('checkin');
  const checkInRef = useRef<HTMLInputElement>(null);
  const checkOutRef = useRef<HTMLInputElement>(null);

  // Convert unavailableDates to intervals
  const unavailableIntervals = unavailableDates.map((period) => ({
    start: new Date(period.from),
    end: new Date(period.to),
  }));

  function isDateDisabled(date) {
    for (const interval of unavailableIntervals) {
      if (isWithinInterval(date, interval)) return true;
    }
    if (isBefore(date, minCheckIn)) return true;
    return false;
  }

  function getDisabledDates() {
    const disabled = [];
    const end = addDays(minCheckIn, 365);
    for (let d = minCheckIn; isBefore(d, end); d = addDays(d, 1)) {
      if (isDateDisabled(d)) disabled.push(d);
    }
    return disabled;
  }

  function handleChange(item) {
    setErrorText('');

    // Se l'input attivo è 'checkout', aggiorna solo la data di fine
    if (activeInput === 'checkout') {
      const newStart = parse(range.startDate, 'dd/MM/yyyy', new Date());
      const newEnd = item.selection.endDate;
      setRange({
        startDate: format(newStart, 'dd/MM/yyyy'),
        endDate: format(newEnd, 'dd/MM/yyyy'),
      });
      setRangeInput([
        {
          startDate: newStart,
          endDate: newEnd,
          key: 'selection',
        },
      ]);
      onChange({ startDate: newStart, endDate: newEnd, errorText });
      const diff = differenceInCalendarDays(newEnd, newStart);
      if (diff < 7) {
        setErrorText('Il soggiorno deve essere di almeno 7 giorni');
      }
      return;
    }

    // Default: aggiorna entrambi
    setRange({
      startDate: format(item.selection.startDate, 'dd/MM/yyyy'),
      endDate: format(item.selection.endDate, 'dd/MM/yyyy'),
    });
    setRangeInput([
      {
        startDate: new Date(item.selection.startDate),
        endDate: new Date(item.selection.endDate),
        key: 'selection',
      },
    ]);
    if (onChange) {
      onChange({ ...item.selection, errorText });
    }
    const diff = differenceInCalendarDays(item.selection.endDate, item.selection.startDate);
    if (diff < 7) {
      setErrorText('Il soggiorno deve essere di almeno 7 giorni');
    }
  }

  function handleInputClick(input: 'checkin' | 'checkout') {
    setActiveInput(input);
    const el = input === 'checkin' ? checkInRef.current : checkOutRef.current;
    if (el) setAnchorEl(el);
    setTimeout(() => {
      if (input === 'checkin' && checkInRef.current) checkInRef.current.focus();
      if (input === 'checkout' && checkOutRef.current) checkOutRef.current.focus();
    }, 0);
  }

  function handleInputChangeText(e, type) {
    setErrorText('');

    const value = e.target.value;

    // Regex per data gg/mm/aaaa
    const dateRegex = /^(\d{2})\/(\d{2})\/(\d{4})$/;
    let newStart = type === 'checkin' ? e.target.value : range.startDate;
    let newEnd = type === 'checkout' ? e.target.value : range.endDate;
    if (!dateRegex.test(value)) {
      setRange({ startDate: newStart, endDate: newEnd });
    } else {
      // accetta solo formato valido
      const [day, month, year] = value.split('/');
      const parsedDate = new Date(`${year}-${month}-${day}`);

      if (type === 'checkin') {
        newStart = parsedDate;
        newEnd = parse(newEnd, 'dd/MM/yyyy', new Date());
        if (isBefore(newEnd, addDays(newStart, 1))) {
          newEnd = addDays(newStart, 1);
        }
      } else {
        newStart = parse(newStart, 'dd/MM/yyyy', new Date());
        newEnd = parsedDate;
        if (isBefore(newEnd, addDays(newStart, 1))) {
          newEnd = addDays(newStart, 1);
        }
      }
      setRange({
        startDate: format(newStart, 'dd/MM/yyyy'),
        endDate: format(newEnd, 'dd/MM/yyyy'),
      });
      try {
        setRangeInput([
          {
            startDate: parse(newStart, 'dd/MM/yyyy', new Date()),
            endDate: parse(newEnd, 'dd/MM/yyyy', new Date()),
            key: 'selection',
          },
        ]);
        if (onChange) {
          onChange({
            startDate: newStart,
            endDate: newEnd,
            errorText,
          });
        }
      } catch (error) {
        setErrorText('Data non valida');
      }
    }
    const diff = differenceInCalendarDays(
      parse(newEnd, 'dd/MM/yyyy', new Date()),
      parse(newStart, 'dd/MM/yyyy', new Date())
    );
    if (diff < 7) {
      setErrorText('Il soggiorno deve essere di almeno 7 giorni');
    }
  }

  function handleClose() {
    setAnchorEl(null);
  }

  return (
    <Box>
      <Grid container spacing={2} sx={{ gap: 2, flexWrap: 'wrap' }}>
        <Grid size={12}>{errorText && <Alert severity="error">{errorText}</Alert>}</Grid>
        <Grid size={{ xs: 12, md: 6 }}>
          <TextField
            label="Check-in"
            inputRef={checkInRef}
            value={range.startDate}
            onClick={() => handleInputClick('checkin')}
            onChange={(e) => handleInputChangeText(e, 'checkin')}
            type="text"
            sx={{ width: '100%' }}
            placeholder="gg/mm/aaaa"
            inputProps={{ inputMode: 'numeric', maxLength: 10 }}
            InputLabelProps={{ shrink: true }}
          />
        </Grid>
        <Grid size={{ xs: 12, md: 6 }}>
          <TextField
            label="Check-out"
            inputRef={checkOutRef}
            value={range.endDate}
            onClick={() => handleInputClick('checkout')}
            onChange={(e) => handleInputChangeText(e, 'checkout')}
            type="text"
            sx={{ width: '100%' }}
            placeholder="gg/mm/aaaa"
            inputProps={{ inputMode: 'numeric', maxLength: 10 }}
            InputLabelProps={{ shrink: true }}
          />
        </Grid>
      </Grid>
      <Popover
        open={Boolean(anchorEl)}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
        transformOrigin={{ vertical: 'top', horizontal: 'left' }}
      >
        <div style={{ minWidth: 280 }}>
          <DateRange
            ranges={rangeInput}
            onChange={handleChange}
            minDate={minCheckIn}
            disabledDates={getDisabledDates()}
            months={1}
            direction={window.innerWidth < 800 ? 'vertical' : 'horizontal'}
            showDateDisplay={false}
            dayContentRenderer={(date) => {
              const price = getPriceForDate(date);
              return (
                <div
                  style={{
                    position: 'relative',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    lineHeight: 1,
                  }}
                >
                  <span>{date.getDate()}</span>
                  <span
                    className="price"
                    style={{
                      fontSize: 10,
                      color: '#1976d2',
                      marginTop: 2,
                      lineHeight: 1,
                    }}
                  >
                    €{pricePerDay[(date.getMonth() + 1).toString()] || pricePerDay.default}
                  </span>
                </div>
              );
            }}
          />
        </div>
      </Popover>
    </Box>
  );
}
