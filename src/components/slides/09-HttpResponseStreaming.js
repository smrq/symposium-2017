import React from 'react';
import Slide from '../Slide';
import asSlide from '../asSlide';
import Highlight from '../Highlight';
import * as styles from './slides.scss';

import src7 from '!raw-loader!./09-src-7.html';

export default asSlide(Contents, { subCount: 2 });

function Contents({ ix }) {
	return (
		<Slide theme="dark">
			<h3 className={styles.superheader}>Let's talk about</h3>
			<h1><strong>HTTP response streaming</strong></h1>
			{ix(1) && <Highlight language="html" theme="dark">
				{src7}
			</Highlight>}
		</Slide>
	)
}
