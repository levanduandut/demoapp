export const CAP_NHAT_DIA_CHI = 'CAP_NHAT_DIA_CHI';
export const CAP_NHAT_DIEM = 'CAP_NHAT_DIEM';
export const CAP_NHAT_EMAIL = 'CAP_NHAT_EMAIL';
export const CAP_NHAT_ID = 'CAP_NHAT_ID';

const initialState = {
  email: '',
  score: 0,
  address: 'Nghe An',
  id: '',
};

export default function actionForReducer(state = initialState, payload) {
  switch (payload.type) {
    case 'CAP_NHAT_EMAIL':
      return {
        ...state,
        email: payload.email,
      };
    case 'CAP_NHAT_ID':
      return {
        ...state,
        id: payload.id,
      };
    case 'CAP_NHAT_DIEM':
      return {
        ...state,
        email: payload.score,
      };
    case 'CAP_NHAT_DIA_CHI':
      return {
        ...state,
        email: payload.address,
      };
    default:
      return state;
  }
}
