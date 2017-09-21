import React from 'react';
import cx from 'classnames';
import Slide from '../Slide';
import Fade from '../Fade';
import asSlide from '../asSlide';
import * as styles from './slides.scss';

export default asSlide(Contents, 7);

function Contents({ subIndex }) {
	return (
		<Slide theme="dark">
			<h1>Reaping the benefits</h1>
			<Fade n={1} subIndex={subIndex}><p>Minimize CSS size</p></Fade>
			<Fade n={2} subIndex={subIndex}><p>&nbsp;&nbsp;&nbsp;&nbsp;=> faster <em>Time to First Paint</em></p></Fade>
			<Fade n={3} subIndex={subIndex}><p>Relocate scripts to end of body</p></Fade>
			<Fade n={4} subIndex={subIndex}><p>&nbsp;&nbsp;&nbsp;&nbsp;=> faster <em>Time to First Paint</em></p></Fade>
			<Fade n={5} subIndex={subIndex}><p>Server-side rendering</p></Fade>
			<Fade n={6} subIndex={subIndex}><p>&nbsp;&nbsp;&nbsp;&nbsp;=> faster <strong>Time to First Meaningful Paint</strong></p></Fade>
		</Slide>
	)
}