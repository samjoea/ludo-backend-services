import { PeerServer } from "peer";

const NODE_ENV = Bun.env.NODE_ENV ?? "development";
const peerPort = Bun.env.PEER_PORT ?? 9000;

const peerServer = PeerServer({
	path: "/ludo-peerjs",
	port: +peerPort,
	allow_discovery: true,
	corsOptions: '*',
	proxied: true,
});

peerServer.on("connection", (client) => {
	console.log("peerjs connection", client.getId());
});

console.log("peerjs running on port ", peerPort, ' on ', NODE_ENV);