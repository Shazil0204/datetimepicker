import React, { useState } from "react";
import { View, Button, Text } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";

interface TimePickerProps {
  onTimeChange: (selectedTime: Date) => void; // Callback prop
}

const TimePicker: React.FC<TimePickerProps> = ({ onTimeChange }) => {
  const [time, setTime] = useState(new Date());
  const [show, setShow] = useState(false);

  const onChange = (event: any, selectedTime?: Date) => {
    const currentTime = selectedTime || time;
    setShow(false);
    setTime(currentTime);
    onTimeChange(currentTime); // Send selected time to parent
  };

  return (
    <View>
      <Button onPress={() => setShow(true)} title="Show Time Picker" />
      {show && (
        <DateTimePicker
          value={time}
          mode="time"
          is24Hour={true}
          onChange={onChange}
        />
      )}
    </View>
  );
};

export default TimePicker;
