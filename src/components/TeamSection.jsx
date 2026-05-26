import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import { useTranslation } from "../i18n/useTranslation";

export default function TeamSection() {
  const t = useTranslation();
  const [featured] = t.team.doctors;

  return (
    <Box
      component="section"
      id="team"
      sx={{ py: { xs: 10, md: 14 }, bgcolor: "#FFFFFF" }}
    >
      <Container>
        {/* Section label */}
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
          {t.team.subtitle}
        </Typography>

        <Grid container spacing={6} alignItems="center">
          {/* Left: Bio */}
          <Grid item xs={12} md={6}>
            <Typography
              variant="h2"
              sx={{
                fontSize: { xs: "2rem", md: "2.8rem" },
                fontWeight: 400,
                mb: 5,
                color: "text.primary",
                lineHeight: 1.15,
              }}
            >
              {t.team.title}
            </Typography>

            <Typography
              variant="h5"
              sx={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "1.5rem",
                fontWeight: 500,
                mb: 0.5,
                color: "text.primary",
              }}
            >
              {featured.name}
            </Typography>
            <Typography
              variant="overline"
              sx={{
                letterSpacing: "0.2em",
                fontSize: "0.65rem",
                color: "secondary.dark",
                display: "block",
                mb: 3,
              }}
            >
              {t.team.featured.role}
            </Typography>

            <Typography
              variant="body1"
              sx={{
                color: "text.secondary",
                lineHeight: 1.9,
                mb: 2.5,
                fontSize: "0.9rem",
              }}
            >
              {t.team.featured.bio1}
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: "text.secondary",
                lineHeight: 1.9,
                mb: 4,
                fontSize: "0.9rem",
              }}
            >
              {t.team.featured.bio2}
            </Typography>

            <Link
              href="#contact"
              sx={{
                fontSize: "0.8rem",
                letterSpacing: "0.06em",
                color: "text.primary",
                fontWeight: 500,
                textDecoration: "none",
                borderBottom: "1px solid rgba(26,22,18,0.4)",
                pb: 0.3,
                "&:hover": { borderColor: "text.primary" },
              }}
            >
              {t.team.featured.viewBio} →
            </Link>
          </Grid>

          {/* Right: Photo */}
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                position: "relative",
                overflow: "hidden",
                borderRadius: "2px",
              }}
            >
              <Box
                component="img"
                src={featured.photo}
                alt={featured.name}
                sx={{
                  width: "100%",
                  height: { xs: 380, md: 520 },
                  objectFit: "cover",
                  display: "block",
                }}
              />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
