import React, { FC } from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import { loginFormSchema } from '../validators/FormSchema'
import m from './login.module.css'
import { Navigate } from 'react-router-dom'

type PropsType = {
	login: (email: string, password: string, rememberMe: boolean) => void
	isAuth: boolean | null
}
type InitialValuesType = {
	email: string
	password: string
	rememberMe: boolean
}
type ErrorsType = {
	email?: string
}

const Login: FC<PropsType> = ({ login, isAuth }) => {
	//TODO доделать вывод ошибки сообщения

	if (isAuth) {
		return <Navigate to={'/profile'} />
	}

	const initialValues: InitialValuesType = { email: '', password: '', rememberMe: false }

	return (
		<>
			<div className={m.formWrapper}>
				<h1>Login</h1>
				<Formik
					initialValues={initialValues}
					validate={values => {
						const errors: ErrorsType = {}
						if (!values.email) {
							errors.email = 'Введите емейл'
						} else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
							errors.email = 'Invalid email address'
						}
						return errors
					}}
					onSubmit={values => {
						login(values.email, values.password, values.rememberMe)
					}}
					validationSchema={loginFormSchema}>
					{() => (
						<Form>
							<div>
								<Field className={m.passwordAndMail} type={'text'} name={'email'} placeholder={'e-mail'} />
							</div>
							<ErrorMessage name='email' component='div' />
							<div>
								<Field className={m.passwordAndMail} type={'password'} name={'password'} placeholder={'password'} />
							</div>
							<ErrorMessage name='password' component='div' />

							<div className={m.wrapperCheckBox}>
								<Field className={m.checkBox} type={'checkbox'} name={'rememberMe'} />
								<label className={m.rememberMe} htmlFor={'rememberMe'}>
									{' '}
									remember me{' '}
								</label>
							</div>
							<button className={m.button} type={'submit'}>
								Log in
							</button>
						</Form>
					)}
				</Formik>
			</div>
		</>
	)
}

export default Login
