import { TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import { Select, MenuItem, FormControl } from "@mui/material";
import { Home, TrendingUp, AssignmentInd } from "@mui/icons-material";
import * as styles from "./newActivity.module.css";
import dayjs from "dayjs";
import localizedFormat from "dayjs/plugin/localizedFormat";
import customParseFormat from "dayjs/plugin/customParseFormat";
import useActivity from "../hooks/useActivity";
import getDataUser from "../firebase/getDataUser";
import TimeSelect from "../components/atoms/TimeSelect/TimeSelect";
dayjs.extend(localizedFormat);
dayjs.extend(customParseFormat);

export default function NewActity(props) {
  const { date, activity, handleDateChange, changeActivity } = useActivity();
  const [timeStart, setTimeStart] = useState("");
  const [timeEnd, setTimeEnd] = useState("");
  const activityData = getDataUser(activity);

  const handleClick = () => {
    activity.timeStart = timeStart;
    activity.timeEnd = timeEnd;
    activityData.addActivity();
    props.setPage("1");
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
          inputProps={{ maxLength: 25 }}
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
        <div className={styles.containerTimeSelect}>
          <TimeSelect text={"Hora de inicio"} setTime={setTimeStart} />
          <TimeSelect text={"Hora de termino"} setTime={setTimeEnd} />
        </div>
      </div>

      <div className={styles.containerSecond}>
        <p className={styles.title}>Designate date</p>
        <div className={styles.containerCalendar}>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DateCalendar value={date} onChange={handleDateChange} />
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
        <button onClick={handleClick}>sendData</button>
      </div>
    </div>
  );
}
