const loadProductsService = async () => {
  const response = await fetch(` https://api.escuelajs.co/api/v1/products`);
  const json = await response.json();

  return json;
};
export default loadProductsService;
