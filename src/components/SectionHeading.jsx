import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

export default function SectionHeading({
  subtitle,
  title,
  description,
  align = "left",
}) {
  return (
    <Box sx={{ textAlign: align, mb: 5, maxWidth: 760, mx: "auto" }}>
      <Typography
        variant="overline"
        sx={{
          color: "secondary.dark",
          letterSpacing: "0.18em",
          mb: 1.5,
          display: "block",
        }}
      >
        {subtitle}
      </Typography>
      <Typography variant="h4" component="h2" sx={{ fontWeight: 700, mb: 2.5 }}>
        {title}
      </Typography>
      <Typography
        variant="body1"
        sx={{ color: "text.secondary", lineHeight: 1.8 }}
      >
        {description}
      </Typography>
    </Box>
  );
}
