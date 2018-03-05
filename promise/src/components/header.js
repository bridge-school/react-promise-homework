import React from 'react';
import logo from './salad.svg';
import {Info} from './info';

export const Header = ({children, showInfo, infoView, hideInfo}) => {

	return(
		<header className="header">
			<img src={logo} alt="logo, salad"/>
			<h1>{children}</h1>
			<a className="infoIcon" onClick={showInfo}>info</a>
			<Info 
				infoView={infoView}
				hideInfo={hideInfo}/>
		</header>
	)
}