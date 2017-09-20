import React from 'react';
import Slide from '../Slide';
import asSlide from '../asSlide';
import Conversation, { Me, Them } from '../Conversation';
import * as styles from './slides.scss';

export default asSlide(Contents, 6);

function Contents({ ix }) {
	return (
		<Slide theme="light">
			<h1>The case of the 500-mile email</h1>
			<Conversation>
				{ix(1) && <Them>We're having a problem sending email out of the department.</Them>}
				{ix(2) && <Me>What's the problem?</Me>}
				{ix(3) && <Them>We can't send mail farther than 500 miles from here.</Them>}
				{ix(4) && <Them>A little bit more, actually.  Call it 520 miles.  But no farther.</Them>}
				{ix(5) && <Me>Um... Email really doesn't work that way, generally.</Me>}
			</Conversation>
			<cite className={styles.cite}>
				<a href="https://www.ibiblio.org/harris/500milemail.html">
					https://www.ibiblio.org/harris/500milemail.html
				</a>
			</cite>
		</Slide>
	)
}
