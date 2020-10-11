import configureStore from 'redux-mock-store';

// Actions to be tested
import * as loginActions from './loginActions';

const mockStore = configureStore();
const store = mockStore();

describe('login actions', () => {
  beforeEach(() => { // Runs before each test in the suite
    store.clearActions();
  });

  test('Dispatches the correct action (postLoginRequest)', () => {
    const expectedActions = [
      {
        'type': 'POST_LOGIN_REQUEST',
      }
    ];

    store.dispatch(loginActions.postLoginRequest());
    expect(store.getActions()).toEqual(expectedActions);
  });

  test('Dispatches the correct action (postLoginSuccess)', () => {
    const json = {
      'name': 'name',
      'username': 'username',
      'password': 'password',
      'mobile': 'mobile',
      'address': 'address'
    }

    const expectedActions = [
      {
        'type': 'POST_LOGIN_SUCCESS',
        'person': json,
        'receivedAt': Date.now()
      }
    ];

    store.dispatch(loginActions.postLoginSuccess(json));
    expect(store.getActions()).toEqual(expectedActions);
  });

  test('Check the illegal argument (postLoginSuccess)', () => {
    const responseStr = "response";

    const json = {
      'name': 'name',
      'username': 'username',
      'password': 'password',
      'mobile': 'mobile',
      'address': 'address'
    }

    const expectedActions = [
      {
        'type': 'POST_LOGIN_SUCCESS',
        'person': json,
        'receivedAt': Date.now()
      }
    ];

    store.dispatch(loginActions.postLoginSuccess(responseStr));
    expect(store.getActions()).not.toEqual(expectedActions);
  });

  test('Dispatches the correct action (logoutSuccess)', () => {
    const expectedActions = [
      {
        'type': 'LOGOUT_SUCCESS',
        'login': false
      }
    ];

    store.dispatch(loginActions.logoutSuccess());
    expect(store.getActions()).toEqual(expectedActions);
  });

});