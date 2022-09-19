import { styled } from "@mui/system";

export const HeaderContainer = styled("header")(
  ({ theme: { typography, breakpoints } }) => ({
    display: "flex",
    padding: typography.pxToRem(20),
    width: "100vw",
    justifyContent: "space-between",
    [breakpoints.up("xs")]: {
      padding: `${typography.pxToRem(20)} 0`,
    },
  })
);
