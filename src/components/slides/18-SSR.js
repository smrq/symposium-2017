import React from 'react';
import cx from 'classnames';
import Slide from '../Slide';
import Highlight from '../Highlight';
import asSlide from '../asSlide';
import * as styles from './slides.scss';

import apphead from '!raw-loader!./Layout-cshtml/apphead.cshtml';
import app0 from '!raw-loader!./Layout-cshtml/app0.cshtml';
import app from '!raw-loader!./Layout-cshtml/app.cshtml';
import appSsr from '!raw-loader!./Layout-cshtml/app-ssr.cshtml';
import appSsrJk from '!raw-loader!./Layout-cshtml/app-ssr-jk.cshtml';

export default asSlide(Contents, 5);

function Contents({ ix }) {
	return (
		<Slide theme="dark">
			<h1>Reaping the benefits</h1>
			<div style={{ fontSize: '0.85em' }}>
				<Highlight language="html" theme="dark">{
					ix(4) ? appSsrJk :
					ix(3) ? appSsr :
					ix(2) ? app :
					ix(1) ? app0 :
					apphead
				}</Highlight>
			</div>
		</Slide>
	)
}