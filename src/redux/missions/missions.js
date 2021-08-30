import fetchMissions from '../../controller/missions-api';

const GET_MISSIONS = 'missions/GET_MISSIONS';
const CHANGE_STATUS = 'missions/CHANGE_STATUS';

const getMissions = (payload) => ({
  type: GET_MISSIONS,
  payload,
});

export const changeStatus = (payload) => ({
  type: CHANGE_STATUS,
  payload,
});

const initialState = [];

const missionsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_MISSIONS:
      return action.payload;

    case CHANGE_STATUS:
      return state.map((mission) => (mission.mission_id === action.payload
        ? { ...mission, reserved: true }
        : mission));

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
