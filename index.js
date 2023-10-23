const { PeerServer } = require('peer');

const peerServer = PeerServer({ port: 443, path: '/' });

console.log('PeerJS server running on port 443');
