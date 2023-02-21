import { FC } from 'react'
import m from './nav.module.css'
import { NavLink } from 'react-router-dom'

const Nav: FC = () => {
	return (
		<div className={m.nav}>
			<div>
				<NavLink to='/profile' className={({ isActive }) => (isActive ? m.active : undefined)}>
					Profile
				</NavLink>
			</div>
			<div>
				<NavLink to='/dialogs' className={({ isActive }) => (isActive ? m.active : undefined)}>
					Messages
				</NavLink>
			</div>
			<div>
				<NavLink to='/news' className={({ isActive }) => (isActive ? m.active : undefined)}>
					News
				</NavLink>
			</div>
			<div className={m.mmb}>
				<NavLink to='/music' className={({ isActive }) => (isActive ? m.active : undefined)}>
					Music
				</NavLink>
			</div>
			<div>
				<NavLink to='/users' className={({ isActive }) => (isActive ? m.active : undefined)}>
					Users
				</NavLink>
			</div>
			<div>
				<NavLink to='/settings' className={({ isActive }) => (isActive ? m.active : undefined)}>
					Settings
				</NavLink>
			</div>
		</div>
	)
}

export default Nav
