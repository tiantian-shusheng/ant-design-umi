import request from "../util/request";
export default {
  namespace: 'card',
  state: {
    counter: 0,
    data: []
  },
  effects: {
    *init({payload,callback},{call,put}){
      const url = '/dev/random_joke';
      const response = yield call(request,url);
      yield put({
        type: "addNewCard",
        payload: response
      })
    }
  },
  reducers: {
    addNewCard(state, { payload: newCard }) {
      const nextCounter = state.counter + 1;
      const newCardWithId = { ...newCard, id: nextCounter };
      const nextData = state.data.concat(newCardWithId);
      return {
        data: nextData,
        counter: nextCounter,
      };
    }
  },
}