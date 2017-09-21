import React from 'react';
import cx from 'classnames';
import Slide from '../Slide';
import asSlide from '../asSlide';
import Highlight from '../Highlight';
import Fade from '../Fade';
import * as styles from './slides.scss';

import setAppElement from '!raw-loader!./snips/setAppElement.js';
import appElement from '!raw-loader!./snips/appElement.js';

export default asSlide(Contents, 8);

function Contents({ ix, subIndex }) {
	return (
		<Slide theme="dark">
			<h1>Understanding the error</h1>
			<Fade n={1} subIndex={subIndex}>
				<p>
					Uncaught Error: react-modal: You must set an element with `Modal.setAppElement(el)` to make this accessible
				</p>
			</Fade>
			<Fade n={2} subIndex={subIndex}>
				<div className={styles.split}>
					<div className={styles.splitCodeHighlight}>
						<Highlight language="js" theme="dark">{setAppElement}</Highlight>
					</div>
					<div className={styles.splitCodeAnnotate}>
						{'\n       '}
						<span className={cx(ix(3) && styles.highlightOff)}>{'              '}</span>
						{'  '}
						<span className={cx(ix(4) && styles.highlight1)}>{'        '}</span>
					</div>
				</div>
			</Fade>
			<Fade n={5} subIndex={subIndex}>
				<div className={styles.split}>
					<div className={styles.splitCodeHighlight}>
						<Highlight language="js" theme="dark">{appElement}</Highlight>
					</div>
					<div className={styles.splitCodeAnnotate}>
						{'                '}
						<span className={cx(ix(6) && styles.highlightOff)}>{'                                 '}</span>
						{'\n                '}
						<span className={cx(ix(6) && styles.highlightOff)}>{'       '}</span>
					</div>
				</div>
			</Fade>
			<Fade n={7} subIndex={subIndex}>
				<div style={{textAlign:'center'}}>
					<Highlight language="js" theme="dark">document.body === undefined</Highlight>
				</div>
			</Fade>
		</Slide>
	)
}
