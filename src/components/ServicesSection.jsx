import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import HealthAndSafetyOutlinedIcon from "@mui/icons-material/HealthAndSafetyOutlined";
import AutoFixHighOutlinedIcon from "@mui/icons-material/AutoFixHighOutlined";
import FlareOutlinedIcon from "@mui/icons-material/FlareOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import GridViewOutlinedIcon from "@mui/icons-material/GridViewOutlined";
import LocalHospitalOutlinedIcon from "@mui/icons-material/LocalHospitalOutlined";
import { useTranslation } from "../i18n/useTranslation";

const icons = [
  HealthAndSafetyOutlinedIcon,
  AutoFixHighOutlinedIcon,
  FlareOutlinedIcon,
  PeopleOutlinedIcon,
  GridViewOutlinedIcon,
  LocalHospitalOutlinedIcon,
];

export default function ServicesSection() {
  const t = useTranslation();

  return (
    <Box
      component="section"
      id="services"
      sx={{ py: { xs: 10, md: 14 }, bgcolor: "#FFFFFF" }}
    >
      <Container>
        {/* Section heading */}
        <Box sx={{ textAlign: "center", mb: 8 }}>
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
            {t.services.subtitle}
          </Typography>
          <Typography
            variant="h2"
            component="h2"
            sx={{
              fontSize: { xs: "2rem", md: "2.6rem" },
              fontWeight: 400,
              color: "text.primary",
            }}
          >
            {t.services.title}
          </Typography>
        </Box>

        <Grid container spacing={0}>
          {t.services.items.map((service, index) => {
            const IconComponent = icons[index % icons.length];
            return (
              <Grid key={service.title} item xs={12} sm={6} md={4}>
                <Box
                  sx={{
                    p: { xs: 4, md: 5 },
                    borderTop: "1px solid rgba(26,22,18,0.08)",
                    borderLeft: {
                      xs: "none",
                      sm: index % 2 === 1 ? "1px solid rgba(26,22,18,0.08)" : "none",
                      md:
                        index % 3 === 1 || index % 3 === 2
                          ? "1px solid rgba(26,22,18,0.08)"
                          : "none",
                    },
                    height: "100%",
                    transition: "background 0.2s ease",
                    "&:hover": {
                      bgcolor: "#F9F6F2",
                    },
                  }}
                >
                  <IconComponent
                    sx={{
                      fontSize: 28,
                      color: "secondary.dark",
                      mb: 2.5,
                      opacity: 0.8,
                    }}
                  />
                  <Typography
                    variant="h6"
                    sx={{
                      fontFamily: "'Cormorant Garamond', serif",
                      fontSize: "1.2rem",
                      fontWeight: 500,
                      mb: 1.5,
                      color: "text.primary",
                    }}
                  >
                    {service.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      color: "text.secondary",
                      lineHeight: 1.85,
                      mb: 2.5,
                      fontSize: "0.875rem",
                    }}
                  >
                    {service.description}
                  </Typography>
                  <Link
                    href="#contact"
                    sx={{
                      fontSize: "0.78rem",
                      letterSpacing: "0.06em",
                      color: "text.primary",
                      textDecoration: "none",
                      fontWeight: 500,
                      display: "inline-flex",
                      alignItems: "center",
                      gap: 0.5,
                      opacity: 0.7,
                      "&:hover": { opacity: 1 },
                    }}
                  >
                    Learn More &nbsp;›
                  </Link>
                </Box>
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </Box>
  );
}
