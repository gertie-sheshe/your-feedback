import React from "react";
import Section from "../Section/Section";
import DesktopHeader from "./DesktopHeader";
import MobileHeader from "./MobileHeader";
import GertieAvatar from "../../assets/images/avatar.png";

function Header({ setValue, tabValue }) {
  return (
    <Section>
      <DesktopHeader
        sx={{
          display: { xs: "none", sm: "none", md: "flex" },
        }}
        avatar={GertieAvatar}
        setTabValue={setValue}
        tabValue={tabValue}
      />
      <MobileHeader
        sx={{
          display: { xs: "flex", md: "none" },
        }}
        avatar={GertieAvatar}
      />
    </Section>
  );
}

export default Header;
