import React from "react";
import {
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
} from "@mui/material";

function MultiChoice({ options }) {
  console.log("KWESHEN", options);

  if (!options) {
    return null;
  }

  return (
    <div>
      <p>Just to check</p>
      <FormControl component="fieldset">
        <RadioGroup aria-label="multiple choice" name="multichoice">
          {options.map((option) => (
            <FormControlLabel
              sx={{
                padding: "60px",
                "& :hover": {
                  color: "#FFC107",
                  backgroundColor: "#FFC107",
                  // padding: "60px",
                },
                "& :checked": {
                  color: "#FFC107",
                  backgroundColor: "#FFC107",
                  // padding: "60px",
                },
              }}
              value={option.value}
              control={
                <Radio
                  sx={{
                    "& :checked": {
                      color: "#FFC107",
                      backgroundColor: "#FFC107",
                      // padding: "60px",
                    },
                  }}
                />
              }
              label={option.label}
            />
          ))}
        </RadioGroup>
      </FormControl>
    </div>
  );
}

export default MultiChoice;
