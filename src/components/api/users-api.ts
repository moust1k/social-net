import { UsersType } from '../../types/types'
import { instance, ResponseType } from './Api'

type GetUsersType = {
	items: UsersType[]
	totalCount: number
	error: string | null
}

export const usersAPI = {
	getUsers(pageSize = 5, currentPage: number) {
		return instance.get<GetUsersType>(`users?count=${pageSize}&page=${currentPage}`).then(response => response.data)
	},
	followUser(userId: number) {
		return instance.post<ResponseType>(`follow/${userId}`).then(response => response.data)
	},
	unfollowUser(userId: number) {
		return instance.delete<ResponseType>(`follow/${userId}`).then(response => response.data)
	}
}
