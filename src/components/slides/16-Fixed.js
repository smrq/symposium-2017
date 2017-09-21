import React from 'react';
import cx from 'classnames';
import Slide from '../Slide';
import asSlide from '../asSlide';
import Highlight from '../Highlight';
import Fade from '../Fade';
import * as styles from './slides.scss';

import layout from '!raw-loader!./Layout-cshtml/fixed.cshtml';

export default asSlide(Contents, 2);

function Contents({ ix, subIndex }) {
	return (
		<Slide theme="light">
			<h3>Layout.cshtml, <em>fixed</em></h3>
			<Fade n={1} subIndex={subIndex}>
				<Highlight language="html" theme="light">
					{layout}
				</Highlight>
			</Fade>
		</Slide>
	)
}