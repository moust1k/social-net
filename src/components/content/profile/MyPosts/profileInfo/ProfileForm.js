import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import m from './profileInfo.module.css'


const ProfileForm = ({ setEditMode, saveProfile, profile }) => {

    const regUrl = /^(?:(?:https?|ftp):\/\/)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/\S*)?$/;
    return (
        <>
            <div>
                <h1>Edit profile...</h1>
                <Formik
                    initialValues={{
                        fullName: profile.fullName,
                        lookingForAJob: profile.lookingForAJob,
                        aboutMe: profile.aboutMe,
                        lookingForAJobDescription: profile.lookingForAJobDescription,
                        contacts: {
                            facebook: profile.contacts.facebook,
                            website: profile.contacts.website,
                            vk: profile.contacts.vk,
                            twitter: profile.contacts.twitter,
                            instagram: profile.contacts.instagram,
                            youtube: profile.contacts.youtube,
                            github: profile.contacts.github,
                            mainLink: profile.contacts.mainLink,
                        }
                    }}
                    onSubmit={(values) => {
                        saveProfile(values)
                        setEditMode(false)
                    }}>

                    {() => (
                        <Form className={m.editFormWrapper}>
                            <Field className={m.editFormInput} type={'text'} name={'fullName'} placeholder={'Full Name...'} />
                            <Field className={m.editFormInput} type={'text'} name={'aboutMe'} placeholder={'About me...'} />
                            <div className={m.flexForCheck}>
                                <div>Looking for a job:</div>
                                <div><Field type="checkbox" name="lookingForAJob" /></div>
                            </div>
                            <Field className={m.editFormInput} type={'text'} name={'lookingForAJobDescription'} placeholder={'My professional skills...'} />
                            {Object.keys(profile.contacts).map(key => {
                                return <div key={key}>
                                    <Field className={m.editFormInput} type={'text'} name={`contacts.` + key} placeholder={key} />
                                </div>
                            })}
                            <button type={'submit'}>Save</button>
                        </Form>
                    )}
                </Formik>
            </div>
        </>

    )
}

export default ProfileForm