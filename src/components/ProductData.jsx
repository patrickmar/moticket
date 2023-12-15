import ProductSlider from './ProductSlider';

const ProductData = () => {
  const products = [
    {
      heading: 'Product 1',
      image: 'p12',
      location: 'Lagos',
      price: {
        discounted: 20.0,
        original: 25.0,
      },
    },
    {
      heading: 'Product 1',
      image: 'image1.jpg',
      location: 'Lagos',
      price: {
        discounted: 20.0,
        original: 25.0,
      },
    },
    {
      heading: 'Product 1',
      image: 'image1.jpg',
      location: 'Lagos',
      price: {
        discounted: 20.0,
        original: 25.0,
      },
    },
    {
      heading: 'Product 1',
      image: 'image1.jpg',
      location: 'Lagos',
      price: {
        discounted: 20.0,
        original: 25.0,
      },
    },
    {
      heading: 'Product ',
      image: 'image1.jpg',
      location: 'Lagos',
      price: {
        discounted: 20.0,
        original: 25.0,
      },
    },
    {
      heading: 'Product 3',
      image: 'image1.jpg',
      location: 'Lagos',
      price: {
        discounted: 20.0,
        original: 25.0,
      },
    },
    // Repeat for other products
  ];
  return (
    <div className="mt-8">
      <h1 className="text-3xl font-bold mb-4">Featured Products</h1>
      {Array.isArray(products) && products.length > 0 ? (
        <ProductSlider products={products} />
      ) : null}
    </div>
  );
};

export default ProductData;
