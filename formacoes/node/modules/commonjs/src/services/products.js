const productType = {
  version: "digital",
  tax: "x1",
};

async function doBreakLine() {
  console.log("\n");
}

async function getFullName(codeId, productName) {
  await doBreakLine();
  console.log(`${codeId} - ${productName}`);
}

async function getProductLabel(productName) {
  await doBreakLine();
  console.log("Product: " + productName);
}

module.exports = {
  productType,
  getFullName,
  getProductLabel,
};
