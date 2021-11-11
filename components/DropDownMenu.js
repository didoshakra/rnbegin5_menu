//DropDownMenu.js//https://reactnativeexample.com/uimenu-component-for-react-native/
import React from 'react';
import {View, Text} from 'react-native';
import SelectDropdown from 'react-native-select-dropdown';

const countries = ['Egypt', 'Canada', 'Australia', 'Ireland'];

const DropDownMenu = () => {
  return (
    <View>
      <Text style={{textAlign: 'center', fontSize: 22, color: 'red'}}>
        Menu / DropDown2
      </Text>
      <SelectDropdown
        data={countries}
        onSelect={(selectedItem, index) => {
          console.log(selectedItem, index);
        }}
        buttonTextAfterSelection={(selectedItem, index) => {
          // text represented after item is selected
          // if data array is an array of objects then return selectedItem.property to render after item is selected
          return selectedItem;
        }}
        rowTextForSelection={(item, index) => {
          // text represented for each item in dropdown
          // if data array is an array of objects then return item.property to represent item in dropdown
          return item;
        }}
      />
    </View>
  );
};

export default DropDownMenu;
