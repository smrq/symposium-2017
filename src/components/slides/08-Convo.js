import React from 'react';
import Slide from '../Slide';
import asSlide from '../asSlide';
import Conversation, { Me, Them } from '../Conversation';
import * as styles from './slides.scss';

export default asSlide(Contents, 2);

function Contents({ ix }) {
	return (
		<Slide theme="light" className={styles.headerless}>
			<Conversation>
				<Them>What if it was the semicolon?</Them>
				<Me>There's no way it's the semicolon.</Me>
				<Me>How could it possibly be the semicolon?</Me>
				<Them>I'm putting it back.</Them>
				<Me>But that can't be it.</Me>
				{ix(1) && <Me>But that CAN'T be it...</Me>}
			</Conversation>
		</Slide>
	)
}