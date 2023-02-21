import React from 'react'
import m from './profileInfo.module.css'
import Preloader from '../../../../common/preloader/Preloader'
import ProfileStatus from '../../profileStatus/ProfileStatus'
import noUser from '../../../../../images/noUser.png'
import ProfileData from './ProfileData'
import ProfileForm from './ProfileForm'

const ProfileInfo = props => {
	const { profile, status, updateStatus, savePhoto, isOwner, saveProfile } = props
	const [editMode, setEditMode] = React.useState(false)
	const [editPhoto, setEditPhoto] = React.useState(false)

	if (!profile) {
		return <Preloader />
	}

	let onProfilePhotoSelected = e => {
		if (e.target.files.length) {
			savePhoto(e.target.files[0])
		}
	}

	return (
		<>
			<div className={m.infoWrapper}>
				<div className={m.avaDescription}>
					<div>
						<div>
							<img
								onClick={() => {
									setEditPhoto(editPhoto => !editPhoto)
								}}
								className={m.ava}
								src={profile.photos.large || noUser}
								alt='no imagee'
							/>
						</div>
					</div>
					<div className={m.wrapperForDescription}>
						<div className={m.status}>
							<ProfileStatus status={status} updateStatus={updateStatus} />
						</div>
						{isOwner && editMode ? (
							<ProfileForm setEditMode={setEditMode} saveProfile={saveProfile} profile={profile} />
						) : (
							<ProfileData profile={profile} isOwner={isOwner} setEditMode={setEditMode} />
						)}
					</div>
				</div>
				<div className={m.chooseFile}>{isOwner && editPhoto && <input type={'file'} onChange={onProfilePhotoSelected} />}</div>
			</div>
		</>
	)
}

export default ProfileInfo
