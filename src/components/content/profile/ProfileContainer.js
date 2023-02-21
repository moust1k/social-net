import { connect } from 'react-redux'
import { getStatus, updateStatus, getUserProfile, savePhoto, saveProfile } from '../../../redux/profileReducer'
import Profile from './Profile'
import { compose } from 'redux'
import { useEffect } from 'react'
import { withRouter } from '../../../hoc/withRouter'


const ProfileContainer = ({ getUserProfile, getStatus, ...props }) => {


    useEffect(() => {
        let userId = props.router.params.userId;
        if (!userId) {
            userId = 26875;
        }
        getUserProfile(userId)
        getStatus(userId);

    }, [getUserProfile, getStatus, props.router.params.userId])


    return (
        <Profile {...props} profile={props.profile} status={props.status}
            updateStatus={props.updateStatus} photos={props.photos} updatePhoto={props.updatePhoto}
            isOwner={!props.router.params.userId} />
    )
}

// class ProfileContainer1 extends React.Component {

//     componentDidMount() {
//         let userId = this.props.router.params.userId;
//         if (userId) {
//             profileAPI.getUser(userId).then(response => {
//                 this.props.getUserProfile(response.data)
//                 this.props.getStatus(userId);
//             })
//         } else {
//             profileAPI.getUser(26875).then(response => {
//                 this.props.getUserProfile(response.data)
//                 this.props.getStatus(26875);
//             })
//         }
//     }

// render() {
//     return (
//         <Profile {...this.props} profile={this.props.profile} status={this.props.status}
//             updateStatus={this.props.updateStatus} photos={this.props.photos} updatePhoto={this.props.updatePhoto} />
//     )
// }
// }

let mapStateToProps = (state) => {
    return {
        profile: state.profileReducer.profile,
        status: state.profileReducer.status,
        photos: state.profileReducer.photos,
        authorizedUserId: state.authReducer.id,
    }
}


export default compose(
    connect(mapStateToProps, { getStatus, updateStatus, getUserProfile, savePhoto, saveProfile }),
    withRouter,
)(ProfileContainer)



