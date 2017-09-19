const req = require.context('./slides', false, /\.js$/);

export default req.keys().map(key => req(key).default);
