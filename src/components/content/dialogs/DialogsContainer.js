import React from 'react'
import DialogItem from './dialogItem/DialogsItem'
import Message from './message/Message'
import Dialogs from './Dialogs'
import { dialogsActions } from '../../../redux/dialogsReducer'
import { connect } from 'react-redux'
import { withAuthNavigate } from '../../../hoc/withAuthNavigate'
import { compose } from 'redux'

let mapStateToProps = state => {
	let dialogsItem = state.dialogsReducer.dialogs.map(dialog => <DialogItem key={dialog.id} name={dialog.name} id={dialog.id} ava={dialog.ava} />)
	let messagesItem = state.dialogsReducer.messages.map(msg => <Message key={msg.id} message={msg.message} id={msg.id} />)

	return {
		dialogsItem: dialogsItem,
		messagesItem: messagesItem,
		value: state.dialogsReducer.newMessageText
	}
}
let mapDispatchToProps = dispatch => {
	return {
		addMessage: message => {
			dispatch(dialogsActions.addMessageActionCreator(message))
		}
	}
}

export default compose(connect(mapStateToProps, mapDispatchToProps), withAuthNavigate)(Dialogs)
