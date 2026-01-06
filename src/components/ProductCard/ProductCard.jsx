import "./ProductCard.css";
import defaultImage from "../../assets/images/image-default.jpg";
import Button from "../Button/Button";

const ProductCard = ({ name, price, category, isAvailable, imageUrl }) => {
  return (
    <div className="product-card">
      <div className="product-image">
        <img
          src={imageUrl}
          alt={name}
          onError={(e) => {
            e.target.src = defaultImage;
          }}
        />
      </div>

      <div className="product-info">
        <span className="product-category">{category}</span>
        <h3 className="product-name">{name}</h3>
        <p className="product-price">{price}</p>
        <span
          className={`product-status ${
            isAvailable ? "available" : "unavailable"
          }`}
        >
          {isAvailable ? "Disponible" : "No disponible"}
        </span>
        <Button text="Comprar" disabled={!isAvailable} />
      </div>
    </div>
  );
};

export default ProductCard;
