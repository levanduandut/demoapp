import { CAP_NHAT_EMAIL } from "../reducers/infoReducer";

export const updateEmail = email => async dispatch => {
  try {
    // Side effect : goi len server hoac lam gi day de  bat dong bo (dung middleware redux thunk)
    console.log('Bắt đầu gọi lên server');
    new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve;
      }, 3000);
    });
    await console.log('Đã cập nhật email');
    // Cpa nhat thong tin infoReduce trong store
    dispatch({
        type:CAP_NHAT_EMAIL,
        email: email
    })
  } catch (error) {}
};
