import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { useTranslation } from "../i18n/useTranslation";

export default function HeroSection() {
  const t = useTranslation();

  return (
    <Box
      id="home"
      component="section"
      sx={{
        position: "relative",
        minHeight: { xs: "70vh", md: "92vh" },
        display: "flex",
        alignItems: "flex-end",
        overflow: "hidden",
      }}
    >
      {/* Full-width background image */}
      <Box
        component="img"
        src="/images/background.jpeg"
        alt="Alexia Stamati Dental Clinic"
        sx={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          objectPosition: "center",
        }}
      />

      {/* Subtle gradient overlay so text is readable on the left */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          background: {
            xs: "linear-gradient(to top, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.25) 60%, transparent 100%)",
            md: "linear-gradient(to right, rgba(245,240,235,0.82) 0%, rgba(245,240,235,0.6) 38%, rgba(245,240,235,0.1) 60%, transparent 100%)",
          },
        }}
      />

      {/* ALEXIA STAMATI watermark — right side */}
      <Box
        sx={{
          position: "absolute",
          right: { xs: 16, md: 48 },
          top: "50%",
          transform: "translateY(-50%)",
          pointerEvents: "none",
          userSelect: "none",
          display: { xs: "none", md: "block" },
        }}
      >
        <Typography
          sx={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: { md: "2.8rem", lg: "3.5rem" },
            fontWeight: 300,
            fontStyle: "italic",
            letterSpacing: "0.12em",
            color: "rgba(201,180,154,0.75)",
            whiteSpace: "nowrap",
          }}
        >
          Alexia Stamati
        </Typography>
      </Box>

      {/* Text content — bottom left */}
      <Box
        sx={{
          position: "relative",
          zIndex: 1,
          px: { xs: 3, md: 8, lg: 12 },
          pb: { xs: 6, md: 10 },
          maxWidth: { xs: "100%", md: "55%", lg: "48%" },
        }}
      >
        <Typography
          variant="h1"
          sx={{
            fontSize: { xs: "2.2rem", md: "3rem", lg: "3.8rem" },
            fontWeight: 400,
            lineHeight: 1.1,
            mb: 2.5,
            color: { xs: "#FFFFFF", md: "text.primary" },
          }}
        >
          {t.hero.title}
        </Typography>
        <Typography
          variant="body1"
          sx={{
            color: { xs: "rgba(255,255,255,0.88)", md: "text.secondary" },
            mb: 4.5,
            maxWidth: 440,
            lineHeight: 1.85,
            fontSize: "0.95rem",
          }}
        >
          {t.hero.subtitle}
        </Typography>
        <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
          <Button
            href="#contact"
            variant="contained"
            color="primary"
            size="large"
            sx={{
              px: 3.5,
              py: 1.3,
              fontSize: "0.82rem",
              borderRadius: "999px",
              bgcolor: { xs: "#6b5c45", md: "primary.main" },
            }}
          >
            {t.hero.primaryCta}
          </Button>
          <Button
            href="#services"
            variant="outlined"
            size="large"
            sx={{
              px: 3.5,
              py: 1.3,
              fontSize: "0.82rem",
              borderRadius: "999px",
              borderColor: { xs: "rgba(255,255,255,0.7)", md: "rgba(26,22,18,0.35)" },
              color: { xs: "#FFFFFF", md: "text.primary" },
              "&:hover": {
                borderColor: { xs: "#FFFFFF", md: "primary.main" },
                bgcolor: "transparent",
              },
            }}
          >
            {t.hero.secondaryCta}
          </Button>
        </Stack>
      </Box>
    </Box>
  );
}
