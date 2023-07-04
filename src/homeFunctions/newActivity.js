import { TextField } from "@mui/material";
import React, { useState } from "react";
import TextareaAutosize from "@mui/base/TextareaAutosize";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { Home, TrendingUp, AssignmentInd } from "@mui/icons-material";
import * as styles from "../styles/homeFunctions/newActivity.module.css";

export default function NewActity() {
  const [icon, setIcon] = useState("");
  const handleChange = (event, SelectChangeEvent) => {
    setIcon(event.target.value);
  };
  return (
    <div className={styles.container}>
      <div>
        <p>Name of Activity</p>
        <TextField id="Name" name="Name" label="Name" />
        <p>Description</p>
        <TextareaAutosize
          aria-label="minimum height"
          minRows={5}
          placeholder="Minimum 3 rows"
        />
      </div>
      <div>
        <p>Designate date</p>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DateCalendar />
        </LocalizationProvider>
        <p>Icon</p>
        <FormControl sx={{ m: 1, minWidth: 120 }}>
          <Select
            value={icon}
            onChange={handleChange}
            displayEmpty
            inputProps={{ "aria-label": "Without label" }}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={"Home"}>
              <Home />
            </MenuItem>
            <MenuItem value={"TrendingUp"}>
              <TrendingUp />
            </MenuItem>
            <MenuItem value={"AssignmentInd"}>
              <AssignmentInd />
            </MenuItem>
          </Select>
        </FormControl>
      </div>
    </div>
  );
}
