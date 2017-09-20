import React from 'react';
import SyntaxHighlighter, { registerLanguage } from 'react-syntax-highlighter/dist/light';
import javascript from 'react-syntax-highlighter/dist/languages/javascript';
import xml from 'react-syntax-highlighter/dist/languages/xml';
import { atomOneDark, atomOneLight } from 'react-syntax-highlighter/dist/styles';
import ErrorBoundary from './ErrorBoundary';

registerLanguage('javascript', javascript);
registerLanguage('html', xml);

const themes = {
	dark: atomOneDark,
	light: atomOneLight
};

export default function Highlight({ children, theme, language }) {
	return (
		<ErrorBoundary>
			<SyntaxHighlighter language={language || 'javascript'} style={themes[theme]}>
				{children}
			</SyntaxHighlighter>
		</ErrorBoundary>
	);
}
