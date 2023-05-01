import React from "react";
import CircleIcon from '@mui/icons-material/Circle';

export default function CalendarInfo({text, color}){
	return(
		<div style={{display: "flex", marginBlock: "1rem"}}>
			<CircleIcon sx={{color: {color}, fontSize: 30, marginRight: "1rem"}}/>
			<p>{text}</p>
		</div>
	)
}