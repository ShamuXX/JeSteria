import MenuButtonIcon from "../../atoms/MenuButtonIcon/MenuButtonIcon";
import * as styles from "./MenuBarOptions.module.css";

export default function MenuBarOption() {
  return (
    <div className={styles.container}>
      <MenuButtonIcon text="Home" icon="Home" />
      <MenuButtonIcon text="Daily managment" icon="TrendingUp" />
      <MenuButtonIcon text="Reminders" icon="AssignmentInd" />
      <MenuButtonIcon text="Graphics and Statistics" icon="Leaderboard" />
      <MenuButtonIcon text="Designate schedule" icon="AutoAwesomeMotion" />
      <MenuButtonIcon text="Personalization" icon="ManageAccounts" />
      <MenuButtonIcon text="Achievements" icon="NorthEast" />
      <div className={styles.containerLogOutButton}>
        <MenuButtonIcon text="Log Out" icon="Logout" />
      </div>
    </div>
  );
}
