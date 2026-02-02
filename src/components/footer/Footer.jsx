import React from 'react';
import { Box, Container, Grid, Typography, Link, IconButton } from '@mui/material';
import { Facebook, Instagram, Twitter } from '@mui/icons-material';
import './footer.scss';
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <Box component="footer" id="footer">
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          {/* Sezione Informazioni */}
          <Grid item size={{ xs: 12, md: 12 }}>
            <Typography variant="h6" gutterBottom>
              {t('aquaview_giannutri')}
            </Typography>
          </Grid>

          {/* Sezione Link Utili */}
          <Grid item size={{ xs: 12, md: 4 }}>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
              <Link href="/giannutri" color="inherit" underline="none">
                {t('giannutri_island')}
              </Link>
              <Link href="/#ours-apartments" color="inherit" underline="none">
                {t('ours_apartments')}
              </Link>
              <Link href="/chi-siamo" color="inherit" underline="none">
                {t('who_are')}
              </Link>
              <Link href="/privacy" color="inherit" underline="none">
                {t('privacy_policy')}
              </Link>
            </Box>
          </Grid>

          {/* Sezione Contatti */}
          <Grid item size={{ xs: 12, md: 4 }}>
            <Typography variant="h6" gutterBottom>
              Contatti
            </Typography>
            <Typography variant="body2">
              {`${t('email')}: `}
              <Link href="mailto:aquaviewgiannutri@gmail.com" color="inherit" underline="none">
                aquaviewgiannutri@gmail.com
              </Link>
            </Typography>
            <Typography variant="body2">
              {`${t('phone')}: `}
              <Link href="tel:+393357492944" color="inherit" underline="none">
                +39 3357492944
              </Link>
            </Typography>
            {/* METTERE LINK BOOKING/B&B */}
            {/*     <Box sx={{ mt: 2 }}>
              <IconButton href="https://www.facebook.com" target="_blank" color="inherit">
                <Facebook />
              </IconButton>
              <IconButton href="https://www.instagram.com" target="_blank" color="inherit">
                <Instagram />
              </IconButton>
              <IconButton href="https://twitter.com" target="_blank" color="inherit">
                <Twitter />
              </IconButton>
            </Box> */}
          </Grid>
        </Grid>

        {/* Copyright */}
        <Box sx={{ mt: 4, textAlign: 'center' }}>
          <Typography variant="body2">
            &copy; {new Date().getFullYear()} {t('aquaview_all_rights_reserved')}
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
