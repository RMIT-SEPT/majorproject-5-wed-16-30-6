import configureStore from 'redux-mock-store';

// Actions to be tested
import * as customerActions from './customerActions';

const mockStore = configureStore();
const store = mockStore();

describe('customer actions', () => {
  beforeEach(() => { // Runs before each test in the suite
    store.clearActions();
  });

  test('Dispatches the correct action (postCustomerRequest)', () => {
    const expectedActions = [
      {
        'type': 'POST_CUSTOMER_REQUEST',
      }
    ];

    store.dispatch(customerActions.postCustomerRequest());
    expect(store.getActions()).toEqual(expectedActions);
  });

  test('Dispatches the correct action (postCustomerSuccess)', () => {
    const json = {
      'name': 'name',
      'username': 'username',
      'password': 'password',
      'mobile': 'mobile',
      'address': 'address'
    }

    const expectedActions = [
      {
        'type': 'POST_CUSTOMER_SUCCESS',
        'customer': json,
        'receivedAt': Date.now()
      }
    ];

    store.dispatch(customerActions.postCustomerSuccess(json));
    expect(store.getActions()).toEqual(expectedActions);
  });

  test('Check the illegal argument (postCustomerSuccess)', () => {
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
        'type': 'POST_CUSTOMER_SUCCESS',
        'customer': json,
        'receivedAt': Date.now()
      }
    ];

    store.dispatch(customerActions.postCustomerSuccess(responseStr));
    expect(store.getActions()).not.toEqual(expectedActions);
  });

});