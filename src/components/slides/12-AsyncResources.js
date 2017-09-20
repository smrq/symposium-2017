import React from 'react';
import Slide from '../Slide';
import asSlide from '../asSlide';
import Highlight from '../Highlight';
import * as styles from './slides.scss';

import linkTag from '!raw-loader!./snips/linkTag.html';
import scriptTag from '!raw-loader!./snips/scriptTag.html';

export default asSlide(Contents, 3);

function Contents({ ix }) {
	return (
		<Slide theme="light">
			<h1>Asynchronous resources</h1>
			{ix(1) && <Highlight language="html" theme="light">{linkTag}</Highlight>}
			{ix(2) && <Highlight language="html" theme="light">{scriptTag}</Highlight>}
		</Slide>
	)
}
