import React from "react";
import Section from "../Section/Section";
import DesktopHeader from "./DesktopHeader";
import MobileHeader from "./MobileHeader";

function Header() {
  return (
    <Section>
      <DesktopHeader
        sx={{
          display: { xs: "none", sm: "none", md: "flex" },
        }}
      />
      <MobileHeader
        sx={{
          display: { xs: "flex", md: "none" },
        }}
      />
    </Section>
  );
}

export default Header;
