import React from 'react'
import m from './profile.module.css'
import MyPostsContainer from './MyPosts/MyPostsContainer'
import ProfileInfo from './MyPosts/profileInfo/ProfileInfo'


const Profile = (props) => {
    const { profile, status, updateStatus, photos, isOwner, savePhoto, saveProfile, errorMessage } = props

    // TODO разобраться с переходом на собственный профиль 

    return (
        <div className={m.profile}>
            <div className={m.container}>
                <ProfileInfo profile={profile} status={status} updateStatus={updateStatus}
                    photos={photos} isOwner={isOwner} savePhoto={savePhoto}
                    saveProfile={saveProfile}
                />
                <MyPostsContainer />
            </div>
        </div>
    )
}

export default Profile