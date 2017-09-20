import React from 'react';
import cx from 'classnames';
import Slide from '../Slide';
import asSlide from '../asSlide';
import Fade from '../Fade';
import Highlight from '../Highlight';
import * as styles from './slides.scss';

import src1 from '!raw-loader!./Zombo-com/1.html';
import src2 from '!raw-loader!./Zombo-com/2.html';
import src3 from '!raw-loader!./Zombo-com/3.html';
import src4 from '!raw-loader!./Zombo-com/4.html';
import src5 from '!raw-loader!./Zombo-com/5.html';
import src6 from '!raw-loader!./Zombo-com/6.html';
import src7 from '!raw-loader!./Zombo-com/7.html';
import src8 from '!raw-loader!./Zombo-com/8.html';

const src = [src1, src2, src3, src4, src5, src6, src7, src8];

export default asSlide(Contents, 8);

function Contents({ ix, subIndex }) {
	return (
		<Slide theme="light" className={styles.headerless}>
			<div className={styles.split}>
				<div className={styles.splitCode}>
					<Highlight language="html" theme="light">{src[subIndex]}</Highlight>
				</div>
				<div className={styles.splitPreview}>
					<div className={styles.window}>
						<div className={cx(ix(5) && styles.zombo)}>
							{ix(6) && <h1>
								<span>Z</span>
								<span>o</span>
								<span>m</span>
								<span>b</span>
								<span>o</span>
								<span>.</span>
								<span>c</span>
								<span>o</span>
								<span>m</span>
							</h1>}
							{ix(7) && <p>The only limit is yourself.</p>}
						</div>
					</div>
				</div>
			</div>
		</Slide>
	)
}
