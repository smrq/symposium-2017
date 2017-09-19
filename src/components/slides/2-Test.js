import React from 'react';
import Highlight from 'react-highlight';

export default function() {
	return (
		<div>
			<h1>Another Test</h1>
			<Highlight className="js">
				{require('!raw-loader!./2-Test.js')}
			</Highlight>
		</div>
	)
}