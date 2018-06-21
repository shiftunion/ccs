export interface IOnboardState {
  incrementPending: boolean;
  decrementPending: boolean;
  count: number;
  firstName: string;
  lastName: string;
  email: string;
}

export const OnboardDefaultState: IOnboardState = {
  incrementPending: false,
  decrementPending: false,
  count:            0,
  firstName:        'Nick3',
  lastName:         '',
  email:            '',
};
