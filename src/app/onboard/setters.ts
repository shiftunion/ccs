import { IOnboardState } from './state';

export interface IOnboardSetters {
  firstName(state: IOnboardState, input: string): void;
  lastName(state: IOnboardState, input: string): void;
  email(state: IOnboardState, input: string): void;
}

export const OnboardGetters: IOnboardSetters = {
  firstName(state: IOnboardState, input: string) {
    state.firstName = input;
  },
  lastName(state: IOnboardState, input: string) {
    state.lastName = input;
  },
  email(state: IOnboardState, input: string) {
    state.email = input;
  },
};
