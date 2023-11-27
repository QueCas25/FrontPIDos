import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../features/user/userSlice';
import tokenReducer from '../features/user/tokenSlice';
import idReducer from '../features/user/idSlice';
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';
import thunk from 'redux-thunk';

const persistConfig = {
    key: 'root', // Cambiado el nombre a 'root' para indicar que es la raíz de la persistencia
    storage,
};

const persistedUserReducer = persistReducer({ ...persistConfig, key: 'usuario' }, userReducer);
const persistedTokenReducer = persistReducer({ ...persistConfig, key: 'token' }, tokenReducer);
const persistedidReducer = persistReducer({ ...persistConfig, key: 'id' }, idReducer);
export const store = configureStore({
    reducer: {
        user: persistedUserReducer,
        token: persistedTokenReducer,
        id: persistedidReducer,
    },
    middleware: [thunk],
});

export const persistor = persistStore(store);
