import axios from 'axios'

export const instance = axios.create({
	baseURL: 'https://social-network.samuraijs.com/api/1.0/',
	withCredentials: true,
	headers: {
		'API-KEY': '53547416-ffa5-4b9c-b143-75309e684cb5'
	}
})

export type ResponseType<T = {}> = {
	data: T
	messages: string[]
	resultCode: number
}
