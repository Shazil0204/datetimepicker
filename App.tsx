import React, { useState } from "react";
import { SafeAreaView, Text } from "react-native";
import DatePicker from "./DatePicker";
import TimePicker from "./TimePicker";

interface DateTime {
  date: Date | null; // Holds the selected date
  time: Date | null; // Holds the selected time
}

const App: React.FC = () => {
  const [selectedDateTime, setSelectedDateTime] = useState<DateTime>({
    date: null,
    time: null,
  }); // Combined state

  const handleDateChange = (date: Date) => {
    setSelectedDateTime((prevState) => ({ ...prevState, date })); // Update date while preserving time
  };

  const handleTimeChange = (time: Date) => {
    setSelectedDateTime((prevState) => ({ ...prevState, time })); // Update the state with the selected time
  };

  return (
    <SafeAreaView>
      <DatePicker onDateChange={handleDateChange} />
      {selectedDateTime.date && (
        <Text>
          You selected date: {selectedDateTime.date.toLocaleDateString()}{" "}
          {/* Display the selected date */}
        </Text>
      )}
      <TimePicker onTimeChange={handleTimeChange} />
      {selectedDateTime.time && (
        <Text>
          You selected time: {selectedDateTime.time.toLocaleTimeString()}{" "}
          {/* Display the selected time */}
        </Text>
      )}
    </SafeAreaView>
  );
};

export default App;
