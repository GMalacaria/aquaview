import {
  AppBar,
  Toolbar,
  Box,
  Typography,
  Link,
  Button,
  Stack,
  Menu,
  MenuItem,
  IconButton,
  Drawer,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { useState } from 'react';
import './header.scss';
import { useTranslation } from 'react-i18next';
import GiannutriLogo from '../../assets/Giannutri-logo.png';

const Languages = {
  en: 'GBR',
  it: 'ITA',
};

const Header = () => {
  const { t, i18n } = useTranslation();

  const [langAnchor, setLangAnchor] = useState(null);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [language, setLanguage] = useState(localStorage.getItem('localLanguage') || 'it');

  const handleCloseLang = (lng) => {
    setLangAnchor(null);
    if (lng) {
      setLanguage(lng);
      localStorage.setItem('localLanguage', lng);
      i18n.changeLanguage(lng);
    }
  };

  return (
    <>
      <AppBar position="sticky" elevation={0} className="header">
        <Toolbar className="header__toolbar">
          {/* HAMBURGER – ACCESSIBILE */}
          <IconButton
            className="header__hamburger"
            sx={{ bgcolor: 'white' }}
            onClick={() => setDrawerOpen(true)}
            aria-label={t('open_menu', 'Apri menu di navigazione')}
            aria-controls="mobile-navigation"
            aria-expanded={drawerOpen}
          >
            <MenuIcon />
          </IconButton>

          {/* LOGO */}
          <Box className="header__logo">
            <Link
              href="/"
              underline="none"
              color="inherit"
              className="header-logo"
              aria-label={t('go_home', 'Vai alla homepage')}
            >
              <Typography variant="h6">{t('aquaview_giannutri')}</Typography>
              <Box component="img" src={GiannutriLogo} alt="Isola di Giannutri" />
            </Link>
          </Box>

          {/* MENU DESKTOP – SEMANTICO */}
          <nav id="main-navigation" aria-label={t('main_navigation', 'Navigazione principale')}>
            <Stack direction="row" spacing={3} className="header__menu">
              <Link href="/" color="inherit" underline="none">
                {t('home')}
              </Link>
              <Link href="/#ours-apartments" color="inherit" underline="none">
                {t('ours_apartments')}
              </Link>

              <Link href="/giannutri" color="inherit" underline="none">
                {t('giannutri')}
              </Link>

              <Link href="/chi-siamo" color="inherit" underline="none">
                {t('who_are')}
              </Link>
            </Stack>
          </nav>

          {/* LANGUAGE SELECTOR – ACCESSIBILE */}
          <Box className="header__lang">
            <IconButton
              onClick={(e) => setLangAnchor(e.currentTarget)}
              aria-label={t('change_language', 'Cambia lingua')}
              aria-controls={langAnchor ? 'language-menu' : undefined}
              aria-haspopup="menu"
              aria-expanded={Boolean(langAnchor)}
            >
              <img
                src={`https://static.parastorage.com/services/linguist-flags/1.969.0/assets/flags/round/${Languages[language]}.png`}
                alt={t(`lang_${language}`)}
              />
              {t(`lang_${language}`)}
              <KeyboardArrowDownIcon />
            </IconButton>

            <Menu
              id="language-menu"
              anchorEl={langAnchor}
              open={Boolean(langAnchor)}
              onClose={() => handleCloseLang()}
              MenuListProps={{
                role: 'menu',
                'aria-label': t('language_menu', 'Selezione lingua'),
              }}
            >
              <MenuItem onClick={() => handleCloseLang('it')}>
                <Box
                  component="img"
                  src="https://static.parastorage.com/services/linguist-flags/1.969.0/assets/flags/round/ITA.png"
                  sx={{ width: 20, mr: 1 }}
                />
                {t(`lang_it`, 'IT')}
              </MenuItem>
              <MenuItem onClick={() => handleCloseLang('en')}>
                <Box
                  component="img"
                  src="https://static.parastorage.com/services/linguist-flags/1.969.0/assets/flags/round/GBR.png"
                  sx={{ width: 20, mr: 1 }}
                />
                {t(`lang_en`, 'EN')}
              </MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </AppBar>

      {/* DRAWER MOBILE */}
      <Drawer
        id="mobile-navigation"
        anchor="left"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        role="navigation"
        aria-label={t('mobile_navigation', 'Navigazione mobile')}
      >
        <Box className="mobile-menu">
          {/* HEADER MENU MOBILE */}
          <Box className="mobile-menu__header">
            <Typography variant="body1" component="span">
              {t('acquaview_giannutri', 'AquaView Giannutri')}
            </Typography>

            <IconButton
              onClick={() => setDrawerOpen(false)}
              aria-label={t('close_menu', 'Chiudi menu')}
            >
              <CloseIcon />
            </IconButton>
          </Box>

          {/* LINK NAVIGAZIONE */}
          <Button component="a" href="/" onClick={() => setDrawerOpen(false)}>
            {t('home', 'Home')}
          </Button>

          <Button component="a" href="/#ours-apartments" onClick={() => setDrawerOpen(false)}>
            {t('ours_apartments')}
          </Button>

          <Button component="a" href="/giannutri" onClick={() => setDrawerOpen(false)}>
            {t('giannutri')}
          </Button>

          <Button component="a" href="/chi-siamo" onClick={() => setDrawerOpen(false)}>
            {t('who_are')}
          </Button>
        </Box>
      </Drawer>
    </>
  );
};

export default Header;
