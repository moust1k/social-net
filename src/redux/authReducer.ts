import { headerAPI } from '../components/api/header-api'
import { BaseThunkType, PropertiesType } from './store'

const SET_USER = ''

type InitialStateType = typeof initialState
type ActionType = PropertiesType<typeof authActions>

let initialState = {
	id: null as number | null,
	email: null as string | null,
	login: null as string | null,
	isAuth: false as boolean | null
}

const authReducer = (state = initialState, action: ActionType): InitialStateType => {
	switch (action.type) {
		case SET_USER:
			return {
				...state,
				...action.payload
			}
		default:
			return state
	}
}

// ActionCreators
const authActions = {
	setUserData: (id: number | null, email: string | null, login: string | null, isAuth: boolean) => ({
		type: 'social-net/authReducer/SET_USER',
		payload: { id, email, login, isAuth }
	})
}

// ThunkCreators
type ThunkType = BaseThunkType<ActionType>

export const getUserData = (): ThunkType => async dispatch => {
	let data = await headerAPI.getUserData()
	if (data.resultCode === 0) {
		let { id, email, login } = data.data
		dispatch(authActions.setUserData(id, email, login, true))
	}
}

export const login =
	(email: string, password: string, rememberMe: boolean): ThunkType =>
	async dispatch => {
		let data = await headerAPI.login(email, password, rememberMe)
		if (data.resultCode === 0) {
			dispatch(getUserData())
		}
	}

export const logout = (): ThunkType => async dispatch => {
	let data = await headerAPI.logout()
	if (data.resultCode === 0) {
		dispatch(authActions.setUserData(null, null, null, false))
	}
}

export default authReducer
