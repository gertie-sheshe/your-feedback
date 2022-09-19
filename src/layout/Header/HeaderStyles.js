import { styled } from "@mui/system";

export const HeaderContainer = styled("header")(
  ({ theme: { typography } }) => ({
    padding: `${typography.pxToRem(20)} 0`,
  })
);
