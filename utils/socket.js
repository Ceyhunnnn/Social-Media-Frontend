import { io } from "socket.io-client";

const socketUrl = process.env.API_SOCKET_URL;

export const socket = io(socketUrl, { path: "", log: false });
