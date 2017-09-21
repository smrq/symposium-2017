const express = require('express');
const http = require('http');
const path = require('path');
const url = require('url');
const loremIpsum = require('lorem-ipsum');

const app = express();

app.use(express.static(path.join(__dirname, '../dist')));

function sleep(n) {
	return new Promise(resolve => { setTimeout(resolve, n); });
}

async function demo(res) {
	res.writeHead(200, { 'Content-Type': 'text/html' });
	res.write(`<!DOCTYPE "html">`);
	res.write(`<html>`);
	res.write(`<head>`);
	res.write(`<title>Done!</title>`);
	res.write(`<link rel="stylesheet" href="/demo.css">`);
	res.write(`</head>`);
	res.write(`<body>`);
	res.write(`<div class="frame">`);
	res.write(`<div class="again">`);
	res.write(`Done! <a href="/demo">Do it again?</a>`);
	res.write(`</div>`);
	res.write(`<div class="loading">`);
	res.write(`<div class="message">Loading...</div>`);
	res.write(`<div class="outer"><div class="inner"></div></div>`);
	res.write(`</div>`);

	const steps = 60;
	function stepTime(i) {
		const percentage = i / steps;
		if (percentage < 0.1) return 250;
		if (percentage < 0.2) return 120;
		if (percentage < 0.5) return 60;
		if (percentage < 0.7) return 30;
		if (percentage < 0.9) return 60;
		return 400;
	};

	const content = loremIpsum({
	    count: steps,
	    units: 'paragraphs',
	    format: 'html',
	    suffix: '\n'
	}).split('\n');

	for (let i = 0; i < steps; ++i) {
		res.write(content[i]);
		res.write(`<style>.inner { width: ${100 * i / steps}%; }</style>`);
		await sleep(stepTime(i));
	}
	res.write(`<style>`)
	res.write(`.loading { display: none; }`);
	res.write(`.again { display: block; }`);
	res.write(`</style>`);
	res.write(`</div>`);
	res.write(`</body>`);
	res.write(`</html>`);
	res.end();
}

const server = http.createServer((req, res) => {
	const reqUrl = url.parse(req.url);
	if (reqUrl.pathname === '/demo') {
		demo(res);
	} else {
		app(req, res);
	}
});

server.listen(3000);
console.log("Server is listening on port 3000");
