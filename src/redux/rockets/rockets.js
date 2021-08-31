import axios from 'axios';

const GET_ROCKET_REQUEST = 'GET_ROCKET_REQUEST';
const GET_ROCKET_SUCCESS = 'GET_ROCKET_SUCCESS';
const GET_ROCKET_FAILURE = 'GET_ROCKET_FAILURE';
const RESERVE_ROCKET = 'RESERVE_ROCKET';
const CANCEL_ROCKET = 'CANCEL_ROCKET';

export const getRocketRequest = () => ({
  type: GET_ROCKET_REQUEST,
});

export const getRocketSuccess = (rockets) => ({
  type: GET_ROCKET_SUCCESS,
  payload: rockets,
});

export const getRocketFailure = (error) => ({
  type: GET_ROCKET_FAILURE,
  payload: error,
});

export const reserveRocket = (payload) => ({
  type: RESERVE_ROCKET,
  payload,
})

export const cancelRocket = (payload) => ({
  type: CANCEL_ROCKET,
  payload,
})

export const fetchRockets = () => (dispatch) => {
  dispatch(getRocketRequest);
  axios.get('https://api.spacexdata.com/v3/rockets')
    .then((response) => {
      const newData = response.data;
      const rockets = newData.map((rocket) => ({
        id: rocket.id,
        rocketName: rocket.rocket_name,
        description: rocket.description,
        flickrImages: rocket.flickr_images[0],
      }));
      dispatch(getRocketSuccess(rockets));
    })
    .catch((error) => {
      const errorMsg = error.message;
      dispatch(getRocketFailure(errorMsg));
    });
};

export const initialState = {
  loading: false,
  rockets: [],
  error: '',
};

const rocketsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ROCKET_REQUEST:
      return { ...state, loading: true };

    case GET_ROCKET_SUCCESS:
      return {
        ...state,
        loading: true,
        rockets: action.payload,
        error: '',
      };

    case GET_ROCKET_FAILURE:
      return {
        loading: false,
        rockets: [],
        error: action.payload,
      };

    case RESERVE_ROCKET:
      return {
        ...state,
        rockets: state.rockets.map(rocket => {
          if (rocket.id !== action.payload.id)
            return rocket;
          return { ...rocket, reserved: true };
        }),
      };

      case CANCEL_ROCKET:
      return {
        ...state,
        rockets: state.rockets.map(rocket => {
          if (rocket.id !== action.payload.id)
            return rocket;
          return { ...rocket, reserved: false };
        }),
      };

    default:
      return state;
  }
};

export default rocketsReducer;
