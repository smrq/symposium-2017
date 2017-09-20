import React from 'react';
import Slide from '../Slide';
import asSlide from '../asSlide';
import ExamplePageContent from '../ExamplePageContent';
import * as styles from './slides.scss';

export default asSlide(Contents);

function Contents() {
	return (
		<Slide theme="light">
			<h1>Again, but <span className={styles.slower}>slower</span></h1>
			<div className={styles.window}>
				<div className={styles.semi}>;</div>
				<ExamplePageContent />
			</div>
		</Slide>
	)
}