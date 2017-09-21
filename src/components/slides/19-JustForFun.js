import React from 'react';
import Slide from '../Slide';
import asSlide from '../asSlide';
import Fragment from '../Fragment';
import Fade from '../Fade';
import * as styles from './slides.scss';

export default asSlide(Contents, 2);

function Contents({ ix, subIndex }) {
	return (
		<Slide theme="light">
			<h1>Just for fun...</h1>
			<Fade n={1} subIndex={subIndex}>
				<h3><a href="/demo" target="_blank">A live demo</a></h3>
			</Fade>
		</Slide>
	)
}