import React, { FC } from 'react'
import { connect } from 'react-redux'
import { unfollow, follow, getUsers } from '../../../redux/usersReducer'
import { usersActions } from '../../../redux/usersReducer'
import Users from './Users'
import Preloader from '../../common/preloader/Preloader'
import { withAuthNavigate } from '../../../hoc/withAuthNavigate'
import { compose } from 'redux'
import { UsersType } from '../../../types/types'
import { AppStateType } from '../../../redux/store'

type MapStatePropsType = {
	pageSize: number
	currentPage: number
	totalUsersCount: number
	isFetching: boolean
	users: UsersType[]
	followingInProgress: number[]
}
type MapDispatchPropsType = {
	getUsers: (pageSize: number, pageCurrent: number) => void
	setCurrentPage: (page: number) => void
	follow: (id: number) => void
	unfollow: (id: number) => void
}
type MapOwnPropsType = {}
type PropsType = MapStatePropsType & MapDispatchPropsType & MapOwnPropsType
const { setCurrentPage } = usersActions

const UsersContainer: FC<PropsType> = props => {
	React.useEffect(() => {
		props.getUsers(props.pageSize, props.currentPage)
	}, [])

	let onPageClick = (page: number) => {
		props.getUsers(props.pageSize, page)
		usersActions.setCurrentPage(page)
	}

	return (
		<>
			{props.isFetching ? (
				<Preloader />
			) : (
				<Users
					unfollow={props.unfollow}
					totalUsersCount={props.totalUsersCount}
					users={props.users}
					currentPage={props.currentPage}
					pageSize={props.pageSize}
					follow={props.follow}
					onPageClick={onPageClick}
					followingInProgress={props.followingInProgress}
				/>
			)}
		</>
	)
}
// ClassComponent
// class UsersContainer1 extends React.Component<PropsType> {

//     componentDidMount() {
//         this.props.getUsers(this.props.pageSize, this.props.currentPage)
//     }

//     onPageClick = (page: number) => {
//         this.props.getUsers(this.props.pageSize, page)
//         this.props.setCurrentPage(page)
//     }

//     render() {
//         return (
//             <>
//                 {this.props.isFetching
//                     ? <Preloader />
//                     : <Users
//                         unfollow={this.props.unfollow}
//                         totalUsersCount={this.props.totalUsersCount}
//                         users={this.props.users}
//                         currentPage={this.props.currentPage}
//                         pageSize={this.props.pageSize}
//                         follow={this.props.follow}
//                         onPageClick={this.onPageClick}
//                         followingInProgress={this.props.followingInProgress}
//                     />
//                 }
//             </>
//         )
//     }
// }

let mapStateToProps = (state: AppStateType): MapStatePropsType => {
	return {
		users: state.usersReducer.users,
		totalUsersCount: state.usersReducer.totalUsersCount,
		pageSize: state.usersReducer.pageSize,
		currentPage: state.usersReducer.currentPage,
		isFetching: state.usersReducer.isFetching,
		followingInProgress: state.usersReducer.followingInProgress
	}
}

export default compose(
	withAuthNavigate,
	connect<MapStatePropsType, MapDispatchPropsType, MapOwnPropsType, AppStateType>(mapStateToProps, { unfollow, follow, setCurrentPage, getUsers })
)(UsersContainer)
