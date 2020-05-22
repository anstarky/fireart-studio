import React from 'react';
import { NavLink } from 'react-router-dom';
import { ReactSVG } from 'react-svg';

import style from './SidebarItem.module.css';

function SidebarItem({ menu }) {
	return (
		<li>
			<NavLink
				exact
				to={menu.path}
				className={style.menu__item}
				activeClassName={style.menu__active}>
				<ReactSVG src={menu.icon} className={style.menu__icon} />
				<p className={style.menu__text}>{menu.title}</p>
				{menu.desc && (
					<span className={style.menu__desc}>{menu.desc}</span>
				)}
			</NavLink>
		</li>
	);
}

export default SidebarItem;
