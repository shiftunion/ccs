import { Module }                             from 'vuex';
import { OnboardDefaultState, IOnboardState } from './state';
import { OnboardActions }                     from './actions';
import { OnboardGetters }                     from './getters';
import { OnboardMutations }                   from './mutations';

export const OnboardModule: Module<IOnboardState, IOnboardState> = {
  namespaced: true,
  actions:    {
    ...OnboardActions,
  },
  getters:    {
    ...OnboardGetters,
  },
  state:      {
    ...OnboardDefaultState,
  },
  mutations:  {
    ...OnboardMutations,
  },
};
