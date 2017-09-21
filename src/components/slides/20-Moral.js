import React from 'react';
import cx from 'classnames';
import Slide from '../Slide';
import Highlight from '../Highlight';
import asSlide from '../asSlide';
import * as styles from './slides.scss';

export default asSlide(Contents);

function Contents({ ix }) {
	return (
		<Slide theme="dark">
			<h1>The moral of this story</h1>
			<cite className={styles.cite}>
				<a href="https://www.hanselman.com/blog/PleaseLearnToThinkAboutAbstractions.aspx" target="_blank">https://www.hanselman.com/blog/PleaseLearnToThinkAboutAbstractions.aspx</a>
			</cite>
		</Slide>
	)
}