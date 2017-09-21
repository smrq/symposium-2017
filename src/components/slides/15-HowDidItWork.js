import React from 'react';
import cx from 'classnames';
import Slide from '../Slide';
import asSlide from '../asSlide';
import Highlight from '../Highlight';
import Fade from '../Fade';
import * as styles from './slides.scss';

import layout from '!raw-loader!./Layout-cshtml/head.cshtml';
import layout2 from '!raw-loader!./Layout-cshtml/head2.cshtml';

export default asSlide(Contents, 4);

function Contents({ ix, subIndex }) {
	return (
		<Slide theme="dark">
			<h1>How did this <em>ever</em> work?</h1>
			<Fade n={1} subIndex={subIndex}>
				<div style={{position: 'relative'}}>
					<Highlight language="html" theme="dark">
						{ix(2) ? layout2 : layout}
					</Highlight>
					<div className={cx(styles.layoutSemi, styles.flash, ix(2) && styles.inBody)}>;</div>
				</div>
			</Fade>
			<Fade n={3} subIndex={subIndex}>
				<div style={{ position: 'absolute', bottom: '1.5em', right: '3.5em'}}>
					<Highlight language="js" theme="dark">{'document.body => <body>'}</Highlight>
				</div>
			</Fade>
		</Slide>
	)
}
