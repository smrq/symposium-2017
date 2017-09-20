import React from 'react';
import Slide from '../Slide';
import Highlight from '../Highlight';
import asSlide from '../asSlide';

import src1 from '!raw-loader!./04-src-1.cshtml';
import src2 from '!raw-loader!./04-src-2.cshtml';

const src = [src1, src2];

export default asSlide(Contents, { subCount: 2 });

function Contents({ subIndex }) {
	return (
		<Slide theme="dark">
			<h3>Layout.cshtml</h3>
			<Highlight language="html" theme="dark">
				{src[subIndex]}
			</Highlight>
		</Slide>
	)
}