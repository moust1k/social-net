import { instance, ResponseType } from './Api'

type GetUserDataType = {
	id: number
	email: string
	login: string
}
type LoginDataType = {
	userId: number
}

export const headerAPI = {
	getUserData() {
		return instance.get<ResponseType<GetUserDataType>>(`auth/me`).then(response => response.data)
	},
	login(email: string, password: string, rememberMe: boolean) {
		return instance.post<ResponseType<LoginDataType>>(`/auth/login`, { email, password, rememberMe }).then(response => response.data)
	},
	logout() {
		return instance.delete<ResponseType>(`/auth/login`).then(response => response.data)
	}
}
