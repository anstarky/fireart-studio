import React from 'react';
import clsx from 'clsx';

import style from './Main.module.css';
import mainImage from '../../assets/images/image.svg';

function Main({ isOpen }) {
	return (
		<section className={clsx(style.main, isOpen ? style.open__menu : '')}>
			<div className={style.main__wrap}>
				<div className={style.content__wrap}>
					<img
						className={style.main__img}
						src={mainImage}
						alt='Main_image'
					/>
					<h1 className={clsx(style.main__text, style.title)}>
						We’re working on this page now!
					</h1>
					<p className={clsx(style.main__text, style.desc)}>
						You will definetely know when it will be ready
					</p>
				</div>
			</div>
		</section>
	);
}

export default Main;
