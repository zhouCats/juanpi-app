
export default {

  namespace: 'example',

  state: {
    ListItem:""
    
  },

  subscriptions: {
    setup({ dispatch, history }) {  // eslint-disable-line
    },
  },

  effects: {
    *fetch({ payload }, { call, put }) {  // eslint-disable-line
      yield put({ type: 'save' });
    },
  },

  reducers: {
    ChangeData(state, action) {
      return { ...state, ...action.payload };
    },
  },

};
