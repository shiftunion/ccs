import { OnboardGetters }      from './getters';
import { OnboardDefaultState } from './state';

describe('OnboardGetters', () => {

  test('it should get the count', () => {
    expect(OnboardGetters.count(OnboardDefaultState)).toBe(0);
  });

  test('it should get increment pending', () => {
    expect(OnboardGetters.incrementPending(OnboardDefaultState)).toBe(false);
  });

  test('it should get decrement pending', () => {
    expect(OnboardGetters.decrementPending(OnboardDefaultState)).toBe(false);
  });

});
