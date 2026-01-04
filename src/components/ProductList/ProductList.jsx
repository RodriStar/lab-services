import "./ProductList.css";
import ProductCard from "../ProductCard/ProductCard";

const ProductList = ({ products }) => {
  // Estado: no hay productos
  if (!products || products.length === 0) {
    return (
      <div className="product-empty">
        <span className="product-empty-icon">😎</span>
        <p className="product-empty-text">
          No se encontraron productos
        </p>
      </div>
    );
  }

  // Estado: hay productos
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
