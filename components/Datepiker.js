import React, { useState } from 'react';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import { DateRangePicker } from 'react-dates';

const Datepicker = ({}) => {

    const [startDate, setStartDate] = useState(null)
    const [endDate, setEndDate]= useState(null)
    const [focusedInput, setFocusedInput] = useState(null)

    return (
        <div className="App">
            <DateRangePicker
                startDateId="startDate"
                endDateId="endDate"
                startDate={startDate}
                endDate={endDate}
                onDatesChange={({ startDate, endDate }) => { setEndDate(endDate); setStartDate(startDate) }}
                focusedInput={focusedInput}
                onFocusChange={(focusedInput) => { setFocusedInput(focusedInput) }}
            />
        </div>
    );
}


export default Datepicker