import { OnboardMutations }                   from './mutations';
import { OnboardDefaultState, IOnboardState } from './state';
import { cloneDeep }                          from 'lodash';

describe('OnboardMutations', () => {
  let testState: IOnboardState;

  beforeEach(() => {
    testState = cloneDeep(OnboardDefaultState);
  });

  test('it should set the count', () => {
    OnboardMutations.SET_COUNT(testState, 1337);
    expect(testState.count).toBe(1337);
  });

  test('it should set increment pending', () => {
    OnboardMutations.SET_INCREMENT_PENDING(testState, true);
    expect(testState.incrementPending).toBe(true);
  });

  test('it should set decrement pending', () => {
    OnboardMutations.SET_DECREMENT_PENDING(testState, true);
    expect(testState.decrementPending).toBe(true);
  });

});
