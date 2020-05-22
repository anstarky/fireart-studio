import React from 'react';
import PropTypes from 'prop-types';

import SidebarLogo from './SidebarLogo/';
import SidebarMobile from './SidebarMobile/';
import SidebarList from './SidebarList/';
import SidebarBottom from './SidebarBottom/';

import style from './Sidebar.module.css';

import menu from '../../services/menu';

function Sidebar({ handleClick, isOpen }) {
	return (
		<section className={style.sidebar}>
			<div className={style.sidebar__top}>
				<SidebarLogo />
				<SidebarMobile handleClick={handleClick} isOpen={isOpen} />
				<SidebarList menu={menu} isOpen={isOpen} />
			</div>

			<SidebarBottom />
		</section>
	);
}

Sidebar.propTypes = {
	menu: PropTypes.arrayOf(PropTypes.object),
	handleClick: PropTypes.func,
};

export default Sidebar;
