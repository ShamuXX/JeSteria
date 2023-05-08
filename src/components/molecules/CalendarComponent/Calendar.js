import React from "react";
import CalendarInfo from "../../atoms/CalendarInfo/CalendarInfo";
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';

export default function Calendar(){

	return(
		<div style={{width: "40%"}}>
			<LocalizationProvider dateAdapter={AdapterDayjs}>
				<DateCalendar />
			</LocalizationProvider>
			<CalendarInfo text={"Días poco productivos"} color={"#EBCA75"}/>
			<CalendarInfo text={"Días inproductivos"} color={"#E9486E"}/>
			<CalendarInfo text={"Días productivos"} color={"#BEEB75"}/>  
		</div>
	)
}