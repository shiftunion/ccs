import { IOnboardState } from './state';

export interface IOnboardMutations {
  SET_INCREMENT_PENDING(state: IOnboardState, pending: boolean): void;

  SET_DECREMENT_PENDING(state: IOnboardState, pending: boolean): void;

  SET_COUNT(state: IOnboardState, count: number): void;

  SET_FIRST_NAME(state: IOnboardState, firstName: string): void;
}

export const OnboardMutations: IOnboardMutations = {
  SET_INCREMENT_PENDING: (state: IOnboardState, pending: boolean) => {
    state.incrementPending = pending;
  },
  SET_DECREMENT_PENDING: (state: IOnboardState, pending: boolean) => {
    state.decrementPending = pending;
  },
  SET_COUNT: (state: IOnboardState, count: number) => {
    state.count = count;
  },
  SET_FIRST_NAME: (state: IOnboardState, firstName: string) => {
    state.firstName = firstName;
  },
};
