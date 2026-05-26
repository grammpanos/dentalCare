import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import PhoneOutlinedIcon from "@mui/icons-material/PhoneOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";
import { useTranslation } from "../i18n/useTranslation";

const fieldSx = {
  "& .MuiOutlinedInput-root": {
    borderRadius: "3px",
    bgcolor: "#F9F6F2",
    "& fieldset": { borderColor: "rgba(26,22,18,0.15)" },
    "&:hover fieldset": { borderColor: "rgba(26,22,18,0.35)" },
  },
  "& .MuiInputLabel-root": { fontSize: "0.875rem" },
  "& .MuiInputBase-input": { fontSize: "0.875rem" },
};

export default function ContactSection() {
  const t = useTranslation();

  return (
    <Box
      component="section"
      id="contact"
      sx={{ py: { xs: 10, md: 14 }, bgcolor: "#F5F0EB" }}
    >
      <Container>
        <Grid container spacing={8} alignItems="flex-start">
          {/* Left: Contact info */}
          <Grid item xs={12} md={5}>
            <Typography
              variant="overline"
              sx={{
                color: "secondary.dark",
                letterSpacing: "0.28em",
                fontSize: "0.68rem",
                mb: 2,
                display: "block",
              }}
            >
              {t.contact.subtitle}
            </Typography>
            <Typography
              variant="h2"
              sx={{
                fontSize: { xs: "2rem", md: "2.6rem" },
                fontWeight: 400,
                lineHeight: 1.15,
                mb: 2.5,
                color: "text.primary",
              }}
            >
              {t.contact.title}
            </Typography>
            <Typography
              variant="body2"
              sx={{
                color: "text.secondary",
                lineHeight: 1.9,
                mb: 5,
                fontSize: "0.875rem",
              }}
            >
              {t.contact.description}
            </Typography>

            {/* Contact items */}
            {[
              { Icon: LocationOnOutlinedIcon, text: t.contact.address },
              { Icon: PhoneOutlinedIcon, text: t.contact.phone },
              {
                Icon: AccessTimeOutlinedIcon,
                text: t.contact.hours.join("  ·  "),
              },
              { Icon: EmailOutlinedIcon, text: t.contact.email },
            ].map(({ Icon, text }) => (
              <Box
                key={text}
                sx={{ display: "flex", gap: 2, mb: 3, alignItems: "flex-start" }}
              >
                <Icon
                  sx={{
                    fontSize: 18,
                    color: "secondary.dark",
                    mt: 0.2,
                    flexShrink: 0,
                  }}
                />
                <Typography
                  variant="body2"
                  sx={{ color: "text.secondary", lineHeight: 1.7, fontSize: "0.875rem" }}
                >
                  {text}
                </Typography>
              </Box>
            ))}

            {/* Clinic photo */}
            <Box
              component="img"
              src="/images/2.jpeg"
              alt="Clinic waiting area"
              sx={{
                mt: 4,
                width: "100%",
                height: 220,
                objectFit: "cover",
                objectPosition: "center",
                borderRadius: "4px",
                display: "block",
              }}
            />
          </Grid>

          {/* Right: Form */}
          <Grid item xs={12} md={7}>
            <Box
              sx={{
                bgcolor: "#FFFFFF",
                p: { xs: 4, md: 5 },
                borderRadius: "4px",
                border: "1px solid rgba(26,22,18,0.08)",
              }}
            >
              <Box
                component="form"
                noValidate
                onSubmit={(event) => event.preventDefault()}
              >
                <Grid container spacing={2.5}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      label={t.contact.form.firstName}
                      fullWidth
                      variant="outlined"
                      size="small"
                      sx={fieldSx}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      label={t.contact.form.lastName}
                      fullWidth
                      variant="outlined"
                      size="small"
                      sx={fieldSx}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      label={t.contact.form.email}
                      fullWidth
                      variant="outlined"
                      size="small"
                      sx={fieldSx}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      label={t.contact.form.phone}
                      fullWidth
                      variant="outlined"
                      size="small"
                      sx={fieldSx}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <FormControl fullWidth size="small">
                      <InputLabel sx={{ fontSize: "0.875rem" }}>
                        {t.contact.form.service}
                      </InputLabel>
                      <Select
                        label={t.contact.form.service}
                        defaultValue=""
                        sx={{
                          borderRadius: "3px",
                          bgcolor: "#F9F6F2",
                          fontSize: "0.875rem",
                          "& fieldset": { borderColor: "rgba(26,22,18,0.15)" },
                        }}
                      >
                        {t.contact.form.serviceOptions.map((opt) => (
                          <MenuItem key={opt} value={opt} sx={{ fontSize: "0.875rem" }}>
                            {opt}
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                  </Grid>
                  <Grid item xs={12}>
                    <FormControl fullWidth size="small">
                      <InputLabel sx={{ fontSize: "0.875rem" }}>
                        {t.contact.form.referral}
                      </InputLabel>
                      <Select
                        label={t.contact.form.referral}
                        defaultValue=""
                        sx={{
                          borderRadius: "3px",
                          bgcolor: "#F9F6F2",
                          fontSize: "0.875rem",
                          "& fieldset": { borderColor: "rgba(26,22,18,0.15)" },
                        }}
                      >
                        {t.contact.form.referralOptions.map((opt) => (
                          <MenuItem key={opt} value={opt} sx={{ fontSize: "0.875rem" }}>
                            {opt}
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      label={t.contact.form.notes}
                      fullWidth
                      variant="outlined"
                      multiline
                      minRows={3}
                      size="small"
                      sx={fieldSx}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Button
                      type="submit"
                      variant="contained"
                      color="primary"
                      fullWidth
                      sx={{
                        py: 1.5,
                        fontSize: "0.82rem",
                        letterSpacing: "0.08em",
                        borderRadius: "3px",
                        mt: 0.5,
                      }}
                    >
                      {t.contact.form.submit}
                    </Button>
                    <Typography
                      variant="caption"
                      display="block"
                      sx={{ mt: 2, color: "text.secondary", textAlign: "center" }}
                    >
                      {t.contact.form.disclaimer}
                    </Typography>
                  </Grid>
                </Grid>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
