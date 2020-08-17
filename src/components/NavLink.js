import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import Spacer from './Spacer';
import { withNavigation } from 'react-navigation';

const NavLink = ({ navigation, navText, navDestination }) => {
  return (
    <TouchableOpacity onPress={() => navigation.navigate(navDestination)}>
      <Spacer>
        <Text>{navText}</Text>
      </Spacer>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  link: {
    color: 'blue',
  },
});

export default withNavigation(NavLink);
