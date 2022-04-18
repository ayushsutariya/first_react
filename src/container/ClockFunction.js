import React, { useEffect, useState } from 'react'

export default function ClockFunction() {

  const [time, settime] = useState(new Date())
  
  const tick = () => {
    settime(new Date())
  }

  useEffect(() => {
    const timerid = setInterval(() => tick(),1000)
    return () => {
      clearInterval(timerid)
    };
  }, [time]);
  return (
    <table>
        <tr>
        <td><h2>Time(Function) : </h2></td>
          <td><h2>{time.toLocaleTimeString()}</h2></td>
        </tr>
      </table>
  )
}

