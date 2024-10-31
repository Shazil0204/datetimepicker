import React, { useState } from "react";
import { View, Button, Text } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";

interface DatePickerProps {
  onDateChange: (selectedDate: Date) => void; // Callback prop
}

const DatePicker: React.FC<DatePickerProps> = ({ onDateChange }) => {
  const [date, setDate] = useState(new Date());
  const [show, setShow] = useState(false);

  const onChange = (event: any, selectedDate?: Date) => {
    const currentDate = selectedDate || date;
    setShow(false);
    setDate(currentDate);
    onDateChange(currentDate); // Send selected date to parent
  };

  return (
    <View>
      <Button onPress={() => setShow(true)} title="Show Date Picker" />
      {show && (
        <DateTimePicker
          value={date}
          mode="date"
          is24Hour={true}
          onChange={onChange}
        />
      )}
    </View>
  );
};

export default DatePicker;
