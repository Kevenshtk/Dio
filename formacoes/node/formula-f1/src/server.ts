import fastify from "fastify";
import cors from "@fastify/cors";

const server = fastify({ logger: true });

server.register(cors, {
  origin: "*",
  methods: ["GET", "POST"],
});

const teams = [
  { id: 1, name: "McLaren" },
  { id: 2, name: "ferrari" },
  { id: 3, name: "Red Bull Racing" },
];

const drivers = [
  { id: 1, name: "Max Verstappen", team: "Red Bull Racing" },
  { id: 2, name: "Lewis Hamilton", team: "Ferrari" },
];

server.get("/teams", async (req, res) => {
  res.type("application/json").code(200);

  return teams;
});

server.get("/drivers", async (req, res) => {
  res.type("application/json").code(200);

  return drivers;
});

interface DriverParams {
  id: string;
}

server.get<{ Params: DriverParams }>("/drivers/:id", async (req, res) => {
  const id = parseInt(req.params.id);
  const driver = drivers.find((d) => d.id === id);

  if (!driver) {
    res.type("application/json").code(404);
    return { message: "Driver Not Found" };
  } else {
    res.type("application/json").code(200);
    return driver;
  }
});

server.listen({ port: 3333 }, () => {
  console.log("Server init");
});
