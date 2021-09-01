import axios from 'axios';

const baseUrl = 'https://api.spacexdata.com/v3/missions';

const GET_MISSIONS = 'missions/GET_MISSIONS';
const CHANGE_STATUS = 'missions/CHANGE_STATUS';

export const getMissions = (payload) => ({
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
        ? { ...mission, reserved: !mission.reserved }
        : mission));

    default:
      return state;
  }
};

export const getMissionsThunk = () => (dispatch) => {
  axios.get(baseUrl).then((res) => {
    const response = res.data.map((r) => ({
      mission_id: r.mission_id,
      mission_name: r.mission_name,
      description: r.description,
    }));
    dispatch(getMissions(response));
  });
};

export default missionsReducer;
