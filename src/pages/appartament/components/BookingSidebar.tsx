import React, { useState } from 'react';
import { Paper, Typography, Box, Button, Popover, Divider, Stack } from '@mui/material';
import BookingDateRange from '../../../components/BookingDateRange';
import { useTranslation } from 'react-i18next';
import BookingConfirmModal from './BookingConfirmModal';

export default function BookingSidebar({
  priceDetail,
  open,
  anchorEl,
  handlePopoverOpen,
  handlePopoverClose,
  setBooking,
  unavailableDates,
  pricePerDay,
  sendEmail,
}) {
  const { t } = useTranslation();
  const [errorText, setErrorText] = useState('');
  const [modalOpen, setModalOpen] = useState(false);

  const handleOpenModal = () => setModalOpen(true);
  const handleCloseModal = () => setModalOpen(false);
  const handleConfirm = (formData) => {
    setModalOpen(false);
    sendEmail(formData);
  };

  return (
    <Paper
      elevation={3}
      sx={{
        p: 3,
        position: 'sticky',
        top: 84,
        maxHeight: '700px',
        overflowY: 'auto',
      }}
    >
      <Typography variant={'h6'} marginBottom={2} fontWeight={700}>
        {t('book_your_apartment')}
      </Typography>
      <Typography gutterBottom variant="h6" fontWeight={700} fontSize={20}>
        <span
          aria-owns={open ? 'mouse-over-popover' : undefined}
          aria-haspopup="true"
          onMouseEnter={handlePopoverOpen}
          onMouseLeave={handlePopoverClose}
          style={{ cursor: 'pointer', textDecoration: 'underline', color: '#2891da' }}
        >
          {priceDetail.totalPrice}€ {t('in_total')}
        </span>
      </Typography>
      <Typography variant="h6" marginBottom={2} gutterBottom></Typography>
      <PopoverComponent
        open={open}
        anchorEl={anchorEl}
        handlePopoverClose={handlePopoverClose}
        priceDetail={priceDetail}
        t={t}
      />
      <BookingDateRange
        unavailableDates={unavailableDates}
        pricePerDay={pricePerDay}
        onChange={setBooking}
        errorText={errorText}
        setErrorText={setErrorText}
      />
      <Box sx={{ textAlign: 'center' }}>
        <Button
          variant="contained"
          color="primary"
          type="button"
          sx={{ mt: 3 }}
          disabled={!!errorText}
          onClick={handleOpenModal}
        >
          {t('book_now')}
        </Button>
        <Typography variant="inherit" fontWeight={600} fontSize={14} marginTop={2} gutterBottom>
          {t('not_charged')}
        </Typography>
      </Box>
      <BookingConfirmModal
        open={modalOpen}
        onClose={handleCloseModal}
        onConfirm={handleConfirm}
        booking={priceDetail}
        priceDetail={priceDetail}
      />
    </Paper>
  );
}

const PopoverComponent = ({ open, anchorEl, handlePopoverClose, priceDetail, t }) => (
  <Popover
    id="mouse-over-popover"
    sx={{ pointerEvents: 'none' }}
    open={open}
    anchorEl={anchorEl}
    anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
    transformOrigin={{ vertical: 'top', horizontal: 'left' }}
    onClose={handlePopoverClose}
    disableRestoreFocus
  >
    <Box>
      <Stack spacing={2} sx={{ p: 2, minWidth: { md: 400, xs: 0 } }}>
        <Typography variant={'h5'} marginBottom={2} fontWeight={700}>
          {t('detail_price')}
        </Typography>
        <Stack direction="row" sx={{ justifyContent: 'space-between', alignItems: 'center' }}>
          <Typography gutterBottom variant="body1" component="div">
            {priceDetail.inTheSamePrice
              ? t('price_for_night', {
                  nights: priceDetail.totalNights,
                  price: priceDetail.pricePerNight.toFixed(2),
                })
              : t('price_for_nights', {
                  nights: priceDetail.totalNights,
                })}
          </Typography>
          <Typography gutterBottom variant="body1" component="div">
            {priceDetail.pricePerPeriod.toFixed(2)}€
          </Typography>
        </Stack>
        <Stack direction="row" sx={{ justifyContent: 'space-between', alignItems: 'center' }}>
          <Typography gutterBottom variant="body1" component="div">
            {t('utilities_fee', { price: '100.00' })}
          </Typography>
          <Typography gutterBottom variant="body1" component="div">
            {priceDetail.feePrice.toFixed(2)}€
          </Typography>
        </Stack>
        {priceDetail.discount > 0 && (
          <Stack direction="row" sx={{ justifyContent: 'space-between', alignItems: 'center' }}>
            <Typography gutterBottom variant="body1" mr={4} component="div">
              {t('rounded_price_discount')}
            </Typography>
            <Typography gutterBottom variant="body1" color="green" component="div">
              -{priceDetail.discount.toFixed(2)}€
            </Typography>
          </Stack>
        )}
        <Divider sx={{ my: 1.5 }} />
        <Stack direction="row" sx={{ justifyContent: 'space-between', alignItems: 'center' }}>
          <Typography gutterBottom variant="body1" component="div">
            {t('total_price')}
          </Typography>
          <Typography gutterBottom variant="h6" component="div" fontWeight={700}>
            {priceDetail.totalPrice.toFixed(2)}€
          </Typography>
        </Stack>
      </Stack>
    </Box>
  </Popover>
);
