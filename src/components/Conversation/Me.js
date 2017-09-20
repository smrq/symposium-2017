import React from 'react';
import * as styles from './Conversation.scss';

export default function Me({ children }) {
	return (
		<div className={styles.me}>
			{children}
		</div>
	);
}