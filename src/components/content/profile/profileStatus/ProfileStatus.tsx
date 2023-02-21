import React, { FC } from 'react'
import { useState } from 'react'
import m from './profileStatus.module.css'
import { MdOutlineDoneOutline } from 'react-icons/md'
import { useEffect } from 'react'

type PropsType = {
	status: string
	updateStatus: (status: string) => void
}

const ProfileStatus: FC<PropsType> = ({ status, updateStatus }) => {
	const [isStatusEdit, setIsStatusEdit] = useState<boolean>(false)
	const [localStatus, setLocalStatus] = useState<string>(status)

	useEffect(() => {
		setLocalStatus(status)
	}, [status, setLocalStatus])

	const activateEditMode = () => {
		setIsStatusEdit(true)
	}

	const deactivateEditMode = () => {
		setIsStatusEdit(false)
		updateStatus(localStatus)
	}

	const changeTextInput = (event: React.ChangeEvent<HTMLInputElement>) => {
		let inputValue = event.currentTarget.value
		setLocalStatus(inputValue)
	}

	const onKeyPressed = (event: any) => {
		if (event.keyCode === 13) {
			deactivateEditMode()
		}
	}

	return (
		<>
			{isStatusEdit ? (
				<div className={m.positionDiv}>
					<div>
						<input autoFocus={true} className={m.input} onKeyDown={onKeyPressed} value={localStatus} onChange={changeTextInput} type='text' />
					</div>
					<div>
						<button className={m.button} onClick={deactivateEditMode}>
							<MdOutlineDoneOutline />
						</button>
					</div>
				</div>
			) : (
				<div>
					<span className={m.outputSpan} onDoubleClick={activateEditMode}>
						<b>Status: </b>
						{status || 'Нет статуса'}
					</span>
				</div>
			)}
		</>
	)
}

export default ProfileStatus
