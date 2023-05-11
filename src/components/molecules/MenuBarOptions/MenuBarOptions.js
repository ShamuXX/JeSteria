import MenuButtonIcon from "../../atoms/MenuButtonIcon/MenuButtonIcon";
import * as styles from "./MenuBarOptions.module.css";

export default function MenuBarOption() {
  return (
    <div className={styles.container}>
      <MenuButtonIcon text="Home" icon="Home" navigate="/Login" />
      <MenuButtonIcon
        text="Daily managment"
        icon="TrendingUp"
        navigate="/Login"
      />
      <MenuButtonIcon text="Reminders" icon="AssignmentInd" navigate="/Login" />
      <MenuButtonIcon
        text="Graphics and Statistics"
        icon="Leaderboard"
        navigate="/Login"
      />
      <MenuButtonIcon
        text="Designate schedule"
        icon="AutoAwesomeMotion"
        navigate="/Login"
      />
      <MenuButtonIcon
        text="Personalization"
        icon="ManageAccounts"
        navigate="/Login"
      />
      <MenuButtonIcon text="Achievements" icon="NorthEast" navigate="/Login" />
      <div className={styles.containerLogOutButton}>
        <MenuButtonIcon text="Log Out" icon="Logout" navigate="/Login" />
      </div>
    </div>
  );
}
