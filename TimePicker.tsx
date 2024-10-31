import React, { useState } from "react";
import { View, Button, Text } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";

interface TimePickerProps {
  onTimeChange: (selectedTime: Date, isStartTime: boolean) => void; // Callback prop with isStartTime
  isStartTime: boolean; // Prop to determine if this is start time or end time
}

const TimePicker: React.FC<TimePickerProps> = ({
  onTimeChange,
  isStartTime,
}) => {
  const [time, setTime] = useState(new Date()); // State to hold the selected time
  const [show, setShow] = useState(false); // State to control visibility of the time picker

  const onChange = (event: any, selectedTime?: Date) => {
    const currentTime = selectedTime || time; // Use the selected time or fallback to the current state
    setShow(false); // Hide the picker
    setTime(currentTime); // Update the time state
    onTimeChange(currentTime, isStartTime); // Call the callback prop with the selected time and isStartTime
  };

  return (
    <View>
      <Button onPress={() => setShow(true)} title="Show Time Picker" />
      {show && (
        <DateTimePicker
          value={time}
          mode="time" // Set mode to time
          is24Hour={true} // Display in 24-hour format
          onChange={onChange} // Handle time change
        />
      )}
    </View>
  );
};

export default TimePicker;
