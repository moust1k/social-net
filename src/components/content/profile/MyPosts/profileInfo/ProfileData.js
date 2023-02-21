import React from 'react'
import Contact from './Contact'
import m from './profileInfo.module.css'
import { MdModeEditOutline } from 'react-icons/md'

const ProfileData = ({ profile, isOwner, setEditMode }) => {

    return (
        <>
            <div>

                {isOwner && <button className={m.editProfileButton} onClick={() => setEditMode(true)}><MdModeEditOutline />Edit profile</button>}
            </div>
            <div><b>Full Name:</b> {profile.fullName}</div>
            <div><b>Обо мне: </b>{profile.aboutMe}</div>
            <div><b>Looking for a job:</b> {profile.lookingForAJob === true ? 'yes' : 'no'}</div>
            {profile.lookingForAJob && <div><b>My professional skills:</b> {profile.lookingForAJobDescription}</div>}
            <div><b>Contacts:</b> {Object.keys(profile.contacts).map(key => {
                return <div key={key}><Contact contactName={key} contactValue={profile.contacts[key]} /></div>
            })}</div>
        </>
    )
}

export default ProfileData