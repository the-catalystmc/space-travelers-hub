import fetchMissions from '../../controller/missions-api';

const GET_MISSIONS = 'missions/GET_MISSIONS';

const getMissions = (payload) => ({
  type: GET_MISSIONS,
  payload,
});

const initialState = [];

const missionsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_MISSIONS:
      return action.payload;

    default:
      return state;
  }
};

export const getMissionsThunk = () => (dispatch) => {
  fetchMissions().then((res) => {
    dispatch(getMissions(res));
  });
};

export default missionsReducer;
