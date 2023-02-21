import { Action, applyMiddleware, combineReducers, legacy_createStore as createStore } from 'redux'
import thunkMiddleware, { ThunkAction } from 'redux-thunk'
import profileReducer from './profileReducer'
import dialogsReducer from './dialogsReducer'
import usersReducer from './usersReducer'
import authReducer from './authReducer'

let rootRecucer = combineReducers({
	profileReducer,
	dialogsReducer,
	usersReducer,
	authReducer
})

type RootReducerType = typeof rootRecucer
export type AppStateType = ReturnType<RootReducerType>

export type BaseThunkType<A extends Action, R = Promise<void>> = ThunkAction<R, AppStateType, unknown, A>

let store = createStore(rootRecucer, applyMiddleware(thunkMiddleware))

// Infer for action creators
type InferValuesType<T> = T extends { [key: string]: infer U } ? U : never
export type PropertiesType<T extends { [key: string]: (...args: any) => any }> = ReturnType<InferValuesType<T>>

// @ts-ignore
window.store = store

export default store
