import React from 'react';

import style from './SidebarLogo.module.css';
import { Link } from 'react-router-dom';

import routes from '../../../routes';
import logo from '../../../assets/images/logo.svg';

function SidebarLogo() {
	return (
		<Link to={routes.USERS} className={style.logo__link}>
			<img src={logo} alt='Creabl logo' className={style.sidebar__logo} />
		</Link>
	);
}

export default SidebarLogo;
