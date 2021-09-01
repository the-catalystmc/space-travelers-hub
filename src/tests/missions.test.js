import { getMissions, changeStatus } from '../redux/missions/missions';
import { reducer } from '../redux/configureStore';

describe('Test', () => {
  it('getMissions action creator is right', () => {
    const payload = 'temp';
    const expectedAction = {
      type: 'missions/GET_MISSIONS',
      payload,
    };
    expect(getMissions(payload)).toEqual(expectedAction);
  });

  it('changeStatus action creator is right', () => {
    const payload = 'temp';
    const expectedAction = {
      type: 'missions/CHANGE_STATUS',
      payload,
    };
    expect(changeStatus(payload)).toEqual(expectedAction);
  });

  it('combined reducer is right', () => {
    expect(reducer(undefined, {})).toEqual({
      missionsReducer: [],
      rockets: { error: '', loading: false, rockets: [] },
    });
  });
});
