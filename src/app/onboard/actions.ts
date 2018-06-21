import { ActionContext } from 'vuex';
import { IOnboardState } from './state';
import { HttpService } from '../shared/services/HttpService';
import { AxiosResponse } from 'axios';

export interface IOnboardResponse {
  count: number;
}

export interface IOnboardActions {
  increment(context: ActionContext<IOnboardState, IOnboardState>): Promise<any>;

  decrement(context: ActionContext<IOnboardState, IOnboardState>): Promise<any>;
  setFirstName(context: ActionContext<IOnboardState, IOnboardState>): Promise<any>;
}

export const OnboardActions: IOnboardActions = {
  increment({ commit, state }: ActionContext<IOnboardState, IOnboardState>): Promise<any> {
    commit('SET_INCREMENT_PENDING', true);

    return HttpService
      .put('/counter/increment', { count: state.count })
      .then((res: AxiosResponse<IOnboardResponse>) => {
        commit('SET_COUNT', res.data.count);
        commit('SET_INCREMENT_PENDING', false);
      })
      .catch(() => {
        commit('SET_INCREMENT_PENDING', false);
      });
  },
  decrement({ commit, state }: ActionContext<IOnboardState, IOnboardState>): Promise<any> {
    commit('SET_DECREMENT_PENDING', true);

    return HttpService
      .put('/counter/decrement', { count: state.count })
      .then((res: AxiosResponse<IOnboardResponse>) => {
        commit('SET_COUNT', res.data.count);
        commit('SET_DECREMENT_PENDING', false);
      })
      .catch(() => commit('SET_DECREMENT_PENDING', false));
  },

  setFirstName({ commit, state }: ActionContext<IOnboardState, IOnboardState>): Promise<any> {
    return new Promise((resolve, reject) => {
       setTimeout(() => {
        console.log(commit.toString);
        resolve(commit('SET_FIRST_NAME', 'dudec'));
      }, 300);
    });
  },
};
