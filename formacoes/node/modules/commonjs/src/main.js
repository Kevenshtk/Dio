const p = require("./services/products");
const config = require("./services/config");
const database = require("./services/database");

async function main() {
  console.log("Starting the application...");

  await p.getFullName("123", "Product A");
  await p.getFullName("456", "Product B");
  await p.getProductLabel("Product A");

  console.log(config.devArea);
  database.connenctToDatabase("MySQL");
}

main();
