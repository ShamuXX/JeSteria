import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import CheckCircle from '@mui/icons-material/CheckCircleRounded';
import Circle from '@mui/icons-material/RadioButtonUncheckedRounded';

export default function Box({text}){
  return(
    <FormControlLabel control={
        <Checkbox icon={<Circle/>} checkedIcon={<CheckCircle />} sx={{
				color: "#929292",
				'&.Mui-checked': {
					color: "#A5CCA4",
				},
				'& .MuiSvgIcon-root': { fontSize: 37 }
				}}/>
				} label={text}/>
    )
}