import { AppDefaultState, IAppState }         from './app/state';
import { CounterDefaultState, ICounterState } from './counter/state';
import { OnboardDefaultState, IOnboardState }         from './onboard/state';

export interface IState {
  [key: string]: any;

  app?: IAppState;
  counter?: ICounterState;
  onboard?: IOnboardState;
}

export const DefaultState: IState = {
  app:     {
    ...AppDefaultState,
  },
  counter: {
    ...CounterDefaultState,
  },
  onboard: {
    ...OnboardDefaultState,
  },
};
