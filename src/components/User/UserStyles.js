import { styled } from "@mui/system";
import { Link as RouterLink } from "react-router-dom";

export const Link = styled(RouterLink)(({ theme }) => ({
  textDecoration: "none",
  color: theme.palette.primary.secondary,
  backgroundColor: theme.palette.primary.main,
  padding: "12px",
  borderRadius: "4px",
  "&:hover": {
    textDecoration: "none",
    backgroundColor: "#f5f5f5",
    color: theme.palette.primary.main,
    border: `solid 1px ${theme.palette.primary.main}`,
  },
}));
