import React, { FC } from 'react';
import m from './header.module.css'
import noUser from '../../images/noUser.png'
import { NavLink } from 'react-router-dom';

const logo = 'https://frontlinebusiness.com.ph/wp-content/uploads/2022/05/code-solid.png';

interface HeaderProps  {
    isAuth: boolean
    login: string
    ava?: string
    logout: () => void
}

const Header: FC<HeaderProps> = ({ isAuth, login, logout }) => {
    return (
        <>
            <header className={m.header}>
                <NavLink className={m.logo} to="/profile"><img className={m.logo} src={logo} alt='no img' /></NavLink>
                <p className={m.name}>Social Network For Developers</p>
                {isAuth
                    ? <div className={m.authFlex}>
                        <div>
                            <img className={m.avaHeader} src={noUser} alt="" />
                        </div>
                        <div>
                            {login} <NavLink to='/login'><button onClick={logout}>Log out</button></NavLink>
                        </div>
                    </div>
                    : <NavLink to='/login'>Login</NavLink>}
            </header>
        </>
    )
}

export default Header