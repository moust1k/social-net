import { instance, ResponseType } from './Api'
import { PhotosType, ProfileType } from '../../types/types'

type ResponsePhotoDataType = {
	photos: PhotosType
}

export const profileAPI = {
	getUser(userId: number) {
		return instance.get<ProfileType>(`profile/${userId}`).then(response => response.data)
	},
	getStatus(userId: number) {
		return instance.get<string>(`profile/status/` + userId).then(response => response.data)
	},
	updateStatus(status: string) {
		return instance.put<ResponseType>(`profile/status`, { status: status }).then(response => response.data)
	},
	updatePhoto(photos: any) {
		const formData = new FormData()
		formData.append('image', photos)
		return instance
			.put<ResponseType<ResponsePhotoDataType>>(`profile/photo`, formData, {
				headers: {
					'Content-Type': 'multipart/form-data'
				}
			})
			.then(response => response.data)
	},
	saveProfile(profile: ProfileType) {
		return instance.put<ResponseType>(`profile`, profile).then(response => response.data)
	}
}
