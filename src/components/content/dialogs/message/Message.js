import React from 'react'
import m from './../dialogs.module.css'

const Message = (props) => {

    return (
        <div className={m.message}>
            <img className={m.dialogMessageAva} src="https://assets.stickpng.com/thumbs/5ecec6ef73e4440004f09e75.png" alt="" />
            <div className={m.dialogMessagesStyle}>{props.message}</div>
        </div>
    )
}

export default Message