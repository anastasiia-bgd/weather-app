import * as React from 'react';
import dayjs from 'dayjs';
import { TextField } from '@mui/material';

export default function DatePickerValue({ startDate, setStartDate, endDate, setEndDate}) {
  
    const handleStartDateChange = (event) => {
      setStartDate(event.target.value);
    };
  
    // const filteredData = data.filter((item) => item.date === selectedDate);
  
    const handleEndDateChange = (event) => {
      setEndDate(event.target.value);
    };
  
  return (
    <div>
        <TextField
          value={startDate}
          onChange={handleStartDateChange}
          type='date'
        />
         <TextField
         type='date'
          value={endDate}
          onChange={handleEndDateChange}
        />
        </div>
  );
}