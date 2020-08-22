import React, { useContext } from 'react';
import { StyleSheet } from 'react-native';
import MapView, { Polyline } from 'react-native-maps';
import { Context as LocationContext } from '../contexts/LocationContext';

const Map = () => {
  const { state } = useContext(LocationContext);

  console.log(state);
  return (
    <MapView
      initialRegion={{
        latitude: 37.33233,
        longitude: -122.03121,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01,
      }}
      style={styles.map}
    >
      {/* <Polyline coordinates={points} /> */}
    </MapView>
  );
};

const styles = StyleSheet.create({
  map: {
    height: 300,
  },
});

export default Map;
