const req = require.context('./slides', false, /\.js$/);

export default req.keys()
	.sort()
	.map(key => req(key).default);
