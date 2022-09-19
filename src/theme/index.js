import { createTheme } from "@mui/material";
// import { deepmerge } from "@mui/utils";

const FONT_FAMILY = "'Montserrat','sans-serif'";

const breakpoints = {
  values: {
    xs: 0,
    sm: 768,
    md: 1152,
    lg: 1440,
    xl: 1920,
  },
};

const palette = {
  primary: {
    main: "#000",
    secondary: "#fff",
  },
};

// Typography typescale is minor third

const theme = createTheme({
  breakpoints,
  palette,
  typography: {
    fontFamily: FONT_FAMILY,
    h1: {
      fontSize: "2.4rem",
    },
    h2: {
      fontSize: "2.074rem",
    },
    h3: {
      fontSize: "1.728rem",
    },
    h4: {
      fontSize: "1.44rem",
    },
    h5: {
      fontSize: "1.2rem",
    },
    h6: {
      fontSize: "1rem",
    },
    subtitle1: {
      fontSize: "1rem",
    },
    subtitle2: {
      fontSize: "0.8rem",
    },
    body1: {
      fontSize: "1rem",
    },
    body2: {
      fontSize: "0.8rem",
    },
    button: {
      fontSize: "1rem",
    },
    caption: {
      fontSize: "0.8rem",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          boxShadow: "none",
          textTransform: "none",
        },
        containedPrimary: {
          color: palette.primary.secondary,
          backgroundColor: palette.primary.main,
          border: "solid 1px transparent",
          "&:hover": {
            backgroundColor: palette.primary.secondary,
            color: palette.primary.main,
            boxShadow: "none",
            border: `solid 1px ${palette.primary.main}`,
          },
        },
        secondary: {
          backgroundColor: palette.primary.secondary,
          color: palette.primary.main,
          boxShadow: "none",
          border: `solid 1px ${palette.primary.main}`,
        },
      },
    },
  },
});

export default theme;
