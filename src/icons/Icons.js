import React from "react";
import {
  Home,
  TrendingUp,
  AssignmentInd,
  Leaderboard,
  AutoAwesomeMotion,
  ManageAccounts,
  NorthEast,
  Logout,
} from "@mui/icons-material";
import * as styles from "@/src/components/molecules/CardActivities/CardActivities.module.css";

const iconMapping = {
  Home: Home,
  TrendingUp: TrendingUp,
  AssignmentInd: AssignmentInd,
  Leaderboard: Leaderboard,
  AutoAwesomeMotion: AutoAwesomeMotion,
  ManageAccounts: ManageAccounts,
  NorthEast: NorthEast,
  Logout: Logout,
};

const IconType = (props) => {
  const IconComponent = iconMapping[props.type];

  if (IconComponent) {
    return (
      <div className={props.sxCard ? styles.icon : null}>
        <IconComponent />
      </div>
    );
  } else {
    console.log("Icono no encontrado:", props.type);
    return null;
  }
};

export default IconType;
