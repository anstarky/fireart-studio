import React from 'react';

import style from './SidebarBottom.module.css';

import userAvatar from '../../../assets/images/user.png';

function SidebarBottom() {
	return (
		<div className={style.sidebar__bottom}>
			<img
				src={userAvatar}
				alt='user_avatar'
				className={style.user__ava}
			/>
			<p className={style.user__name}>Peterson Jacksonmom</p>
		</div>
	);
}

export default SidebarBottom;
