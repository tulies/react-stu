
const initState = {
  listData: [],
};

const ACTION_TYPES = {
  LISTDATA: 'LISTDATA',
};

export const List = (state = initState, action) => {
  switch (action.type) {
    case ACTION_TYPES.LISTDATA:
      return {
        ...state,
        listData: action.payload,
      };
    default:
      return state;
  }
};

export function getListData() {
  return (dispatch) => {
    // 延迟1秒再触发
    setTimeout(() => {
      dispatch({
        type: ACTION_TYPES.LISTDATA,
        payload: [{
          title: '哈哈哈1111',
        }, {
          title: '哈哈哈2222',
        }, {
          title: '哈哈哈3333',
        }],
      });
    }, 2000);
  };
}
export default { List };
