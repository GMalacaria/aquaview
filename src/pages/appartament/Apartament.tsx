import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Grid, Typography, Box, Button, Paper, Popover, Divider, Stack } from '@mui/material';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/image-gallery.css';
import './apartment.scss';
import BookingDateRange from '../../components/BookingDateRange';
import { useTranslation } from 'react-i18next';
import { addDays, differenceInCalendarDays } from 'date-fns';
import ContactFormSection from '../../components/contacts/ContactsForm';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { getIconDetail } from '../../components/getIconDetail';
type Apartment = {
  name: string;
  address: string;
  id: number;
  pricePerDay: {
    default: number;
    [month: string]: number;
  };
  focalPoints: { label: string; numbers?: number }[];
  imageUrls: string[];
  description: {
    it: string;
    en: string;
  };
  moreDetails: {
    icon: string;
    label: string;
    count?: number;
  }[];
};

const appartamentoData: Apartment = {
  name: 'Aquaview 30',
  address: 'Cala Spalmatoio, Giannutri, Italia',
  id: 30,
  pricePerDay: {
    default: 100,
    '6': 143,
    '7': 172,
    '8': 215,
    '9': 172,
  },
  focalPoints: [
    { label: 'panoramic_terrace' },
    { label: 'beds', numbers: 2 },
    { label: 'bathrooms', numbers: 1 },
    { label: 'sea_vie' },
  ],
  imageUrls: [
    'https://static.wixstatic.com/media/b00006_6e02914d3bdb4c54a44c11985840245f~mv2.png/v1/fill/w_355,h_269,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/photo_5980969739435576629_y_edited_edite.png',
    'https://static.wixstatic.com/media/b00006_040c6098b2024d069d2b203d647bd1e5~mv2.png/v1/fill/w_355,h_269,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/b00006_040c6098b2024d069d2b203d647bd1e5~mv2.png',
  ],
  description: {
    it: `<p  style="font-size:16px;">Appartamento vista mare a&nbsp;<span style="font-weight:bold;" >Cala Spalmatoio</span>, inserito nei tipici villini a schiera dell’isola. Un ambiente accogliente e funzionale, composto da&nbsp;<span style="font-weight:bold;" >camera matrimoniale, seconda camera con letto a castello, bagno<span style="font-weight:normal;" >&nbsp;,&nbsp;</span>zona giorno con angolo cottura e divano letto</span>.<br >&nbsp;</p>
  Bellissimo appartamento fronte mare, dotato di tutti i comfort. Ideale per famiglie e coppie. Prenota ora per una vacanza indimenticabile!
  <p  style="font-size:16px;">Dotato di tutti i comfort essenziali —&nbsp;<span style="font-weight:bold;" >aria condizionata, Wi-Fi, lavastoviglie, lavatrice, zanzariere e TV satellitare</span>&nbsp;— è perfetto per vivere Giannutri in totale relax.<br >
&nbsp;</p><p  style="line-height:1.5em; font-size:16px;">Il vero punto di forza è l’<span style="font-weight:bold;" >ampio terrazzo sul mare</span>, attrezzato per godersi la vita all’aperto, tra colazioni al sole, docce rinfrescanti e cene con il rumore del mare in sottofondo.</p>`,
    en: 'in inglese',
  },
  moreDetails: [
    {
      icon: 'room',
      label: 'rooms',
      count: 2,
    },
    {
      icon: 'bed',
      label: 'count_bed',
      count: 3,
    },
    {
      icon: 'air_conditioning',
      label: 'air_conditioning',
    },
    {
      icon: 'wifi',
      label: 'wifi',
    },
    {
      icon: 'washing machine',
      label: 'washing_machine',
    },
    {
      icon: 'dishwasher',
      label: 'dishwasher',
    },
  ],
};

const unavailableDates = [
  {
    from: '2026-03-05',
    to: '2026-03-15',
  },
];

type BookingProps = {
  startDate: Date;
  endDate: Date;
  errorText?: string;
};

const Apartament = () => {
  const { id } = useParams();
  appartamentoData.id = +(id || '0');
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language || 'it';
  const [booking, setBooking] = useState<BookingProps>({
    startDate: new Date(),
    endDate: addDays(new Date(), 7),
  });

  const [priceDetail, setpriceDetail] = useState({
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
    calculatePrice();
  }, [booking]);
  const calculatePrice = () => {
    if (!booking) return null;

    const { startDate, endDate } = booking;
    if (!startDate || !endDate) return null;

    let pricePerPeriod = 0;
    let currentDate = new Date(startDate);
    let price: null | number = null;
    let inTheSamePrice = true;
    while (currentDate < endDate) {
      const month = currentDate.getMonth() + 1;
      const pricePerDay =
        appartamentoData.pricePerDay[month.toString()] || appartamentoData.pricePerDay.default;
      if (price && price !== pricePerDay) {
        inTheSamePrice = false;
      }
      price = pricePerDay;
      pricePerPeriod += pricePerDay;

      currentDate.setDate(currentDate.getDate() + 1);
    }
    const totalNights = differenceInCalendarDays(booking.endDate, booking.startDate);
    const feePrice = 100 * Math.ceil(totalNights / 7);
    const arrotondaCentinaia = (num) => Math.floor(num / 100) * 100;
    const discount =
      pricePerPeriod - arrotondaCentinaia(pricePerPeriod) > 30
        ? 30
        : pricePerPeriod - arrotondaCentinaia(pricePerPeriod);
    const totalPrice = pricePerPeriod + feePrice - discount;
    const pricePerNight = pricePerPeriod / totalNights;

    setpriceDetail({
      ...priceDetail,
      totalPrice,
      feePrice,
      pricePerPeriod,
      pricePerNight,
      discount,
      totalNights,
      inTheSamePrice,
    });
    // Add fixed fee (e.g. cleaning)
  };

  const [anchorEl, setAnchorEl] = React.useState<HTMLElement | null>(null);

  const handlePopoverOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  return (
    <Box sx={{ maxWidth: 1280, mx: 'auto', p: 2 }}>
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
            <Box sx={{ mb: 4, maxWidth: '1000px', display: 'flex', mx: 'auto' }}>
              {appartamentoData?.imageUrls?.length > 0 && (
                <ImageGallery
                  style={{}}
                  items={appartamentoData.imageUrls.map((url) => ({
                    original: url,
                    thumbnail: url + ' x2',
                  }))}
                  showPlayButton={false}
                  showFullscreenButton={true}
                />
              )}
            </Box>
          </Grid>
          <Grid size={12}>
            <Paper elevation={3} sx={{ p: 3 }}>
              <Typography variant="h6" gutterBottom fontWeight={700}>
                {t('description')}
              </Typography>
              <Box sx={{ mt: 2 }}>
                <div
                  dangerouslySetInnerHTML={{ __html: appartamentoData.description[currentLang] }}
                />
              </Box>
              <Box sx={{ my: 3 }}>
                <Typography sx={{ my: 2 }} variant="h6" gutterBottom fontWeight={700}>
                  {t('more_details')}
                </Typography>
                <Grid container spacing={2}>
                  {appartamentoData.moreDetails.map((detail, index) => (
                    <Grid
                      key={index}
                      size={{ xs: 12, md: 6 }}
                      display={'flex'}
                      alignItems="center"
                      gap={1}
                      margin={'auto'}
                    >
                      <Grid sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                        {getIconDetail(detail.icon)}
                      </Grid>
                      <Grid sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                        <Typography variant="body1" gutterBottom m={2}>
                          {t(detail.label, { count: detail?.count })}
                        </Typography>
                      </Grid>
                    </Grid>
                  ))}
                </Grid>
              </Box>
            </Paper>
          </Grid>
        </Grid>
        <Grid size={{ xs: 12, md: 5 }}>
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
            <Popover
              id="mouse-over-popover"
              sx={{ pointerEvents: 'none' }}
              open={open}
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              onClose={handlePopoverClose}
              disableRestoreFocus
            >
              <Box>
                <Grid container spacing={1} sx={{ p: 2 }}>
                  <Grid
                    size={12}
                    p={2}
                    minWidth={{ md: 400, xs: 0 }}
                    lineHeight={{ md: 1.5, xs: 1 }}
                  >
                    <Typography variant={'h5'} marginBottom={2} fontWeight={700}>
                      {t('detail_price')}
                    </Typography>
                    <Stack
                      direction="row"
                      sx={{ justifyContent: 'space-between', alignItems: 'center' }}
                    >
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
                    <Stack
                      direction="row"
                      sx={{ justifyContent: 'space-between', alignItems: 'center' }}
                    >
                      <Typography gutterBottom variant="body1" component="div">
                        {t('utilities_fee', {
                          price: '100.00',
                        })}
                      </Typography>
                      <Typography gutterBottom variant="body1" component="div">
                        {priceDetail.feePrice.toFixed(2)}€
                      </Typography>
                    </Stack>
                    {priceDetail.discount > 0 && (
                      <Stack
                        direction="row"
                        sx={{
                          justifyContent: 'space-between',
                          alignItems: 'center',
                        }}
                      >
                        <Typography gutterBottom variant="body1" mr={4} component="div">
                          {t('rounded_price_discount')}
                        </Typography>
                        <Typography gutterBottom variant="body1" color="green" component="div">
                          -{priceDetail.discount.toFixed(2)}€
                        </Typography>
                      </Stack>
                    )}
                    <Divider sx={{ my: 1.5 }} />
                    <Stack
                      direction="row"
                      sx={{
                        justifyContent: 'space-between',
                        alignItems: 'center',
                      }}
                    >
                      <Typography gutterBottom variant="body1" component="div">
                        {t('total_price')}
                      </Typography>
                      <Typography gutterBottom variant="h6" component="div" fontWeight={700}>
                        {priceDetail.totalPrice.toFixed(2)}€
                      </Typography>
                    </Stack>
                  </Grid>
                </Grid>
              </Box>
            </Popover>
            <BookingDateRange
              unavailableDates={unavailableDates}
              pricePerDay={appartamentoData.pricePerDay}
              onChange={(props) => {
                setBooking(props);
              }}
            />
            <Box sx={{ textAlign: 'center' }}>
              <Button variant="contained" color="primary" type="submit" sx={{ mt: 3 }}>
                {t('book_now')}
              </Button>
              <Typography
                variant="inherit"
                fontWeight={600}
                fontSize={14}
                marginTop={2}
                gutterBottom
              >
                {t('not_charged')}
              </Typography>
            </Box>
          </Paper>
        </Grid>

        <Grid size={{ xs: 12, md: 12 }}>
          <Paper elevation={3} sx={{ p: 3 }}>
            <Box>
              <Typography variant="h6" marginBottom={4} gutterBottom fontWeight={700}>
                {t('location')}
              </Typography>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d247.18674919578058!2d11.105136058491356!3d42.25444046952617!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sit!2sit!4v1770070581279!5m2!1sit!2sit"
                width="100%"
                height="350"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Mappa posizione appartamento"
              ></iframe>
            </Box>
          </Paper>
        </Grid>

        <Grid size={12}>
          <Grid sx={{ textAlign: 'center' }} size={12} my={3}>
            <Typography variant="h5" fontWeight={700}>
              {t('view_more_apartment')}
            </Typography>
          </Grid>
          <Grid container spacing={2} size={12}>
            <Grid sx={{ display: 'flex', justifyContent: 'left' }} size={6}>
              {appartamentoData.id > 30 && (
                <Button
                  onClick={() =>
                    (window.location.href = `/appartamento/${appartamentoData.id === 60 ? 30 : 60}`)
                  }
                  sx={{ minWidth: 80 }}
                  variant="contained"
                  color="primary"
                  startIcon={<KeyboardArrowLeftIcon />}
                >
                  {t('intimate')}
                </Button>
              )}
            </Grid>

            <Grid sx={{ display: 'flex', justifyContent: 'right' }} size={6}>
              {appartamentoData.id < 90 && (
                <Button
                  onClick={() =>
                    (window.location.href = `/appartamento/${appartamentoData.id === 60 ? 90 : 60}`)
                  }
                  sx={{ minWidth: 80 }}
                  variant="contained"
                  color="primary"
                  endIcon={<KeyboardArrowRightIcon />}
                >
                  {t('spacious')}
                </Button>
              )}
            </Grid>
          </Grid>
        </Grid>
        <Grid size={{ xs: 12, md: 12 }}>
          <ContactFormSection object={`Richiesta informazioni - ${appartamentoData.name}`} />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Apartament;
