import { Button, Typography, Grid, Box, Container, ImageList, ImageListItem } from '@mui/material';
import { useTranslation } from 'react-i18next';
import '../../i18n';
import { useInView } from 'react-intersection-observer';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import './home.scss';
import {
  CardAppartament,
  ItemAppartament,
} from '../../components/card-appartament/CardAppartament';
import GiannutriLogo from '../../assets/Giannutri-logo.png';
import ContactFormSection from '../../components/contacts/ContactsForm';
import DoneIcon from '@mui/icons-material/Done';
const apartments: ItemAppartament[] = [
  {
    name: 'Aquaview 30',
    id: 30,
    focalPoints: [
      { label: 'panoramic_terrace' },
      { label: 'beds', numbers: 2 },
      { label: 'bathrooms', numbers: 1 },
      { label: 'sea_vie' },
    ],
    imgUrl:
      'https://static.wixstatic.com/media/b00006_6e02914d3bdb4c54a44c11985840245f~mv2.png/v1/fill/w_355,h_269,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/photo_5980969739435576629_y_edited_edite.png',
  },
  {
    name: 'Aquaview 60',
    id: 60,
    focalPoints: [
      { label: 'panoramic_terrace' },
      { label: 'beds', numbers: 6 },
      { label: 'bathrooms', numbers: 1 },
      { label: 'sea_vie' },
    ],
    imgUrl:
      'https://static.wixstatic.com/media/b00006_040c6098b2024d069d2b203d647bd1e5~mv2.png/v1/fill/w_355,h_269,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/b00006_040c6098b2024d069d2b203d647bd1e5~mv2.png',
  },
  {
    name: 'Aquaview 90',
    id: 90,
    focalPoints: [
      { label: 'panoramic_terrace' },
      { label: 'beds', numbers: 7 },
      { label: 'bathrooms', numbers: 3 },
      { label: 'sea_vie' },
    ],
    imgUrl:
      'https://static.wixstatic.com/media/b00006_6e02914d3bdb4c54a44c11985840245f~mv2.png/v1/fill/w_355,h_269,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/photo_5980969739435576629_y_edited_edite.png',
  },
];

const Home = () => {
  const { t } = useTranslation();
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <>
      <div className="home-hero">
        <img
          className="home-hero-img"
          src="https://static.wixstatic.com/media/b00006_628574cf16f548f1888442ac1d53afb2~mv2.jpg/v1/fill/w_1960,h_1000,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/b00006_628574cf16f548f1888442ac1d53afb2~mv2.jpg"
          alt="giannutri drone.jpg"
        />
        <div className="home-hero-overlay">
          <Typography variant="h2" align="center" className="home-hero-title">
            {t('home_title')}
            <br />
            {t('home_title2')}
          </Typography>
          <Typography variant="subtitle2" align="center" className="home-hero-sub">
            {t('home_subtitle')}
          </Typography>
          <Button variant="contained" href="#contact">
            {t('contact_us')}
          </Button>
        </div>
      </div>
      <div className="home-welcome">
        <div className="home-welcome-content">
          <Typography variant="h5" align="center" className="home-welcome-title">
            {t('welcome_title')}
          </Typography>
          <Typography variant="body1" align="center" className="home-welcome-body">
            {t('welcome_subtitle')}
          </Typography>
          <Typography variant="body1" align="center" className="home-welcome-body">
            {t('welcome_subtitle2')}
          </Typography>
        </div>
      </div>
      <div id="ours-apartments" className="home-cards-section" ref={ref}>
        <Typography variant="h3" className="home-cards-title">
          {t('ours_apartments')}
        </Typography>
        <Grid container spacing={4} justifyContent="center">
          {apartments.map((appartament, index) => (
            <Grid item size={{ xs: 12, md: 4 }}>
              <CardAppartament key={index} inView={inView} appartament={appartament} />
            </Grid>
          ))}
        </Grid>
      </div>
      <Grid
        container
        className="giannutri-section"
        spacing={2}
        p={{ xs: 4, md: 8 }}
        alignItems="center"
        justifyContent={'space-between'}
      >
        {/* TESTO */}
        <Grid item size={{ xs: 12, md: 6 }}>
          <Typography variant="h2" className="giannutri-title">
            {t('giannutri_island')}
          </Typography>
          <div className="giannutri-bar" />
          <Button variant="contained" color="secondary" href="/giannutri" className="giannutri-btn">
            {t('discovery_island')}
          </Button>
        </Grid>
        <Grid item size={{ xs: 12, md: 6 }}>
          <Typography variant="h5" className="giannutri-subtitle">
            {t('discovery_island_title')}
          </Typography>
          <Typography variant="body1" className="giannutri-body">
            {t('discovery_island_body1')}
          </Typography>
          <Typography variant="body1" className="giannutri-body">
            {t('discovery_island_body2')}
          </Typography>
        </Grid>
      </Grid>
      <Grid
        container
        className="aquaview-section"
        spacing={{ xs: 1, md: 2 }}
        p={{ xs: 4, md: 8 }}
        alignItems="center"
        justifyContent={'space-between'}
      >
        {/* TESTO */}
        <Grid item size={{ xs: 12, md: 6 }}>
          <Box sx={{ xs: { textAlign: 'center' }, md: {} }}>
            <Typography
              variant="h5"
              fontWeight={700}
              gutterBottom
              sx={{ md: { color: '#14242d' } }}
              textAlign={{ xs: 'center', md: 'left' }}
            >
              {t('why_aquaview')}
            </Typography>

            <Box>
              {[
                'why_aquaview_direct_contact',
                'why_aquaview_selected_apartments',
                'why_aquaview_assistance',
                'why_aquaview_experience',
              ].map((text) => (
                <Typography key={text} component="p" display={'block'}>
                  <DoneIcon /> {t(text)}
                </Typography>
              ))}
            </Box>
          </Box>
          <Box textAlign={{ xs: 'center', md: 'left' }} pt={{ xs: 4 }}>
            <Button
              variant="contained"
              color="secondary"
              href="/chi-siamo"
              className="giannutri-btn"
            >
              {t('who_are')}
            </Button>
          </Box>
        </Grid>

        {/* IMMAGINE */}
        <Grid item size={{ xs: 6, md: 6 }}>
          <Box
            component="img"
            src={GiannutriLogo}
            alt="Isola di Giannutri"
            className="header__island"
          />
        </Grid>
      </Grid>

      <ContactFormSection object={'Ti contatto dalla Home'} />
    </>
  );
};

export default Home;
