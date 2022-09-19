import React from "react";
import { styled } from "@mui/system";

const SectionContainer = styled("div")(
  ({ theme: { breakpoints, typography } }) => ({
    padding: `0 ${typography.pxToRem(20)}`,
    [breakpoints.up("sm")]: {
      padding: `0 ${typography.pxToRem(40)}`,
    },
  })
);

function Section({ children }) {
  return <SectionContainer>{children}</SectionContainer>;
}

export default Section;
