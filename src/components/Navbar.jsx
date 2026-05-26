import { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import MenuIcon from "@mui/icons-material/Menu";
import { useLanguage } from "../context/LanguageContext";
import { useTranslation } from "../i18n/useTranslation";

export default function Navbar() {
  const { locale, switchLanguage } = useLanguage();
  const t = useTranslation();
  const [anchorEl, setAnchorEl] = useState(null);

  const navItems = [
    { id: "services", label: t.nav.services },
    { id: "faq", label: t.nav.advice },
    { id: "about", label: t.nav.about },
    { id: "team", label: t.nav.team },
    { id: "testimonials", label: t.nav.reviews },
    { id: "contact", label: t.nav.contact },
  ];

  return (
    <AppBar
      position="sticky"
      color="transparent"
      sx={{
        backdropFilter: "blur(20px)",
        backgroundColor: "rgba(245, 240, 235, 0.92)",
        borderBottom: "1px solid rgba(107,92,69,0.12)",
        zIndex: 10,
      }}
    >
      <Toolbar
        sx={{ justifyContent: "space-between", px: { xs: 2, md: 6 }, py: 1 }}
      >
        {/* Logo */}
        <Box
          component="a"
          href="#home"
          sx={{ textDecoration: "none", display: "flex", alignItems: "center", gap: 1 }}
        >
          <Box
            component="svg"
            viewBox="0 0 22 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            sx={{ width: 18, height: 20, flexShrink: 0 }}
          >
            <path
              d="M11 1.5C8.8 1.5 7 2.7 6 4C5 2.7 3.3 2 2 2.5C0.7 3.2 1 5.5 1.6 7.2C2.2 8.9 2.2 10.2 2.2 11.5C2.2 15.2 3.4 18.2 5.2 20.5C6.4 22.1 7.6 22.2 8.2 20.5C8.8 18.8 9.3 16.5 11 16.5C12.7 16.5 13.2 18.8 13.8 20.5C14.4 22.2 15.6 22.1 16.8 20.5C18.6 18.2 19.8 15.2 19.8 11.5C19.8 10.2 19.8 8.9 20.4 7.2C21 5.5 21.3 3.2 20 2.5C18.7 2 17 2.7 16 4C15 2.7 13.2 1.5 11 1.5Z"
              stroke="#8F7A63"
              strokeWidth="1.4"
              strokeLinejoin="round"
            />
          </Box>
          <Typography
            variant="body1"
            sx={{
              fontWeight: 600,
              letterSpacing: "0.22em",
              fontSize: "0.85rem",
              color: "#6b5c45",
            }}
          >
            ALEXIA STAMATI
          </Typography>
        </Box>

        {/* Desktop nav */}
        <Box
          sx={{
            display: { xs: "none", md: "flex" },
            gap: 0.5,
            alignItems: "center",
          }}
        >
          {navItems.map((item) => (
            <Button
              key={item.id}
              href={`#${item.id}`}
              color="inherit"
              sx={{
                color: "text.secondary",
                fontWeight: 400,
                fontSize: "0.82rem",
                letterSpacing: "0.04em",
                px: 1.5,
                "&:hover": { color: "#6b5c45" },
              }}
            >
              {item.label}
            </Button>
          ))}

          {/* Language toggle — top right */}
          <Box
            sx={{
              ml: 2,
              display: "flex",
              alignItems: "center",
              border: "1px solid rgba(107,92,69,0.3)",
              borderRadius: "999px",
              overflow: "hidden",
              p: "3px",
              gap: "3px",
              bgcolor: "rgba(107,92,69,0.06)",
            }}
          >
            {["gr", "en"].map((lang) => (
              <Box
                key={lang}
                component="button"
                onClick={() => switchLanguage(lang)}
                sx={{
                  px: 1.6,
                  py: 0.5,
                  border: "none",
                  cursor: "pointer",
                  fontSize: "0.7rem",
                  fontWeight: locale === lang ? 700 : 400,
                  letterSpacing: "0.1em",
                  borderRadius: "999px",
                  bgcolor: locale === lang ? "#6b5c45" : "transparent",
                  color: locale === lang ? "#F5F0EB" : "#6b5c45",
                  textTransform: "uppercase",
                  transition: "all 0.18s ease",
                  "&:hover": {
                    bgcolor: locale === lang ? "#6b5c45" : "rgba(107,92,69,0.1)",
                  },
                  lineHeight: 1.6,
                }}
              >
                {lang}
              </Box>
            ))}
          </Box>
        </Box>

        {/* Mobile nav */}
        <Box sx={{ display: { xs: "flex", md: "none" }, alignItems: "center", gap: 1 }}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              border: "1px solid rgba(107,92,69,0.3)",
              borderRadius: "999px",
              overflow: "hidden",
              p: "3px",
              gap: "3px",
              bgcolor: "rgba(107,92,69,0.06)",
            }}
          >
            {["gr", "en"].map((lang) => (
              <Box
                key={lang}
                component="button"
                onClick={() => switchLanguage(lang)}
                sx={{
                  px: 1.4,
                  py: 0.45,
                  border: "none",
                  cursor: "pointer",
                  fontSize: "0.68rem",
                  fontWeight: locale === lang ? 700 : 400,
                  letterSpacing: "0.1em",
                  borderRadius: "999px",
                  bgcolor: locale === lang ? "#6b5c45" : "transparent",
                  color: locale === lang ? "#F5F0EB" : "#6b5c45",
                  textTransform: "uppercase",
                  transition: "all 0.18s ease",
                  lineHeight: 1.6,
                }}
              >
                {lang}
              </Box>
            ))}
          </Box>

          <IconButton onClick={(event) => setAnchorEl(event.currentTarget)} size="small">
            <MenuIcon fontSize="small" sx={{ color: "#6b5c45" }} />
          </IconButton>
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={() => setAnchorEl(null)}
          >
            {navItems.map((item) => (
              <MenuItem
                key={item.id}
                onClick={() => setAnchorEl(null)}
                component="a"
                href={`#${item.id}`}
                sx={{ fontSize: "0.875rem" }}
              >
                {item.label}
              </MenuItem>
            ))}
          </Menu>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
