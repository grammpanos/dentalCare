import { useState } from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import IconButton from "@mui/material/IconButton";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import { useTranslation } from "../i18n/useTranslation";

const socialLinks = [
  { Icon: InstagramIcon, label: "Instagram", url: "#" },
  { Icon: FacebookIcon, label: "Facebook", url: "#" },
];

export default function Footer() {
  const t = useTranslation();
  const [email, setEmail] = useState("");

  return (
    <Box
      component="footer"
      sx={{ bgcolor: "#1A1612", color: "#F5F0EB", pt: { xs: 8, md: 10 }, pb: 4 }}
    >
      <Container>
        <Grid container spacing={4} sx={{ mb: 6 }}>
          {/* Brand column */}
          <Grid item xs={12} md={3}>
            <Typography
              sx={{
                fontWeight: 600,
                letterSpacing: "0.22em",
                fontSize: "0.82rem",
                mb: 2,
                color: "#F5F0EB",
              }}
            >
              ALEXIA STAMATI
            </Typography>
            <Typography
              variant="body2"
              sx={{
                color: "rgba(245,240,235,0.55)",
                lineHeight: 1.85,
                fontSize: "0.82rem",
                mb: 3,
                maxWidth: 240,
              }}
            >
              {t.footer.tagline}
            </Typography>
            <Box sx={{ display: "flex", gap: 0.5, mt: 1 }}>
              {socialLinks.map(({ Icon, label, url }) => (
                <IconButton
                  key={label}
                  component="a"
                  href={url}
                  aria-label={label}
                  size="small"
                  sx={{
                    color: "rgba(245,240,235,0.6)",
                    "&:hover": { color: "#F5F0EB" },
                    p: 0.7,
                  }}
                >
                  <Icon sx={{ fontSize: 18 }} />
                </IconButton>
              ))}
            </Box>
          </Grid>

          {/* Link columns */}
          {t.footer.columns.map((col) => (
            <Grid item xs={6} sm={3} md={2} key={col.title}>
              <Typography
                variant="overline"
                sx={{
                  color: "rgba(245,240,235,0.4)",
                  letterSpacing: "0.18em",
                  fontSize: "0.62rem",
                  display: "block",
                  mb: 2,
                }}
              >
                {col.title}
              </Typography>
              <Box sx={{ display: "flex", flexDirection: "column", gap: 1.2 }}>
                {col.links.map((link) => (
                  <Link
                    key={link}
                    href="#"
                    underline="none"
                    sx={{
                      color: "rgba(245,240,235,0.6)",
                      fontSize: "0.82rem",
                      lineHeight: 1.5,
                      "&:hover": { color: "#F5F0EB" },
                      transition: "color 0.15s",
                    }}
                  >
                    {link}
                  </Link>
                ))}
              </Box>
            </Grid>
          ))}

          {/* Newsletter */}
          <Grid item xs={12} md={3}>
            <Typography
              variant="overline"
              sx={{
                color: "rgba(245,240,235,0.4)",
                letterSpacing: "0.18em",
                fontSize: "0.62rem",
                display: "block",
                mb: 2,
              }}
            >
              NEWSLETTER
            </Typography>
            <Typography
              variant="body2"
              sx={{
                color: "rgba(245,240,235,0.6)",
                fontSize: "0.82rem",
                lineHeight: 1.75,
                mb: 2.5,
              }}
            >
              {t.footer.newsletter.title}
            </Typography>
            <Box sx={{ display: "flex", gap: 1 }}>
              <TextField
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={t.footer.newsletter.placeholder}
                size="small"
                variant="outlined"
                sx={{
                  flex: 1,
                  "& .MuiOutlinedInput-root": {
                    borderRadius: "3px",
                    bgcolor: "rgba(245,240,235,0.07)",
                    "& fieldset": { borderColor: "rgba(245,240,235,0.15)" },
                    "&:hover fieldset": { borderColor: "rgba(245,240,235,0.3)" },
                    "& input": {
                      color: "#F5F0EB",
                      fontSize: "0.82rem",
                      "&::placeholder": { color: "rgba(245,240,235,0.35)" },
                    },
                  },
                }}
              />
              <Button
                variant="contained"
                onClick={() => setEmail("")}
                sx={{
                  bgcolor: "#F5F0EB",
                  color: "#1A1612",
                  borderRadius: "3px",
                  px: 2,
                  fontSize: "0.78rem",
                  fontWeight: 600,
                  whiteSpace: "nowrap",
                  "&:hover": { bgcolor: "#E8E2DA" },
                  boxShadow: "none",
                }}
              >
                {t.footer.newsletter.button}
              </Button>
            </Box>
          </Grid>
        </Grid>

        {/* Bottom bar */}
        <Box
          sx={{
            borderTop: "1px solid rgba(245,240,235,0.1)",
            pt: 3,
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            justifyContent: "space-between",
            alignItems: { md: "center" },
            gap: 1.5,
          }}
        >
          <Typography
            variant="caption"
            sx={{ color: "rgba(245,240,235,0.35)", fontSize: "0.75rem" }}
          >
            {t.footer.rights}
          </Typography>
          <Box sx={{ display: "flex", gap: 3 }}>
            {["Privacy Policy", "Terms of Use", "Cookies"].map((item) => (
              <Link
                key={item}
                href="#"
                underline="none"
                sx={{
                  color: "rgba(245,240,235,0.35)",
                  fontSize: "0.75rem",
                  "&:hover": { color: "rgba(245,240,235,0.7)" },
                }}
              >
                {item}
              </Link>
            ))}
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
