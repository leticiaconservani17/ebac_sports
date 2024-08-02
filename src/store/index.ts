// store/index.ts
import { configureStore } from '@reduxjs/toolkit'
import carrinhoReducer from './reducers/carrinho'
import favoritarReducer from './reducers/favoritos'
import api from '../services/api'

// Configurando a store com os reducers e middlewares
export const store = configureStore({
  reducer: {
    carrinho: carrinhoReducer,
    favoritos: favoritarReducer,
    [api.reducerPath]: api.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware)
})

// Tipo para o estado global da aplicação
export type RootReducer = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
