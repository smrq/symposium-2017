import React from 'react';
import cx from 'classnames';
import Slide from '../Slide';
import asSlide from '../asSlide';
import Highlight from '../Highlight';
import * as styles from './slides.scss';

import full2 from '!raw-loader!./Zombo-com/full2.html';

export default asSlide(Contents, 4);

function Contents({ ix, subIndex }) {
	return (
		<Slide theme="dark" className={styles.headerless}>
			<div className={styles.split}>
				<div className={styles.splitCodeHighlight}>
					<Highlight language="html" theme="dark">{full2}</Highlight>
				</div>
				<div className={styles.splitCodeAnnotate}>
					<div className={cx(ix(1) && styles.highlight1)}><span>Time to first paint</span>{'\n\n\n\n\n\n\n\n\n'}</div>
					<div className={cx(ix(2) && styles.highlight2)}><span>Time to full screen<br/>Time to first meaningful paint</span>{'\n\n\n\n\n'}</div>
					<div className={cx(ix(3) && styles.highlight3)}><span>Page load time</span>{'\n\n\n\n'}</div>
				</div>
			</div>
		</Slide>
	)
}
