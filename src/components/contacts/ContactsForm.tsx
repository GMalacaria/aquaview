import { Box, Container, TextField, Button, Grid, Typography, MenuItem } from '@mui/material';
import { Controller, useForm } from 'react-hook-form';
import './contacts.scss';
import { useTranslation } from 'react-i18next';
import * as PHONE_PREFIXES from '../../assets/phonePrefixes.merged.json';

type Prefix = {
  dial_code: string;
  flagSrc?: string;
  sigla: string;
  name: string;
};

const dedupePrefixes = (items: Prefix[]) => {
  const map = new Map<string, Prefix>();
  const normalizeDialCode = (code) => Number(code.replace(/[^\d]/g, ''));

  for (const item of items) {
    const key = `${item.dial_code}__${item.flagSrc ?? ''}`;

    if (!map.has(key)) {
      map.set(key, item);
    }
  }

  return Array.from(map.values()).sort(
    (a, b) => normalizeDialCode(a.dial_code) - normalizeDialCode(b.dial_code)
  );
};

export default function ContactFormSection({ object }) {
  const { t } = useTranslation();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
    control,
  } = useForm();

  const onSubmit = (data) => {
    const telefonoCompleto = data.phoneNumber ? `${data.phonePrefix} ${data.phoneNumber}` : '';

    const payload = {
      ...data,
      telefono: telefonoCompleto,
    };

    delete payload.phonePrefix;
    delete payload.phoneNumber;

    console.log({ object, ...payload });
  };
  return (
    <Box component="section" sx={{ py: { xs: 6, md: 10 } }} id="contact">
      <Container maxWidth="sm" id="form" sx={{ py: 3, borderRadius: 1 }}>
        <Typography variant="h5" fontWeight={700} align="center" gutterBottom>
          {t('contact_us')}
        </Typography>

        <Box component="form" onSubmit={handleSubmit(onSubmit)} noValidate sx={{ mt: 4 }}>
          <Grid container spacing={2}>
            {/* Nome */}
            <Grid item size={{ xs: 12, sm: 6 }}>
              <TextField
                label={`${t('name')}*`}
                fullWidth
                {...register('nome', {
                  required: t('name_required'),
                })}
                error={!!errors.nome}
                helperText={errors.nome?.message}
              />
            </Grid>

            {/* Cognome */}
            <Grid item size={{ xs: 12, sm: 6 }}>
              <TextField label={`${t('surname')}*`} fullWidth {...register('cognome')} />
            </Grid>

            {/* Email */}
            <Grid item size={{ xs: 12, sm: 6 }}>
              <TextField
                label={`${t('email')}*`}
                fullWidth
                {...register('email', {
                  required: t('email_required'),
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: t('email_not_valid'),
                  },
                })}
                error={!!errors.email}
                helperText={errors.email?.message}
              />
            </Grid>

            {/* prefisso */}
            <Grid size={{ xs: 5, sm: 3 }}>
              <Controller
                name="phonePrefix"
                control={control}
                defaultValue="+39"
                rules={{ required: t('prefix_required') }}
                render={({ field, fieldState }) => (
                  <TextField
                    select
                    label={`${t('prefix')}*`}
                    fullWidth
                    {...field}
                    error={!!fieldState.error}
                    helperText={fieldState.error?.message}
                  >
                    {dedupePrefixes(PHONE_PREFIXES.default).map((p, index) => (
                      <MenuItem key={p.sigla + index} value={p.dial_code}>
                        <Box
                          id={p.name}
                          sx={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: 1,
                          }}
                        >
                          {p.flagSrc ? (
                            <Box
                              component="img"
                              src={`https:${p.flagSrc}`}
                              alt={`flag ${p.name}`}
                              sx={{ width: 24, height: 16, objectFit: 'cover' }}
                            />
                          ) : (
                            <Typography variant="body2">{p.sigla}</Typography>
                          )}

                          <Typography variant="body2">{p.dial_code}</Typography>
                        </Box>
                      </MenuItem>
                    ))}
                  </TextField>
                )}
              />
            </Grid>

            {/* telefono */}
            <Grid size={{ xs: 7, sm: 3 }}>
              <TextField
                label={t('phone')}
                fullWidth
                {...register('phoneNumber', {
                  pattern: {
                    value: /^[0-9\s()-]{6,15}$/,
                    message: t('phone_not_valid'),
                  },
                })}
                error={!!errors.phoneNumber}
                helperText={errors.phoneNumber?.message}
              />
            </Grid>

            {/* Messaggio */}
            <Grid item size={12}>
              <TextField
                label={`${t('message')}*`}
                fullWidth
                multiline
                rows={4}
                {...register('messaggio', {
                  required: t('message_required'),
                })}
                error={!!errors.messaggio}
                helperText={errors.messaggio?.message?.toString()}
              />
            </Grid>

            {/* Bottone */}
            <Grid item size={12} textAlign="center">
              <Button type="submit" variant="contained" size="large">
                {t('send_message')}
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
}
