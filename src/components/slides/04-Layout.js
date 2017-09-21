import React from 'react';
import cx from 'classnames';
import Slide from '../Slide';
import Highlight from '../Highlight';
import Fade from '../Fade';
import asSlide from '../asSlide';
import * as styles from './slides.scss';

import src2 from '!raw-loader!./Layout-cshtml/2.cshtml';

export default asSlide(Contents, 4);

function Contents({ ix, subIndex }) {
	return (
		<Slide theme="dark">
			<h3>Layout.cshtml</h3>
			<Fade n={1} subIndex={subIndex}>
				<div style={{position: 'relative'}}>
					<Highlight language="html" theme="dark">
						{src2}
					</Highlight>
					<div className={cx(
						styles.layoutSemi,
						ix(2) && styles.flash,
						ix(3) && styles.remove
					)}>;</div>
				</div>
			</Fade>
		</Slide>
	)
}