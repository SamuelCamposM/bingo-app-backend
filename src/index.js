import express from "express";
import { config } from "dotenv";
import cors from "cors";
config();

import { dbConnection } from "./db/config";
import { socketMensajes } from "./sockets";
import { authRouter } from "./routes";
import { mensajesRouter } from "./routes/mensajes";
import { createServer } from "http";
import socketio from "socket.io";
dbConnection();

const app = express();

// Lectura y parseo del body
app.use(express.json());
// CORS
app.use(cors());

app.use(express.static("public"));
//ROUTER
app.use("/api/auth", authRouter);
app.use("/api/mensajes", mensajesRouter);
const server = createServer(app);
const io = socketio(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
  },
});

socketMensajes(io);

server.listen(process.env.PORT, () =>
  console.log(`Servidor corriendo en puerto ${process.env.PORT}`)
);
