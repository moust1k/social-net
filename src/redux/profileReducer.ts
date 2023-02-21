import { profileAPI } from '../components/api/profile-api'
import { ProfileType, PhotosType, PostType } from '../types/types'
import { BaseThunkType, PropertiesType } from './store'

let initialState = {
	posts: [] as Array<PostType>,
	profile: null as ProfileType | null,
	status: ''
}
type InitialStateType = typeof initialState

type ActionType = PropertiesType<typeof profileActions>
type ThunkType = BaseThunkType<ActionType>

const profileReducer = (state = initialState, action: ActionType): InitialStateType => {
	switch (action.type) {
		case 'social-net/profileReducer/ADD_POST': {
			let newPost: PostType = {
				id: Date.now(),
				message: Object.values(action.post),
				likesCount: 0,
				dislikeCount: 0
			}
			return {
				...state,
				posts: [...state.posts, newPost]
			}
		}
		case 'social-net/profileReducer/ADD_LIKE':
			return {
				...state,
				posts: state.posts.map(post => {
					if (post.id === action.postId) {
						post.likesCount += 1
					}
					return post
				})
			}
		case 'social-net/profileReducer/DISLIKE':
			return {
				...state,
				posts: state.posts.map(post => {
					if (post.id === action.postId) {
						post.dislikeCount += 1
					}
					return post
				})
			}
		case 'social-net/profileReducer/SET_USER_PROFILE':
			return {
				...state,
				profile: action.profile
			}
		case 'social-net/profileReducer/GET_POSTS':
			return {
				...state,
				posts: [action.posts]
			}
		case 'social-net/profileReducer/SET_STATUS':
			return {
				...state,
				status: action.status
			}
		case 'social-net/profileReducer/SAVE_PHOTO_SUCCESS':
			return {
				...state,
				profile: { ...state.profile, photos: action.photos } as ProfileType
			}
		default:
			return state
	}
}
// ACTION CREATORS
export const profileActions = {
	addPostActionCreator: (post: object) =>
		({
			type: 'social-net/profileReducer/ADD_POST',
			post
		} as const),
	getPosts: (posts: PostType) =>
		({
			type: 'social-net/profileReducer/GET_POSTS',
			posts
		} as const),
	addLikeAC: (postId: number) =>
		({
			type: 'social-net/profileReducer/ADD_LIKE',
			postId
		} as const),
	dislikeAC: (postId: number) =>
		({
			type: 'social-net/profileReducer/DISLIKE',
			postId
		} as const),
	setUserProfile: (profile: ProfileType) =>
		({
			type: 'social-net/profileReducer/SET_USER_PROFILE',
			profile
		} as const),
	setStatus: (status: string) =>
		({
			type: 'social-net/profileReducer/SET_STATUS',
			status
		} as const),
	savePhotoSuccess: (photos: PhotosType) =>
		({
			type: 'social-net/profileReducer/SAVE_PHOTO_SUCCESS',
			photos
		} as const)
}

// THUNK CREATORS

export const getStatus =
	(userId: number): ThunkType =>
	async dispatch => {
		let data = await profileAPI.getStatus(userId)
		if (data) {
			dispatch(profileActions.setStatus(data))
		}
	}

export const getUserProfile =
	(userId: number): ThunkType =>
	async dispatch => {
		const data = await profileAPI.getUser(userId)
		dispatch(profileActions.setUserProfile(data))
	}

export const updateStatus =
	(status: string): ThunkType =>
	async dispatch => {
		let data = await profileAPI.updateStatus(status)
		if (data.resultCode === 0) {
			dispatch(profileActions.setStatus(status))
		}
	}

export const savePhoto =
	(photos: PhotosType): ThunkType =>
	async dispatch => {
		let data = await profileAPI.updatePhoto(photos)
		if (data.resultCode === 0) {
			dispatch(profileActions.savePhotoSuccess(data.data.photos))
		}
	}

export const saveProfile =
	(profile: ProfileType): ThunkType =>
	async (dispatch, getState) => {
		const userId = getState().authReducer.id
		let data = await profileAPI.saveProfile(profile)
		if (data.resultCode === 0) {
			dispatch(getUserProfile(userId as number))
		}
	}

export default profileReducer
