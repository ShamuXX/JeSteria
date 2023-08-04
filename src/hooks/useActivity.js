import { useState, useMemo } from 'react'
import dayjs from 'dayjs'

export default function useActivity() {
  const [date, setDate] = useState(new Date())
  const [activity, setActivity] = useState({
    name: '',
    description: '',
    icon: '',
  })

  const handleDateChange = (date) => {
    setDate(new Date(date))
  }

  const changeActivity = (e) => {
    setActivity({
      ...activity,
      [e.target.name]: e.target.value,
    })
  }

  const parsedDate = useMemo(() => dayjs(date), [date])

  const wholeActivity = useMemo(() => ({ ...activity, date }), [activity, date])

  return {
    activity: wholeActivity,
    date: parsedDate,
    changeActivity,
    handleDateChange,
  }
}
