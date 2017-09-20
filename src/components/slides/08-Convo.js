import React from 'react';
import Slide from '../Slide';
import asSlide from '../asSlide';
import Conversation, { Me, Them } from '../Conversation';
import * as styles from './slides.scss';

export default asSlide(Contents, { subCount: 2 });

function Contents({ ix }) {
	return (
		<Slide theme="light" className={styles.headerless}>
			<Conversation>
				<Me>There's no way it's the semicolon.</Me>
				<Me>How could it possibly be the semicolon?</Me>
				<Them>I'm putting it back.</Them>
				<Me>But that can't be it.</Me>
				{ix(1) && <Me>It can't be the semicolon.</Me>}
			</Conversation>
		</Slide>
	)
}