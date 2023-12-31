const GUN = require("gun");
const express = require("express");
const cors = require("cors");
const app = express();
const NODE_ENV = process.env.NODE_ENV ?? "development";
const gunPort = process.env.GUN_PORT ?? 8765;

app.use(cors());
app.use(GUN.serve);
const server = app.listen(gunPort, () => {
	console.log("gun running on port ", gunPort, ' on ', NODE_ENV);
});
GUN({
	web: server,
	file: "data",
	axe: false,
});
