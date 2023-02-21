import React from "react";
import { NavLink } from "react-router-dom";
import m from './../dialogs.module.css'

const DialogItem = (props) => {

    return (
        <div className={m.item}>
            <img className={m.dialogsAva} src={props.ava} alt="no img" />
            <NavLink className={m.dialogsName} to={'/dialogs/' + props.id}>{props.name}</NavLink>
        </div >
    )
}

export default DialogItem;