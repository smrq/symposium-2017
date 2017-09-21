import React from 'react';
import Slide from '../Slide';
import asSlide from '../asSlide';
import Highlight from '../Highlight';
import Fade from '../Fade';
import * as styles from './slides.scss';

import linkTag from '!raw-loader!./snips/linkTag.html';
import scriptTag from '!raw-loader!./snips/scriptTag.html';

export default asSlide(Contents, 3);

function Contents({ ix, subIndex }) {
	return (
		<Slide theme="light">
			<h1>Asynchronous resources</h1>
			<Fade n={1} subIndex={subIndex}>
				<Highlight language="html" theme="light">{linkTag}</Highlight>
			</Fade>
			<Fade n={2} subIndex={subIndex}>
				<Highlight language="html" theme="light">{scriptTag}</Highlight>
			</Fade>
		</Slide>
	)
}
