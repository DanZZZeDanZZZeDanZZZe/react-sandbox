import React, { useState } from 'react'
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import CalendarHolder from './CalendarHolder';

import { TIME_RANGES } from './constants';

import * as styled from './styles'

const Calendar = () => {
  const timeRanges = TIME_RANGES
  const [timeRangeIndex, setTimeRangeIndex] = useState(2)

  return (
    <styled.Calendar>
      <styled.ControlBoard>
        <button><MdKeyboardArrowLeft/></button>
        <button><MdKeyboardArrowRight/></button>
        <select 
          value={timeRangeIndex} 
          onChange={({target}) => setTimeRangeIndex(Number(target.value))}
        >
          {timeRanges.map((range, key) => <option key={key} value={key}>{range}</option>)}
        </select>
      </styled.ControlBoard>
      <CalendarHolder range={timeRanges[timeRangeIndex]}>
        
      </CalendarHolder>
    </styled.Calendar>
  )
}

export default Calendar
