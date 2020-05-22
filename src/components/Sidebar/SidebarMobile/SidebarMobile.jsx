import React from 'react';
import clsx from 'clsx';
// import { Link } from 'react-router-dom';

import style from './SidebarMobile.module.css';

function SidebarMobile({ handleClick, isOpen }) {
	return (
		<div
			className={clsx(style.mobile__button, isOpen ? style.open : '')}
			onClick={handleClick}>
			<span></span>
		</div>
	);
}

export default SidebarMobile;
