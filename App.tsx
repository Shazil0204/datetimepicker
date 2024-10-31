import React, { useState } from "react";
import { SafeAreaView, Text } from "react-native";
import DatePicker from "./DatePicker";
import TimePicker from "./TimePicker";

interface DateTime {
  date: Date | null; // Holds the selected date
  startTime: Date | null; // Holds the start time
  endTime: Date | null; // Holds the end time
}

const App: React.FC = () => {
  const [selectedDateTime, setSelectedDateTime] = useState<DateTime>({
    date: null,
    startTime: null,
    endTime: null,
  }); // Combined state

  const handleDateChange = (date: Date) => {
    setSelectedDateTime((prevState) => ({ ...prevState, date })); // Update date
  };

  const handleTimeChange = (time: Date, isStartTime: boolean) => {
    setSelectedDateTime((prevState) => ({
      ...prevState,
      [isStartTime ? "startTime" : "endTime"]: time, // Update start or end time
    }));
  };

  const calculateTimeDifference = () => {
    if (selectedDateTime.startTime && selectedDateTime.endTime) {
      const start = selectedDateTime.startTime.getTime();
      const end = selectedDateTime.endTime.getTime();
      const diffInMs = end - start; // Difference in milliseconds

      if (diffInMs < 0) return "End time must be after start time"; // Handle invalid time selection

      const hours = Math.floor((diffInMs % 86400000) / 3600000); // Calculate hours
      const minutes = Math.round(((diffInMs % 86400000) % 3600000) / 60000); // Calculate minutes

      return `${hours} hour(s) and ${minutes} minute(s)`;
    }
    return null; // Return null if times are not set
  };

  return (
    <SafeAreaView>
      <TimePicker onTimeChange={handleTimeChange} isStartTime={true} />
      {/* Start Time Picker */}
      <TimePicker onTimeChange={handleTimeChange} isStartTime={false} />
      {/* End Time Picker */}
      {selectedDateTime.startTime && selectedDateTime.endTime && (
        <Text>
          Time difference: {calculateTimeDifference()}
          {/* Display time difference */}
        </Text>
      )}
    </SafeAreaView>
  );
};

export default App;
