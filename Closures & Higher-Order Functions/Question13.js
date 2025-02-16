function processProducts(products) {
    let productNames = products.map((product) => product.name);
  
    products.forEach((product) => {
      let message = product.price > 50 ? "is above $50" : "is below $50";
      console.log(`${product.name} ${message}`);
    });
  }
  
  let products = [
    { name: "Monitor", price: 100 },
    { name: "CPU", price: 20 },
  ];
  
  processProducts(products);
