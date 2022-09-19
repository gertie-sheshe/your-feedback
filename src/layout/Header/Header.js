import React from "react";
import DesktopHeader from "./DesktopHeader";
import MobileHeader from "./MobileHeader";

function Header() {
  return (
    <div>
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
    </div>
  );
}

export default Header;
