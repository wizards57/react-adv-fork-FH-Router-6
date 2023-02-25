import "../styles/custom-styles.css";

import {
  ProductButtons,
  ProductCard,
  ProductImage,
  ProductTitle,
} from "../components";

const product = {
  id: "1",
  title: "Coffe Mug - Card",
  img: "./coffee-mug.png",
};

export const ShoppingPage = () => {
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
        <ProductCard product={product} className="bg-dark text-white">
          <ProductCard.Image className="custom-image" />
          <ProductCard.Title className=" text-bold" />
          <ProductCard.Buttons className="custom-buttons" />
        </ProductCard>

        <ProductCard product={product} className="bg-dark text-white">
          <ProductImage className="custom-image" />
          <ProductTitle className=" text-bold" />
          <ProductButtons className="custom-buttons" />
        </ProductCard>

        <ProductCard product={product} style={{ backgroundColor: "#70d1f8" }}>
          <ProductImage
            style={{
              borderRadius: "20px",
              padding: "10px",
              width: "calc(100% - 20px)",
              boxShadow: "20px 10px 10px rgba(0,0,0.2,0.2)",
            }}
          />
          <ProductTitle style={{ fontWeight: "bold" }} />
          <ProductButtons style={{ display: "flex", justifyContent: "end" }} />
        </ProductCard>
      </div>
    </div>
  );
};
