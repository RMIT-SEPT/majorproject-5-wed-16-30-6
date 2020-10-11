import configureStore from 'redux-mock-store';

// Actions to be tested
import * as bookingActions from './bookingActions';

const mockStore = configureStore();
const store = mockStore();

describe('booking actions', () => {
  beforeEach(() => { // Runs before each test in the suite
    store.clearActions();
  });

  test('Dispatches the correct action (postBookingSuccess)', () => {
    const json = {
      'id': '1',
      'cust_id': '23',
      'worker_id': '13',
    };

    const expectedActions = [
      {
        'type': 'POST_BOOKING_SUCCESS',
        'booking': json,
        'receivedAt': Date.now()
      }
    ];

    store.dispatch(bookingActions.postBookingSuccess(json));
    expect(store.getActions()).toEqual(expectedActions);
  });

  test('Check the illegal argument (postBookingSuccess)', () => {
    const responseStr = "response";

    const json = {
      'id': '1',
      'cust_id': '23',
      'worker_id': '13',
    }

    const expectedActions = [
      {
        'type': 'POST_BOOKING_SUCCESS',
        'booking': json,
        'receivedAt': Date.now()
      }
    ];

    store.dispatch(bookingActions.postBookingSuccess(responseStr));
    expect(store.getActions()).not.toEqual(expectedActions);
  });

  test('Dispatches the correct action (postBookingFailure)', () => {
    const error = {
      'data': ""
    };

    const expectedActions = [
      {
        'type': 'POST_BOOKING_FAILURE',
        'errorMsg': error,
        error
      }
    ];

    store.dispatch(bookingActions.postBookingFailure(error));
    expect(store.getActions()).toEqual(expectedActions);
  });

});