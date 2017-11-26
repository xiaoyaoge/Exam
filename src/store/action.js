import ajax from '../config/ajax'

export default {
  addNum({ commit, state }, id) {
    //点击下一题，记录答案id，判断是否是最后一题，如果不是则跳转下一题
    commit('REMBER_ANSWER', id);
    if (state.itemNum < state.itemDetail.length) {
      commit('ADD_ITEMNUM', 1);
    }
  },
  upNum({ commit, state }, id) {
    //点击下一题，记录答案ID，判断是不是第一题，如果不是则跳转上一题
    commit('REMBER_ANSWER', id);
    if (state.itemNum > 1) {
      commit('UP_ITEMNUM', -1);
    }
  },
  //初始化信息
  initializeData({ commit }) {
    commit('INITIALIZE_DATA');
  }
}
