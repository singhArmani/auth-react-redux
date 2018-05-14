import APIUtil from './apiUtil';

const api = new APIUtil();

const GoalApi = {
  getGoals() {
    return api.get('protected');
  }
};

export default GoalApi;
