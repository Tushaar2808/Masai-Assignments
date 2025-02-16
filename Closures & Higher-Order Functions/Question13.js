function processProducts(products) {
    const productNames = products.map((product) => product.name);
  
    products.forEach((product) => {
      const message = product.price > 50 ? "is above $50" : "is below $50";
      console.log(`${product.name} ${message}`);
    });
  }
  
  const products = [
    { name: "Monitor", price: 100 },
    { name: "CPU", price: 20 },
  ];
  
  processProducts(products);