import React from 'react';

export const Details = ({view, data}) => {
	const detailClass = view ? "details slideOut" : "details slideIn";
	
	return(
		<div className={detailClass}>
			<div className="border">
				<img src={data.image} alt={data.label}/>
				<br/>
				<a href={data.url} target="_blank">Go to recipe</a>
			</div>
		</div>		
	);
}