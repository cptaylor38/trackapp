import React, { useContext } from 'react';
import { Input, Button } from 'react-native-elements';
import Spacer from './Spacer';
import { Context as LocationContext } from '../contexts/LocationContext';

const TrackForm = () => {
  const {
    state: { name, recording, locations },
    startRecording,
    stopRecording,
    changeName,
  } = useContext(LocationContext);

  return (
    <>
      <Spacer>
        <Input
          value={name}
          onChangeText={changeName}
          placeholder='Enter Track Name'
        />
      </Spacer>
      <Spacer>
        {!recording ? (
          <Button title='Start Recording' onPress={startRecording} />
        ) : (
          <Button title='Stop Recording' onPress={stopRecording} />
        )}
      </Spacer>
    </>
  );
};

export default TrackForm;
