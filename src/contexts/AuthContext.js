import { AsyncStorage } from 'react-native';
import createDataContext from './createDataContext';
import trackerAPI from '../api/tracker';
import { navigate } from '../../src/navigationRef';

const authReducer = (state, action) => {
  switch (action.type) {
    case 'add_error':
      return { ...state, errorMessage: action.payload };
    case 'signin':
      return { errorMessage: '', token: action.payload.token };
    case 'clear_error_message':
      return { ...state, errorMessage: '' };
    default:
      return state;
  }
};

const clearErrorMessage = (dispatch) => {
  dispatch({
    type: 'clear_error_message',
  });
};

const signin = (dispatch) => async ({ email, password }) => {
  try {
    const response = await trackerAPI.post('/signin', { email, password });
    await AsyncStorage.setItem('token', response.data.token);
    dispatch({
      type: 'signin',
      payload: response.data.token,
    });
    navigate('TrackList');
  } catch (err) {
    dispatch({
      type: 'add_error',
      payload: 'Something went wrong with sign in.',
    });
  }
};

const signup = (dispatch) => async ({ email, password }) => {
  try {
    const response = await trackerAPI.post('/signup', { email, password });
    await AsyncStorage.setItem('token', response.data.token);
    dispatch({
      type: 'signin',
      payload: response.data.token,
    });
    navigate('TrackList');
  } catch (err) {
    dispatch({
      type: 'add_error',
      payload: 'Something went wrong with sign up.',
    });
  }
};

export const { Provider, Context } = createDataContext(
  authReducer,
  { signup, signin, clearErrorMessage },
  { token: null, errorMessage: '' }
);
