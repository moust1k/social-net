import { connect } from 'react-redux'
import { profileActions } from '../../../../redux/profileReducer'
import MyPosts from './MyPosts'

const { addPostActionCreator, addLikeAC, dislikeAC } = profileActions

let mapStateToProps = state => {
	return {
		posts: state.profileReducer.posts,
		userPhoto: state.profileReducer.profile
	}
}

const MyPostsContainer = connect(mapStateToProps, { addPostActionCreator, addLikeAC, dislikeAC })(MyPosts)

export default MyPostsContainer
