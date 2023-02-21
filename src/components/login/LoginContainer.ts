import { connect } from 'react-redux'
import Login from './Login'
import { login } from '../../redux/authReducer'
import { AppStateType } from '../../redux/store'

let mapStateToProps = (state: AppStateType) => {
	return {
		isAuth: state.authReducer.isAuth
	}
}

const LoginContainer = connect(mapStateToProps, { login })(Login)

export default LoginContainer
