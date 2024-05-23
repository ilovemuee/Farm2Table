import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, FlatList } from 'react-native';

export default function DropdownMenu({ options, backgroundColor, borderColor, buttonTextcolor, selectedOptionBackgroundColor, selectedOptionTextColor, onSelect }) {
  const [selectedOption, setSelectedOption] = useState(null);
  const [showDropdown, setShowDropdown] = useState(false);

  const handleOptionPress = (option) => {
    setSelectedOption(option);
    onSelect && onSelect(option); 
    setShowDropdown(false);
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={[
        styles.option,
        selectedOption === item && styles.selectedOption,
        { backgroundColor: selectedOption === item ? selectedOptionBackgroundColor : backgroundColor }
      ]}
      onPress={() => handleOptionPress(item)}
    >
      <Text style={[
        styles.optionText,
        selectedOption === item && styles.selectedOptionText,
        { color: selectedOption === item ? selectedOptionTextColor : buttonTextcolor }
      ]}>
        {item}
      </Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[styles.dropdownButton, { backgroundColor, borderColor }]}
        onPress={() => setShowDropdown(!showDropdown)} 
      >
        <Text style={[styles.buttonText, { color: buttonTextcolor }]}>
          {selectedOption || 'Select an option'}
        </Text>
      </TouchableOpacity>
      {showDropdown && (
        <View style={[styles.dropdown, { borderColor }]}>
          <FlatList
            data={options}
            renderItem={renderItem}
            keyExtractor={(item) => item}
          />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '11.0%',
    marginVertical: 20,
  },
  dropdownButton: {
    padding: 15,
    borderWidth: 1,
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 16,
  },
  dropdown: {
    marginTop: 10,
    borderWidth: 1,
    borderRadius: 5,
  },
  option: {
    padding: 15,
  },
  selectedOption: {
    backgroundColor: '#f0f0f0',
  },
  optionText: {
    fontSize: 16,
  },
  selectedOptionText: {
    color: '#007BFF',
  },
});
