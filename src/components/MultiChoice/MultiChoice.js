import React from "react";
import {
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
  useRadioGroup,
} from "@mui/material";
import { styled } from "@mui/material/styles";

const StyledFormControlLabel = styled((props) => (
  <FormControlLabel {...props} />
))(({ theme, checked }) => ({
  "& .MuiFormControlLabel-label": {
    padding: "60px",
    marginBottom: "10px",
    width: "100%",
    backgroundColor: checked ? "#B8B8B8" : "#E8E8E8",
    "&:hover": {
      backgroundColor: "#C8C8C8",
    },
  },
}));

function MultiChoice({ options }) {
  if (!options) {
    return null;
  }

  function MyFormControlLabel(props) {
    const radioGroup = useRadioGroup();

    let checked = false;

    if (radioGroup) {
      checked = props.value === Number(radioGroup.value);
    }

    return <StyledFormControlLabel checked={checked} {...props} />;
  }

  return (
    <div>
      <FormControl sx={{ width: "100%" }} component="fieldset">
        <RadioGroup aria-label="multiple choice" name="multichoice">
          {options.map((option) => (
            <MyFormControlLabel
              key={option.value}
              value={option.value}
              control={<Radio sx={{ display: "none" }} />}
              label={option.label}
            />
          ))}
        </RadioGroup>
      </FormControl>
    </div>
  );
}

export default MultiChoice;
