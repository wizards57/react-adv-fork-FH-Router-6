import "../styles/custom-styles.css";

import {
  ProductButtons,
  ProductCard,
  ProductImage,
  ProductTitle,
} from "../components";

import { useShoppingCart } from "../hooks/useShoppingCart";
import { products } from "../data/product";




export const ShoppingPage = () => {

  const { onProductCountChange, shoppingCart } = useShoppingCart();

  return (
    <div>
      Shopping Store
      <hr />
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
        }}
      >
        {/*  <ProductCard product={product1} className="bg-dark text-white">
          <ProductCard.Image className="custom-image" />
          <ProductCard.Title className=" text-bold" />
          <ProductCard.Buttons className="custom-buttons" />
        </ProductCard> */}

        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            className="bg-dark text-white"
            onChange={onProductCountChange}
            value={shoppingCart[product.id]?.count || 0}
          >
            <ProductImage className="custom-image" />
            <ProductTitle className=" text-bold" />
            <ProductButtons className="custom-buttons" />
          </ProductCard>
        ))}
      </div>
      <div className="shopping-cart">
        {Object.entries(shoppingCart).map(([key, product]) => (
          <ProductCard
            key={key}
            product={product}
            className="bg-dark text-white"
            style={{ width: "100px" }}
            onChange={onProductCountChange}
            value={product.count}
          >
            <ProductImage className="custom-image" />

            <ProductButtons className="custom-buttons" />
          </ProductCard>
        ))}
      </div>
      <div>
        <code>{JSON.stringify(shoppingCart, null, 5)}</code>
      </div>
    </div>
  );
};
