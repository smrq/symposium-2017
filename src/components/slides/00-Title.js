import React from 'react';
import Slide from '../Slide';
import asSlide from '../asSlide';

export default asSlide(Contents);

function Contents() {
	return (
		<Slide theme="dark">
			<h1 style={{ marginTop: '3em' }}>
				Diving Deeper Into The Stack
			</h1>
			<p>
				<strong>Debugging war stories</strong> and <em>optimizing perceived load times</em>
			</p>
			<h2 style={{ marginTop: '3em' }}>Greg Smith</h2>
		</Slide>
	);
}

