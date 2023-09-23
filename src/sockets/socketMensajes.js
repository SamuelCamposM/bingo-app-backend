import { comprobarJWT } from "../helpers";
import { UsuarioModel } from "../models";

export const socketMensajes = (io) => {
  io.on("connection", async (socket) => {
    const { query } = socket.handshake;

    const { ok, uid } = comprobarJWT(query["x-token"]);
    const user = await UsuarioModel.findOne({ _id: uid });
    console.log({ user });
    if (!ok) {
      console.log("Socket no identificado");
      return socket.disconnect();
    }
    console.log("Cliente conectado", uid);

    socket.on("disconnect", (socket) => {
      console.log("Cliente desconectado", uid);
    });
  });
};
