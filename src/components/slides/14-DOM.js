import React from 'react';
import cx from 'classnames';
import Slide from '../Slide';
import asSlide from '../asSlide';
import Highlight from '../Highlight';
import Fade from '../Fade';
import * as styles from './slides.scss';

import noBodyYet from '!raw-loader!./snips/noBodyYet.html';

export default asSlide(Contents, 7);

function Contents({ ix, subIndex }) {
	return (
		<Slide theme="light">
			<h3 className={styles.superheader}>Let's talk about</h3>
			<h1><strong>the DOM</strong></h1>
			<Fade n={1} subIndex={subIndex}>
				<Highlight language="javascript" theme="light">document.body</Highlight>
			</Fade>
			<Fade n={2} subIndex={subIndex}>
				<Highlight language="javascript" theme="light">{ix(6) ? '  => undefined' : '  => <body>'}</Highlight>
			</Fade>
			<Fade n={3} subIndex={subIndex}>
				<div className={styles.split}>
					<div className={styles.splitCodeHighlight}>
						<Highlight language="html" theme="light">{noBodyYet}</Highlight>
					</div>
					<div className={styles.splitCodeAnnotate}>
						{'\n\n'}
						<div className={cx(ix(4) && styles.highlight3)}>{'\n'}</div>
						{'\n'}
						<div className={cx(ix(5) && styles.highlight1)}>{'\n\n\n'}</div>
					</div>
				</div>
			</Fade>
		</Slide>
	)
}
