import React from 'react';
import clsx from 'clsx';

import SidebarItem from '../SidebarItem/';
import style from './SidebarList.module.css';

function SidebarList({ menu, isOpen }) {
	return (
		<ul
			className={clsx(
				style.sidebar__menu,
				isOpen ? style.open__menu : '',
			)}>
			{menu.map((item) => {
				return <SidebarItem menu={item} key={item.id} />;
			})}
		</ul>
	);
}

export default SidebarList;
