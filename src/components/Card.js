import React from 'react';

const Card =({name,email,id,username}) => {
	return (
 		<div className='tc bg-light-green dib br3 pa3 ma3 grow bw3 shadow-2'>
 		 	<img alt='robots' src ={`https://robohash.org/${id}`}/>
 		 	<div>
 		 		<h2>{name}</h2>
 		 		<p>{email}</p>
 		 		<p>{username}</p>
 		 	</div>
 		 </div>	

		);
}
export default Card;