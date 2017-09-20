import React from 'react';
import Slide from '../Slide';
import asSlide from '../asSlide';
import Conversation, { Me, Them } from '../Conversation';
import * as styles from './slides.scss';

export default asSlide(Contents, 4);

function Contents({ ix }) {
	return (
		<Slide theme="light" className={styles.headerless}>
			<Conversation>
				{ix(0) && <Me>There's no way it's the semicolon.</Me>}
				{ix(1) && <Me>How could it possibly be the semicolon?</Me>}
				{ix(2) && <Them>I'm putting it back.</Them>}
				{ix(3) && <Me>But that can't be it.</Me>}
			</Conversation>
		</Slide>
	)
}