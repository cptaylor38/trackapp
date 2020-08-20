import React, { useContext } from 'react';
import { StyleSheet, Text } from 'react-native';
import { Button } from 'react-native-elements';
import Spacer from '../components/Spacer';
import { Context as AuthContext } from '../contexts/AuthContext';
import { SafeAreaView } from 'react-navigation';

const AccountScreen = () => {
  const { Signout } = useContext(AuthContext);
  return (
    <SafeAreaView forceInset={{ top: 'always' }}>
      <Text style={{ fontSize: 24 }}>Account Screen</Text>
      <Spacer>
        <Button title='Log Out' onPress={Signout} />
      </Spacer>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default AccountScreen;
