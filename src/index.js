import express from "express";
import StudentRoutes from './router/StudentRoutes.js'

const server = express();
const PORT = 5000;

server.use(express.json());

server.use(StudentRoutes);

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
})