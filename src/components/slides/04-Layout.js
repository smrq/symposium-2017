import React from 'react';
import cx from 'classnames';
import Slide from '../Slide';
import Highlight from '../Highlight';
import asSlide from '../asSlide';
import * as styles from './slides.scss';

import src2 from '!raw-loader!./Layout-cshtml/2.cshtml';

export default asSlide(Contents, 3);

function Contents({ ix }) {
	return (
		<Slide theme="dark">
			<h3>Layout.cshtml</h3>
			<Highlight language="html" theme="dark">
				{src2}
			</Highlight>
			<div className={cx(
				styles.layoutSemi,
				ix(1) && styles.flash,
				ix(2) && styles.remove
			)}>;</div>
		</Slide>
	)
}