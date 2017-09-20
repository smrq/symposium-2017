import React from 'react';
import * as styles from './Conversation.scss';

export default function Them({ children }) {
	return (
		<div className={styles.them}>
			{children}
		</div>
	);
}