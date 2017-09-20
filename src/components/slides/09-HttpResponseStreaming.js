import React from 'react';
import Slide from '../Slide';
import asSlide from '../asSlide';
import Fade from '../Fade';
import Highlight from '../Highlight';
import * as styles from './slides.scss';

import full from '!raw-loader!./Zombo-com/full.html';

export default asSlide(Contents, 2);

function Contents({ subIndex }) {
	return (
		<Slide theme="dark">
			<h3 className={styles.superheader}>Let's talk about</h3>
			<h1><strong>HTTP response streaming</strong></h1>
			<Fade n={1} subIndex={subIndex}>
				<Highlight language="html" theme="dark">{full}</Highlight>
			</Fade>
		</Slide>
	)
}
