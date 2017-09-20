import React from 'react';
import Slide from '../Slide';
import asSlide from '../asSlide';
import ExamplePageContent from '../ExamplePageContent';
import * as styles from './slides.scss';

export default asSlide(Contents);

function Contents() {
	return (
        <Slide theme="light">
			<h1>Much better.</h1>
			<div className={styles.window}>
				<div className={styles.error}>
                    <div className={styles.message}>Uncaught Error: react-modal: You must set an element with `Modal.setAppElement(el)` to make this accessible</div>
                    <div className={styles.stack}>at validateElement (bundle.js?e6364e6026dd6833abea:24760)</div>
                    <div className={styles.stack}>at show (bundle.js?e6364e6026dd6833abea:24747)</div>
                    <div className={styles.stack}>at Object.toggle (bundle.js?e6364e6026dd6833abea:24755)</div>
                    <div className={styles.stack}>at Object.renderPortal (bundle.js?e6364e6026dd6833abea:24226)</div>
                    <div className={styles.stack}>at Object.componentDidMount (bundle.js?e6364e6026dd6833abea:24167)</div>
                    <div className={styles.stack}>at Object.chainedFunction [as componentDidMount] (bundle.js?e6364e6026dd6833abea:8347)</div>
                    <div className={styles.stack}>at bundle.js?e6364e6026dd6833abea:18883</div>
                    <div className={styles.stack}>at measureLifeCyclePerf (bundle.js?e6364e6026dd6833abea:18694)</div>
                    <div className={styles.stack}>at bundle.js?e6364e6026dd6833abea:18882</div>
                    <div className={styles.stack}>at CallbackQueue.notifyAll (bundle.js?e6364e6026dd6833abea:8847)</div>
				</div>
			</div>
		</Slide>
	)
}