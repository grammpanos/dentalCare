import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#6b5c45",
      light: "#8F7A63",
      dark: "#4e4232",
      contrastText: "#FFFFFF",
    },
    secondary: {
      main: "#C9B49A",
      light: "#E2D1BA",
      dark: "#8F7A63",
      contrastText: "#1A1612",
    },
    background: {
      default: "#F5F0EB",
      paper: "#FFFFFF",
    },
    text: {
      primary: "#3a3028",
      secondary: "#6B5F54",
    },
  },
  typography: {
    fontFamily: "Inter, Helvetica, Arial, sans-serif",
    h1: {
      fontFamily: "'Cormorant Garamond', serif",
      fontWeight: 400,
      letterSpacing: "-0.01em",
    },
    h2: {
      fontFamily: "'Cormorant Garamond', serif",
      fontWeight: 400,
      letterSpacing: "-0.01em",
    },
    h3: {
      fontFamily: "'Cormorant Garamond', serif",
      fontWeight: 500,
      letterSpacing: "0em",
    },
    h4: {
      fontFamily: "'Cormorant Garamond', serif",
      fontWeight: 500,
    },
    h5: {
      fontFamily: "'Cormorant Garamond', serif",
      fontWeight: 500,
    },
    button: { textTransform: "none", fontWeight: 500, letterSpacing: "0.08em" },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 4,
          textTransform: "none",
          boxShadow: "none",
          padding: "0.75rem 1.75rem",
          fontSize: "0.875rem",
          fontWeight: 500,
          letterSpacing: "0.06em",
          "&:hover": { boxShadow: "none" },
        },
        containedPrimary: {
          backgroundColor: "#6b5c45",
          "&:hover": { backgroundColor: "#4e4232" },
        },
        outlinedPrimary: {
          borderColor: "rgba(107,92,69,0.4)",
          color: "#6b5c45",
          "&:hover": { borderColor: "#6b5c45", backgroundColor: "rgba(107,92,69,0.04)" },
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: { boxShadow: "none", backgroundColor: "transparent" },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: 4,
          boxShadow: "none",
        },
      },
    },
    MuiAccordion: {
      styleOverrides: {
        root: { boxShadow: "none" },
      },
    },
  },
});

export default theme;
