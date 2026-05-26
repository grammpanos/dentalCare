import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import EmojiEventsOutlinedIcon from "@mui/icons-material/EmojiEventsOutlined";
import ReceiptLongOutlinedIcon from "@mui/icons-material/ReceiptLongOutlined";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";
import HealingOutlinedIcon from "@mui/icons-material/HealingOutlined";
import { useTranslation } from "../i18n/useTranslation";

const icons = [
  EmojiEventsOutlinedIcon,
  ReceiptLongOutlinedIcon,
  AccessTimeOutlinedIcon,
  HealingOutlinedIcon,
];

export default function DifferentiatorsSection() {
  const t = useTranslation();

  return (
    <Box
      component="section"
      sx={{ py: { xs: 10, md: 12 }, bgcolor: "#F5F0EB" }}
    >
      <Container>
        <Box sx={{ textAlign: "center", mb: 8 }}>
          <Typography
            variant="h2"
            component="h2"
            sx={{
              fontSize: { xs: "1.9rem", md: "2.5rem" },
              fontWeight: 400,
              color: "text.primary",
            }}
          >
            {t.differentiators.title}
          </Typography>
        </Box>
        <Grid container spacing={0}>
          {t.differentiators.items.map((item, index) => {
            const IconComponent = icons[index % icons.length];
            return (
              <Grid key={item.title} item xs={12} sm={6} md={3}>
                <Box
                  sx={{
                    textAlign: "center",
                    px: { xs: 3, md: 4 },
                    py: { xs: 4, md: 3 },
                    borderLeft: {
                      xs: "none",
                      md: index > 0 ? "1px solid rgba(26,22,18,0.1)" : "none",
                    },
                  }}
                >
                  <IconComponent
                    sx={{
                      fontSize: 32,
                      color: "secondary.dark",
                      mb: 2,
                      opacity: 0.75,
                    }}
                  />
                  <Typography
                    sx={{
                      fontFamily: "'Cormorant Garamond', serif",
                      fontSize: "1.1rem",
                      fontWeight: 600,
                      mb: 1,
                      color: "text.primary",
                    }}
                  >
                    {item.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      color: "text.secondary",
                      lineHeight: 1.75,
                      fontSize: "0.83rem",
                    }}
                  >
                    {item.description}
                  </Typography>
                </Box>
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </Box>
  );
}
