import { PeerServer } from "peer";

const NODE_ENV = Bun.env.NODE_ENV ?? "development";
const peerPort = Bun.env.PEER_PORT ?? 9000;

const peerServer = PeerServer({
	path: "/peerjs",
	port: +peerPort,
	proxied: true,
});

console.log("peerjs running on port ", peerPort, ' on ', NODE_ENV);