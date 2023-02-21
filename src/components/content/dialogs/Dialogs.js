import React from 'react'
import m from './dialogs.module.css'
import InputMessage from './inputMessage/InputMessage'
import { Navigate } from 'react-router-dom'

const Dialogs = (props) => {

    if (!props.isAuth) return <Navigate to='/login' />

    return (
        <>
            <div className={m.dialogs}>
                <div className={m.dialogItems}>
                    {props.dialogsItem}
                </div>
                <div className={m.messages}>
                    {props.messagesItem}
                </div>
                <InputMessage value={props.value} addMessage={props.addMessage} />
            </div>
        </>
    )
}

export default Dialogs