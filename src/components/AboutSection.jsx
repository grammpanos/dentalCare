import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import { useTranslation } from "../i18n/useTranslation";

export default function AboutSection() {
  const t = useTranslation();

  return (
    <Box
      component="section"
      id="about"
      sx={{
        overflow: "hidden",
        bgcolor: "#F5F0EB",
      }}
    >
      <Grid container>
        {/* Left: Image with badge */}
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            position: "relative",
            minHeight: { xs: 320, md: 560 },
          }}
        >
          <Box
            component="img"
            src="/images/6.jpeg"
            alt="Clinic interior"
            sx={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              display: "block",
              minHeight: { xs: 320, md: 560 },
            }}
          />
          {/* Overlay */}
          <Box
            sx={{
              position: "absolute",
              inset: 0,
              background: "linear-gradient(to top, rgba(0,0,0,0.35) 0%, rgba(0,0,0,0.05) 60%)",
            }}
          />
          {/* Years badge */}
          <Box
            sx={{
              position: "absolute",
              bottom: 40,
              left: 40,
              bgcolor: "rgba(245, 240, 235, 0.92)",
              backdropFilter: "blur(10px)",
              px: 3,
              py: 2.5,
              borderRadius: "2px",
            }}
          >
            <Typography
              sx={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "2.8rem",
                fontWeight: 300,
                lineHeight: 1,
                color: "text.primary",
              }}
            >
              {t.technology.badge}
            </Typography>
            <Typography
              sx={{
                fontSize: "0.62rem",
                fontWeight: 600,
                letterSpacing: "0.22em",
                color: "text.secondary",
                mt: 0.5,
              }}
            >
              {t.technology.badgeLabel}
            </Typography>
          </Box>
        </Grid>

        {/* Right: Text content */}
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            display: "flex",
            alignItems: "center",
            bgcolor: "#FFFFFF",
            px: { xs: 4, md: 8 },
            py: { xs: 7, md: 10 },
          }}
        >
          <Box sx={{ maxWidth: 480 }}>
            <Typography
              variant="overline"
              sx={{
                color: "secondary.dark",
                letterSpacing: "0.28em",
                fontSize: "0.68rem",
                mb: 2.5,
                display: "block",
              }}
            >
              {t.technology.subtitle}
            </Typography>
            <Typography
              variant="h2"
              sx={{
                fontSize: { xs: "2rem", md: "2.6rem" },
                fontWeight: 400,
                lineHeight: 1.15,
                mb: 3,
                color: "text.primary",
              }}
            >
              {t.technology.title}
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: "text.secondary",
                lineHeight: 1.9,
                mb: 5,
                fontSize: "0.9rem",
              }}
            >
              {t.technology.description}
            </Typography>

            {/* Feature list */}
            <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
              {t.technology.features.map((feature) => (
                <Box
                  key={feature.title}
                  sx={{ display: "flex", gap: 2, alignItems: "flex-start" }}
                >
                  <CheckCircleOutlineIcon
                    sx={{
                      fontSize: 20,
                      color: "secondary.dark",
                      mt: 0.1,
                      flexShrink: 0,
                    }}
                  />
                  <Box>
                    <Typography
                      sx={{
                        fontWeight: 600,
                        fontSize: "0.875rem",
                        mb: 0.3,
                        color: "text.primary",
                      }}
                    >
                      {feature.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{ color: "text.secondary", lineHeight: 1.7 }}
                    >
                      {feature.description}
                    </Typography>
                  </Box>
                </Box>
              ))}
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
