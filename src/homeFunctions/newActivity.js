import { TextField } from "@mui/material";
import React, { useState } from "react";
import TextareaAutosize from "@mui/base/TextareaAutosize";
import { Input } from "@mui/material-next";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { Home, TrendingUp, AssignmentInd } from "@mui/icons-material";
import * as styles from "./newActivity.module.css";
import dayjs from "dayjs";
import localizedFormat from "dayjs/plugin/localizedFormat";
import customParseFormat from "dayjs/plugin/customParseFormat";
dayjs.extend(localizedFormat);
dayjs.extend(customParseFormat);

export default function NewActity() {
  const [activity, setActivity] = useState({
    name: "",
    description: "",
    date: null,
    icon: "",
  });
  console.log(activity);
  const changeActivity = (e) => {
    setActivity({
      ...activity,
      [e.target.name]: e.target.value,
    });
  };

  const handleDateChange = (date) => {
    let selectedDate = dayjs(date).format("YYYY-MM-DD");
    setActivity({ ...activity, date: date });
  };
  return (
    <div className={styles.container}>
      <div className={styles.containerFirst}>
        <p className={styles.title}>Name of Activity</p>
        <TextField
          id="name"
          name="name"
          label="name"
          size="small"
          className={styles.inputName}
          onChange={changeActivity}
        />
        <p className={styles.title}>Description</p>
        <textarea
          id="description"
          name="description"
          onChange={changeActivity}
          style={{
            width: "96%",
            height: "200px",
            padding: "10px",
            fontSize: "16px",
            border: "1px solid #ccc",
            borderRadius: "4px",
          }}
        />
      </div>

      <div className={styles.containerSecond}>
        <p className={styles.title}>Designate date</p>
        <div className={styles.containerCalendar}>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DateCalendar value={activity.date} onChange={handleDateChange} />
          </LocalizationProvider>
        </div>
        <p className={styles.title}>Icon</p>
        <FormControl sx={{ m: 1, minWidth: 120 }}>
          <Select
            id="icon"
            name="icon"
            value={activity.icon}
            onChange={changeActivity}
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
