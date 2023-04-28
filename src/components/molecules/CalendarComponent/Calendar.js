import React from "react";
import CalendarInfo from "../../atoms/CalendarInfo/CalendarInfo";

export default function Calendar(){

	return(
		<div style={{width: "20%"}}>
			<CalendarInfo text={"Días poco productivos"} color={"#EBCA75"}/>
			<CalendarInfo text={"Días inproductivos"} color={"#E9486E"}/>
			<CalendarInfo text={"Días productivos"} color={"#BEEB75"}/>  
		</div>
	)
}