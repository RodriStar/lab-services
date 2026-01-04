import "./ProductList.css";
import ProductCard from "../ProductCard/ProductCard";

const ProductList = ({ products }) => {
  return (
    <div className="product-list">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          name={product.name}
          price={product.price}
          category={product.category}
          isAvailable={product.isAvailable}
          imageUrl={product.imageUrl}
        />
      ))}
    </div>
  );
};

export default ProductList;