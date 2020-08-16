import createDataContext from './createDataContext';
import trackerAPI from '../api/tracker';

const authReducer = (state, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

const signup = async (dispatch) => {
  return async ({ email, password }) => {
    try {
      const response = await trackerAPI.post('/signup', { email, password });
      console.log(response.data);
    } catch (err) {
      console.log(error.msg);
    }
  };
};

const signin = (dispatch) => {
  return ({ email, password }) => {
    try {
      //make api request to sign in with {email, password}
      //sign in success = modify state and change to authenticated for main app
    } catch (err) {
      //more error handling
    }
  };
};

const signout = (dispatch) => {
  return {
    // make api request to sign out
  };
};

export const { Provder, Context } = createDataContext(
  authReducer,
  {},
  { isSignedIn: false }
);
