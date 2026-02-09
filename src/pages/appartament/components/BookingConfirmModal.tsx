import React, { useState } from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Typography,
  Box,
  TextField,
  Checkbox,
  FormControlLabel,
  Link,
  Stack,
  Alert,
  Grid,
} from '@mui/material';
import { useTranslation } from 'react-i18next';
import { useForm, Controller } from 'react-hook-form';
import PrefixPhoneInput from '../../../components/inputs/PrefixPhoneInput';
import { Turnstile } from '@marsidev/react-turnstile';
const siteKey = import.meta.env.VITE_SITE_KEY_TURNSTILE;

const phoneRegex = /^([+]?\d{1,3})?\s?\d{6,14}$/;
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function BookingConfirmModal({ open, onClose, onConfirm, booking, priceDetail }) {
  const { t } = useTranslation();
  const {
    control,
    handleSubmit,
    formState: { errors },
    setError,
    clearErrors,
  } = useForm({
    defaultValues: {
      name: '',
      surname: '',
      phone: '',
      email: '',
      detailsChecked: false,
      prefix: '+39',
    },
  });
  const [submitError, setSubmitError] = useState('');
  const [turnstileToken, setTurnstileToken] = useState('');

  const onSubmit = (data) => {
    setSubmitError('');
    if (!turnstileToken) {
      setSubmitError(t('captcha_required'));
      return;
    }
    if (!data.detailsChecked) {
      setError('detailsChecked', { type: 'manual', message: t('must_accept_giannutri_details') });
      setSubmitError(t('please_check_fields'));
      return;
    }
    onConfirm({ ...data, turnstileToken });
  };

  return (
    <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth sx={{ px: 5 }}>
      <DialogTitle fontWeight={700}>{t('confirm_booking')}</DialogTitle>
      <DialogContent sx={{ py: 0 }}>
        <Stack direction="row" spacing={2} mb={2}>
          <Typography variant="subtitle1">
            {t('dates')}:{' '}
            <b>
              {booking.startDate?.toLocaleDateString()} - {booking.endDate?.toLocaleDateString()}
            </b>
          </Typography>
          <Typography variant="subtitle1">
            {t('nights')}: <b>{priceDetail.totalNights}</b>
          </Typography>
          <Typography variant="subtitle1">
            {t('total_price')}: <b>{priceDetail.totalPrice.toFixed(2)}€</b>
          </Typography>
        </Stack>
        <Box component="form" onSubmit={handleSubmit(onSubmit)}>
          <Stack spacing={2}>
            <Controller
              name="name"
              control={control}
              rules={{ required: t('name_required') }}
              render={({ field }) => (
                <TextField
                  {...field}
                  label={t('name')}
                  required
                  error={!!errors.name}
                  helperText={errors.name?.message}
                />
              )}
            />
            <Controller
              name="surname"
              control={control}
              rules={{ required: t('surname_required') }}
              render={({ field }) => (
                <TextField
                  {...field}
                  label={t('surname')}
                  required
                  error={!!errors.surname}
                  helperText={errors.surname?.message}
                />
              )}
            />
            <Grid container spacing={2}>
              <Grid size={3}>
                <PrefixPhoneInput control={control} name="prefix" />
              </Grid>
              <Grid size={9}>
                <Controller
                  name="phone"
                  control={control}
                  rules={{
                    required: t('phone_not_valid'),
                    pattern: {
                      value: /^([+]?[0-9]{1,3})?\s?[0-9]{6,14}$/,
                      message: t('phone_not_valid'),
                    },
                  }}
                  render={({ field }) => (
                    <TextField
                      sx={{ width: '100%' }}
                      {...field}
                      label={t('phone')}
                      required
                      error={!!errors.phone}
                      helperText={errors.phone?.message}
                    />
                  )}
                />
              </Grid>
            </Grid>
            <Controller
              name="email"
              control={control}
              rules={{
                required: t('email_not_valid'),
                pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: t('email_not_valid') },
              }}
              render={({ field }) => (
                <TextField
                  {...field}
                  label={t('email')}
                  required
                  error={!!errors.email}
                  helperText={errors.email?.message}
                />
              )}
            />
            <Controller
              name="detailsChecked"
              control={control}
              rules={{ required: t('must_accept_giannutri_details') }}
              render={({ field }) => (
                <>
                  <FormControlLabel
                    control={<Checkbox {...field} checked={!!field.value} color="primary" />}
                    label={
                      <span>
                        {t('giannutri_details_checkbox')}{' '}
                        <Link href="/giannutri" target="_blank" rel="noopener">
                          {t('read_giannutri_details')}
                        </Link>
                      </span>
                    }
                  />
                  {errors.detailsChecked && (
                    <Typography variant="caption" color="error" id="detailsChecked-error">
                      {errors.detailsChecked.message}
                    </Typography>
                  )}
                </>
              )}
            />
            <Box sx={{ my: 2, display: 'none' }}>
              <Turnstile
                siteKey={siteKey}
                onSuccess={setTurnstileToken}
                onExpire={() => setTurnstileToken('')}
                options={{ theme: 'light' }}
              />
              {submitError && submitError === t('captcha_required') && (
                <Typography variant="caption" color="error">
                  {submitError}
                </Typography>
              )}
            </Box>
            {submitError && <Alert severity="error">{submitError}</Alert>}
          </Stack>
        </Box>
        <Box>
          <Typography variant="body2" color="textSecondary" mt={2}>
            {t('booking_confirmation_note')}
          </Typography>
        </Box>
      </DialogContent>
      <DialogActions sx={{ justifyContent: 'center', p: 3 }}>
        <Button onClick={onClose} variant="contained" color="error">
          {t('cancel')}
        </Button>
        <Button onClick={handleSubmit(onSubmit)} variant="contained" color="primary">
          {t('book_now')}
        </Button>
      </DialogActions>
    </Dialog>
  );
}
