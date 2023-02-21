import m from './users.module.css'
import { NavLink } from 'react-router-dom'
import noPhoto from '../../../images/noUser.png'
import { UsersType } from '../../../types/types'
import { FC } from 'react'

type PropsType = {
	users: UsersType[]
	followingInProgress: number[]
	pageSize: number
	currentPage: number
	totalUsersCount: number

	onPageClick: (page: number) => void
	follow: (id: number) => void
	unfollow: (id: number) => void
}

const Users: FC<PropsType> = props => {
	let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
	let pages = []

	for (let i = 1; i <= pagesCount; i++) {
		pages.push(i)
	}

	let curP = props.currentPage
	let curPF = curP - 5 < 0 ? 0 : curP - 5
	let curPL = curP + 5
	let slicedPages = pages.slice(curPF, curPL)

	return (
		<>
			<div className={m.pageNumbers}>
				{slicedPages.map(page => {
					return (
						<span className={`${props.currentPage === page && m.selectedPage} ${m.pagesClick}`} onClick={() => props.onPageClick(page)}>
							{page}
						</span>
					)
				})}
			</div>
			<div className={m.usersMarginTop}>
				{props.users.map(user => {
					return (
						<div key={user.id} className={m.flexContent}>
							<div className={m.avaFollowed}>
								<NavLink to={'./../profile/' + user.id}>
									{!user.photos.small || !user.photos.large ? (
										<img className={m.image} src={noPhoto} alt='' />
									) : (
										<img className={m.image} src={user.photos.small != null ? user.photos.small : user.photos.large} alt='' />
									)}
								</NavLink>
								{user.followed ? (
									<button
										className={m.unfollow}
										disabled={props.followingInProgress.some(id => id === user.id)}
										onClick={() => {
											props.unfollow(user.id)
										}}>
										Unfollow
									</button>
								) : (
									<button
										className={m.follow}
										disabled={props.followingInProgress.some(id => id === user.id)}
										onClick={() => {
											props.follow(user.id)
										}}>
										Follow
									</button>
								)}
							</div>
							<div className={m.info}>
								<div className={m.nameAndStatus}>
									<p>{user.name}</p>
									<div className={m.position}>{user.status}</div>
								</div>
								<div className={m.location}>
									<p>user.location.country,</p>
									<p>user.location.city</p>
								</div>
							</div>
						</div>
					)
				})}
			</div>
		</>
	)
}

export default Users
