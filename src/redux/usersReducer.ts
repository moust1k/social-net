import { usersAPI } from '../components/api/users-api'
import { updateObjectInArray } from '../utilits/object-helper'
import { UsersType } from '../types/types'
import { BaseThunkType } from './store'
import { PropertiesType } from './store'

let initialState = {
	users: [] as Array<UsersType>,
	pageSize: 5,
	totalUsersCount: 0,
	currentPage: 1,
	isFetching: false,
	followingInProgress: [] as Array<number> // Array of users id
}
export type InitialStateType = typeof initialState
type ActionsTypes = PropertiesType<typeof usersActions>

const usersReducer = (state = initialState, action: ActionsTypes): InitialStateType => {
	switch (action.type) {
		case 'social-net/usersReducer/FOLLOW':
			return {
				...state,
				users: updateObjectInArray(state.users, action.userId, 'id', { followed: true })
			}
		case 'social-net/usersReducer/UNFOLLOW':
			return {
				...state,
				users: updateObjectInArray(state.users, action.userId, 'id', { followed: false })
			}
		case 'social-net/usersReducer/SET_USERS':
			return {
				...state,
				users: action.users
			}
		case 'social-net/usersReducer/SET_CURRENT_PAGE':
			return {
				...state,
				currentPage: action.page
			}
		case 'social-net/usersReducer/SET_TOTAL_USERS_COUNT':
			return {
				...state,
				totalUsersCount: action.totalCount
			}
		case 'social-net/usersReducer/TOGGLE_IS_FETCHING':
			return {
				...state,
				isFetching: action.isFetching
			}
		case 'social-net/usersReducer/TOGGLE_IS_FOLLOWING_PROGRESS':
			return {
				...state,
				followingInProgress: action.isFetching ? [...state.followingInProgress, action.userId] : state.followingInProgress.filter(id => id !== action.userId)
			}
		default:
			return state
	}
}

//ActionCreators
export const usersActions = {
	followSucces: (userId: number) => ({ type: 'social-net/usersReducer/FOLLOW', userId } as const),
	unfollowSucces: (userId: number) => ({ type: 'social-net/usersReducer/UNFOLLOW', userId } as const),
	setUsers: (users: Array<UsersType>) => ({ type: 'social-net/usersReducer/SET_USERS', users } as const),
	setCurrentPage: (page: number) => ({ type: 'social-net/usersReducer/SET_CURRENT_PAGE', page } as const),
	setTotalUsersCount: (totalCount: number) => ({ type: 'social-net/usersReducer/SET_TOTAL_USERS_COUNT', totalCount } as const),
	toggleIsFetching: (isFetching: boolean) => ({ type: 'social-net/usersReducer/TOGGLE_IS_FETCHING', isFetching } as const),
	toggleIsFollowingUser: (isFetching: boolean, userId: number) =>
		({
			type: 'social-net/usersReducer/TOGGLE_IS_FOLLOWING_PROGRESS',
			isFetching,
			userId
		} as const)
}

// ThunksCreators

// type GetStateType = () => AppStateType
// type GetDispatchType = Dispatch<UsersTypes>
type ThunkType = BaseThunkType<ActionsTypes>

export const getUsers =
	(pageSize: number, pageCurrent: number): ThunkType =>
	async dispatch => {
		dispatch(usersActions.toggleIsFetching(true))
		let data = await usersAPI.getUsers(pageSize, pageCurrent)
		dispatch(usersActions.toggleIsFetching(false))
		dispatch(usersActions.setUsers(data.items))
		dispatch(usersActions.setTotalUsersCount(data.totalCount))
	}

export const follow =
	(userId: number): ThunkType =>
	async dispatch => {
		dispatch(usersActions.toggleIsFollowingUser(true, userId))
		let data = await usersAPI.followUser(userId)
		if (data.resultCode === 0) {
			dispatch(usersActions.followSucces(userId))
		}
		dispatch(usersActions.toggleIsFollowingUser(false, userId))
	}

export const unfollow =
	(userId: number): ThunkType =>
	async dispatch => {
		dispatch(usersActions.toggleIsFollowingUser(true, userId))
		let data = await usersAPI.unfollowUser(userId)
		if (data.resultCode === 0) {
			dispatch(usersActions.unfollowSucces(userId))
		}
		dispatch(usersActions.toggleIsFollowingUser(false, userId))
	}

export default usersReducer
