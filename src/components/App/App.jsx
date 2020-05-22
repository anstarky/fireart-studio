import React, { Component } from 'react';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';

import style from './App.module.css';

import Sidebar from '../Sidebar';
import Main from '../Main';

import routes from '../../routes';

class App extends Component {
	state = { isOpen: false };

	handleClick = () => {
		this.setState((state) => ({ isOpen: !state.isOpen }));
	};

	render() {
		const { isOpen } = this.state;

		return (
			<BrowserRouter>
				<div className={style.wrapper}>
					<Sidebar handleClick={this.handleClick} isOpen={isOpen} />
					<Switch>
						{/* <Main isOpen={isOpen} /> */}
						<Route
							path={routes.USERS}
							render={() => <Main isOpen={isOpen} />}
						/>
						<Route
							path={routes.SESSIONS}
							render={() => <Main isOpen={isOpen} />}
						/>
						<Route
							path={routes.ANALYTICS}
							render={() => <Main isOpen={isOpen} />}
						/>
						<Route
							path={routes.MESSAGES}
							render={() => <Main isOpen={isOpen} />}
						/>
						<Route
							path={routes.CHATS}
							render={() => <Main isOpen={isOpen} />}
						/>
						<Route
							path={routes.HELP}
							render={() => <Main isOpen={isOpen} />}
						/>
						<Route
							path={routes.SETTINGS}
							render={() => <Main isOpen={isOpen} />}
						/>
						<Redirect to={routes.USERS} />
					</Switch>
				</div>
			</BrowserRouter>
		);
	}
}

export default App;
