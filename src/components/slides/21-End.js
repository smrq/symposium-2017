import React from 'react';
import Slide from '../Slide';
import asSlide from '../asSlide';
import Fade from '../Fade';
import * as styles from './slides.scss';

export default asSlide(Contents, 2);

function Contents({ subIndex }) {
	return (
		<Slide theme="light">
			<h1>Questions? <Fade n={1} subIndex={subIndex} style={{ display: 'inline' }}><strong>Stories?</strong></Fade></h1>
		</Slide>
	)
}