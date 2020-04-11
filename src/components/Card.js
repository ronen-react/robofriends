import React from 'react'

const Card = (props) => {
//	console.log("uuuu")
//	console.log(props.name)
//    console.log(props.id)

    const {name, email, id} = props
	return (
		<div className='bg-light-green dib br3 ma2 grow bw2 shadow-5'>
			<img alt='robots' src={'https://robohash.org/'+id}/>
			<div>
				<h2>{name}</h2>
				<p>{email}</p>
			</div>

		</div>
	);
}

export default Card