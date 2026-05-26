import Box from "@mui/material/Box";

const photos = [
  { src: "/images/1.jpeg", alt: "Dental treatment room" },
  { src: "/images/7.jpeg", alt: "Modern clinic room" },
  { src: "/images/8.jpeg", alt: "Clinic interior" },
];

export default function ClinicGallery() {
  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: { xs: "1fr", sm: "repeat(3, 1fr)" },
        height: { xs: "auto", md: 340 },
      }}
    >
      {photos.map((photo, index) => (
        <Box
          key={photo.src}
          sx={{
            position: "relative",
            overflow: "hidden",
            height: { xs: 220, md: "100%" },
          }}
        >
          <Box
            component="img"
            src={photo.src}
            alt={photo.alt}
            sx={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              objectPosition: "center",
              display: "block",
              transition: "transform 0.5s ease",
              "&:hover": { transform: "scale(1.04)" },
            }}
          />
          {/* subtle dark overlay */}
          <Box
            sx={{
              position: "absolute",
              inset: 0,
              bgcolor: "rgba(26,18,10,0.08)",
              transition: "bgcolor 0.3s",
            }}
          />
        </Box>
      ))}
    </Box>
  );
}
