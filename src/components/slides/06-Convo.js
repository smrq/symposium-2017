import React from 'react';
import Slide from '../Slide';
import asSlide from '../asSlide';
import Conversation, { Me, Them } from '../Conversation';
import * as styles from './slides.scss';

export default asSlide(Contents, 5);

function Contents({ ix }) {
	return (
		<Slide theme="light" className={styles.headerless}>
			<Conversation>
				{ix(0) && <Them>What if it was the semicolon?</Them>}
				{ix(1) && <Me>There's no way it's the semicolon.</Me>}
				{ix(2) && <Me>How could it possibly be the semicolon?</Me>}
				{ix(3) && <Them>I'm putting it back.</Them>}
				{ix(4) && <Me>But that can't be it.</Me>}
			</Conversation>
		</Slide>
	)
}