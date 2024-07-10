/**
 * author Thilina Pahalagedara
 * created on 10-07-2024-12h-56m
 * github: https://github.com/Pahalagedara
 * copyright 2024
 */

import { createTheme } from "@mui/material/styles";
import { colors } from "./colors"

const theme = createTheme({
  palette: {
    primary: {
      main: "#fff", // Neon blue
    },
    secondary: {
      main: "#9400D3", // Neon purple
    },
    success: {
      main: "#39FF14", // Neon green
    },
    background: {
      default: "#1E1E1E", // Dark gray background
      paper: "#000000", // Black background for paper elements
    },
    text: {
      primary: "#FFFFFF", // White text for contrast
      secondary: "#00FFFF", // Neon blue for secondary text
    },
  },
  typography: {
    fontFamily: ["Montserrat", "Roboto", "sans-serif"].join(","),
    h1: {
      fontFamily: "Montserrat",
      color: "#00FFFF",
    },
    h2: {
      fontFamily: "Roboto",
      color: "#9400D3",
    },
    body1: {
      color: "#FFFFFF",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8, // Custom border radius
          textTransform: "none", // Disable uppercase transformation
        },
        containedPrimary: {
          backgroundColor: "#00FFFF",
          color: "#fff",
          "&:hover": {
            backgroundColor: "#00B3B3",
          },
        },
        containedSecondary: {
          backgroundColor: "#9400D3",
          color: "#FFFFFF",
          "&:hover": {
            backgroundColor: "#7200A1",
          },
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        colorPrimary: {
          backgroundColor: "#000000", // Black AppBar
        },
      },
    },
    MuiSvgIcon: {
      styleOverrides: {
        root: {
          colorPrimary: {
            color: "#00FFFF", // Neon blue color for the MenuIcon in the AppBar
          },
        },
      },
    },
  },
});

export { theme };
