import * as styles from "./dailyManagment.module.css";
import React, { useEffect, useState } from "react";
import getDataUser from "../firebase/getDataUser";
import CardActivities from "../components/molecules/CardActivities/CardActivities";

export default function DailyManagment(props) {
  const activityData = getDataUser();
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await activityData.getDataActivity();
        setActivities(data);
      } catch (error) {
        console.error("Error al obtener datos de actividades: ", error);
      }
    };
    fetchData();
  }, [activityData]);

  return (
    <div className={styles.container}>
      <ul className={styles.activityList}>
        {activities.map((activity) => (
          <CardActivities
            key={activity.id}
            name={activity.name}
            description={activity.description}
            hour={
              activity.timeStart.Hour +
              " : " +
              activity.timeStart.Minutes +
              " " +
              activity.timeStart.IndicateTime +
              " - " +
              activity.timeEnd.Hour +
              " : " +
              activity.timeEnd.Minutes +
              " " +
              activity.timeEnd.IndicateTime
            }
          />
        ))}
      </ul>
    </div>
  );
}
