import { IOnboardState } from './state';

export interface IOnboardGetters {
  incrementPending(state: IOnboardState): boolean;
  decrementPending(state: IOnboardState): boolean;
  count(state: IOnboardState): number;
  firstName(state: IOnboardState): string;
  firstName(state: IOnboardState, value: string): void;
  lastName(state: IOnboardState): string;
  email(state: IOnboardState): string;
}

export const OnboardGetters: IOnboardGetters = {
  incrementPending(state: IOnboardState): boolean {
    return state.incrementPending;
  },
  decrementPending(state: IOnboardState): boolean {
    return state.decrementPending;
  },
  count(state: IOnboardState): number {
    return state.count;
  },
  firstName(state: IOnboardState): string {
    return state.firstName;
  },
  lastName(state: IOnboardState): string {
    return state.lastName;
  },
  email(state: IOnboardState): string {
    return state.email;
  },
};
