import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import StarIcon from "@mui/icons-material/Star";
import Avatar from "@mui/material/Avatar";
import { useTranslation } from "../i18n/useTranslation";

export default function TestimonialsSection() {
  const t = useTranslation();
  const featured = t.testimonials.featured;

  return (
    <Box
      component="section"
      id="testimonials"
      sx={{
        py: { xs: 12, md: 16 },
        bgcolor: "#EDE7DF",
        textAlign: "center",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <Container maxWidth="md">
        {/* Decorative quote number */}
        <Typography
          sx={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: { xs: "6rem", md: "10rem" },
            fontWeight: 300,
            fontStyle: "italic",
            lineHeight: 0.8,
            color: "rgba(26,22,18,0.1)",
            mb: 2,
            userSelect: "none",
          }}
        >
          "
        </Typography>

        {/* Stars */}
        <Box sx={{ display: "flex", justifyContent: "center", gap: 0.5, mb: 4 }}>
          {[...Array(5)].map((_, i) => (
            <StarIcon
              key={i}
              sx={{ fontSize: 18, color: "#C9A96E" }}
            />
          ))}
        </Box>

        {/* Quote */}
        <Typography
          sx={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: { xs: "1.5rem", md: "2rem", lg: "2.3rem" },
            fontWeight: 400,
            fontStyle: "italic",
            lineHeight: 1.55,
            color: "text.primary",
            mb: 5,
            maxWidth: 780,
            mx: "auto",
          }}
        >
          "{featured.quote}"
        </Typography>

        {/* Author */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 2,
          }}
        >
          <Avatar
            sx={{
              width: 42,
              height: 42,
              bgcolor: "secondary.main",
              fontSize: "0.9rem",
              fontWeight: 600,
            }}
          >
            {featured.author.charAt(0)}
          </Avatar>
          <Box sx={{ textAlign: "left" }}>
            <Typography
              sx={{
                fontWeight: 600,
                fontSize: "0.9rem",
                color: "text.primary",
              }}
            >
              {featured.author}
            </Typography>
            <Typography
              variant="caption"
              sx={{
                color: "text.secondary",
                letterSpacing: "0.08em",
                fontSize: "0.72rem",
              }}
            >
              {featured.role}
            </Typography>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
