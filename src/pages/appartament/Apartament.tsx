import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Grid, Typography, Box, Snackbar, Alert } from '@mui/material';
import 'react-image-gallery/styles/image-gallery.css';
import './apartment.scss';
import { useTranslation } from 'react-i18next';
import { addDays } from 'date-fns';
import ContactFormSection from '../../components/contacts/ContactsForm';
import ImageGallerySection from './components/ImageGallerySection';
import DescriptionSection from './components/DescriptionSection';
import BookingSidebar from './components/BookingSidebar';
import LocationMapSection from './components/LocationMapSection';
import NavigationButtonsSection from './components/NavigationButtonsSection';
import { BookingProps, PriceDetail } from './types';
import { calculatePrice } from './utils/calculatePrice';
import { appartamentoData, unavailableDates } from './mock/data';

const Apartament = () => {
  const { id } = useParams();
  appartamentoData.id = +(id || '0');
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language || 'it';
  const [booking, setBooking] = useState<BookingProps>({
    startDate: addDays(new Date(), 1),
    endDate: addDays(new Date(), 8),
  });

  const [snackbarOpen, setSnackbarOpen] = useState(false);

  const [priceDetail, setpriceDetail] = useState<PriceDetail>({
    inTheSamePrice: true,
    totalPrice: 0,
    pricePerNight: 0,
    pricePerPeriod: 0,
    discount: 0,
    feePrice: 100,
    totalNights: 7,
  });

  useEffect(() => {
    // Fix scroll lock issue from react-image-gallery fullscreen
    const handleUnlockScroll = () => {
      document.body.style.overflow = 'auto';
    };
    window.addEventListener('resize', handleUnlockScroll);
    window.addEventListener('scroll', handleUnlockScroll);
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('resize', handleUnlockScroll);
      window.removeEventListener('scroll', handleUnlockScroll);
    };
  }, []);

  useEffect(() => {
    setpriceDetail({ ...priceDetail, ...calculatePrice(booking, appartamentoData) });
  }, [booking]);

  const [anchorEl, setAnchorEl] = React.useState<HTMLElement | null>(null);

  const handlePopoverOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  const sendEmail = (allInfo) => {
    setSnackbarOpen(true);
    console.log({
      id: appartamentoData.id,
      ...allInfo,
      ...booking,
      priceDetail,
      endDate: booking.endDate.toISOString(),
      startDate: booking.startDate.toISOString(),
    });
  };

  const open = Boolean(anchorEl);

  return (
    <Box sx={{ maxWidth: 1280, mx: 'auto', p: 2 }}>
      <Snackbar
        autoHideDuration={6000}
        open={snackbarOpen}
        onClose={() => setSnackbarOpen(false)}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      >
        <Alert onClose={() => setSnackbarOpen(false)} severity="success" sx={{ width: '100%' }}>
          {t('booking_request_sent_successfully')}
          <br />
          {t('we_will_contact_you_soon')}
        </Alert>
      </Snackbar>
      <Typography variant="h4" fontWeight={700} gutterBottom>
        {appartamentoData.name}
      </Typography>
      <Typography variant="h6" gutterBottom>
        {appartamentoData.focalPoints
          .map((point) => `${point.numbers ? point.numbers + ' ' : ''}${t(point.label)}`)
          .join(' - ')}
      </Typography>

      <Grid container spacing={4}>
        <Grid size={{ xs: 12, md: 7 }}>
          <Grid size={12}>
            <ImageGallerySection imageUrls={appartamentoData.imageUrls} />
          </Grid>
          <Grid size={12}>
            <DescriptionSection
              description={appartamentoData.description}
              currentLang={currentLang}
              moreDetails={appartamentoData.moreDetails}
            />
          </Grid>
        </Grid>
        <Grid size={{ xs: 12, md: 5 }}>
          <BookingSidebar
            priceDetail={priceDetail}
            open={open}
            anchorEl={anchorEl}
            handlePopoverOpen={handlePopoverOpen}
            handlePopoverClose={handlePopoverClose}
            setBooking={setBooking}
            unavailableDates={unavailableDates}
            pricePerDay={appartamentoData.pricePerDay}
            sendEmail={sendEmail}
          />
        </Grid>
        <Grid size={{ xs: 12, md: 12 }}>
          <LocationMapSection />
        </Grid>
        <NavigationButtonsSection appartamentoId={appartamentoData.id} />
        <Grid size={{ xs: 12, md: 12 }}>
          <ContactFormSection object={`Richiesta informazioni - ${appartamentoData.name}`} />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Apartament;
