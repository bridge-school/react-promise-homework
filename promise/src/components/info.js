import React from 'react';

export const Info = ({infoView, hideInfo}) => {
	if(infoView) {return(
			<div className="infoClass">
				<span onClick={hideInfo}>x</span>
				<p>
					This is my first React app, based on the <a href="https://developer.edamam.com/" target="_blank" rel="noopener noreferrer">Edamam API</a>. I made it before learning Redux, so events and API calls are handled by local states. Credits for the icons go to <a href="https://www.flaticon.com/free-icon/salad_135637" target="_blank" rel="noopener noreferrer">Smashicons</a>, <a href="https://www.flaticon.com/free-icon/orange_201709" target="_blank" rel="noopener noreferrer">Prosymbols</a>, and <a href="https://www.flaticon.com/packs/multimedia-collection" target="_blank" rel="noopener noreferrer">Gregor Cresnar</a>. <br/>Thanks for visiting! <br/><a href="https://martakule.github.io/" target="_blank" rel="noopener noreferrer">Marta Kule</a>
				</p>
			</div>		
	)} else {return null}
}