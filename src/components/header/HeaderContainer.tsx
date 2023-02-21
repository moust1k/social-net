import React, {FC} from 'react'
import { connect } from 'react-redux';
import Header from './Header';
import { getUserData, logout } from '../../redux/authReducer'

interface HeaderContainerProps {
getUserData: () => void
isAuth: boolean
login: string
ava?: string
logout: () => void
}

let HeaderContainer: FC<HeaderContainerProps> = ({ getUserData, isAuth, login, logout, ava }) => {

    React.useEffect(() => {
        getUserData();
    }, [getUserData])

    return (<Header isAuth={isAuth} login={login} logout={logout}/>)
}


let mapStateToProps = (state:any) => {
    return {
        isAuth: state.authReducer.isAuth,
        login: state.authReducer.login,
        ava: state.profileReducer.profile,
    }
}

export default connect(mapStateToProps, { getUserData, logout })(HeaderContainer)