import {createStore, applyMiddleware} from 'redux';
import {persistStore, persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

// Cấu hình Redux Persist
const persistConfig = {
  key: 'root', // Khóa duy nhất để lưu trạng thái vào AsyncStorage
  storage: AsyncStorage, // Sử dụng AsyncStorage làm bộ nhớ lưu trữ
  whitelist: ['personalInfo'], // Chỉ lưu trạng thái personalInfo (thay thế bằng tên reducer bạn muốn lưu)
};

// Tạo reducer được tích hợp Redux Persist
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Áp dụng middleware
const middleware = [thunk];

// Tạo Redux store với reducer đã tích hợp Redux Persist
export const store = createStore(
  persistedReducer,
  applyMiddleware(...middleware),
);  

// Tạo persisted store để sử dụng cho Redux Persist
export const persistor = persistStore(store);
