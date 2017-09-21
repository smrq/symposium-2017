import React from 'react';
import Slide from '../Slide';
import asSlide from '../asSlide';
import Fragment from '../Fragment';
import Fade from '../Fade';
import * as styles from './slides.scss';

export default asSlide(Contents, 4);

function Contents({ ix, subIndex }) {
	return (
		<Slide theme="light">
			<h1>Just for fun...</h1>
			<Fade n={1} subIndex={subIndex}>
				<h3><a href="/demo" target="_blank">A live demo</a></h3>
			</Fade>
			<Fade n={2} subIndex={subIndex}>
				<div>
					<h3>Some other stories</h3>
					<ul>
						<li><a href="https://www.gamasutra.com/blogs/DaveBaggett/20131031/203788/My_Hardest_Bug_Ever.php" target="_blank">Crash Bandicoot memory card corruption</a></li>
						<li><a href="https://gyrovague.com/2015/07/29/crashes-only-on-wednesdays/" target="_blank">Crashes only on Wednesdays</a></li>
						<li><a href="https://medium.engineering/the-curious-case-of-disappearing-polish-s-fa398313d4df" target="_blank">The curious case of the disappearing Polish S</a></li>
						<li><a href="https://drewdevault.com/2014/02/02/The-worst-bugs.html" target="_blank">The bug that hides from breakpoints</a></li>
						<li><a href="http://www.jakepoz.com/debugging-behind-the-iron-curtain/" target="_blank">Debugging Behind the Iron Curtain{ix(3) && '*'}</a></li>
					</ul>
					{ix(3) && <sub>* definitely apocryphal</sub>}
					<cite className={styles.cite}>
						<a href="https://github.com/danluu/debugging-stories" target="_blank">https://github.com/danluu/debugging-stories</a>
					</cite>
				</div>
			</Fade>
		</Slide>
	)
}