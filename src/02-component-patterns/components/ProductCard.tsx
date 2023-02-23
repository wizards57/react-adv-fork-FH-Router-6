import { createContext } from "react";
import { useProduct } from "../hooks/useProduct";
import styles from "../styles/styles.module.css";
import {
  ProductContextProps,
  ProductCardProps,
} from "../interfaces/interfaces";

export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;

export const ProductCard = ({ children, product }: ProductCardProps) => {
  const { count, increaseBy } = useProduct();

  return (
    <Provider
      value={{
        count,
        increaseBy,
        product,
      }}
    >
      <div className={styles.productCard}>
        {children}
        {/*  <img className={styles.productImg} src="./coffee-mug.png" alt="Coffe Mug" /> */}

        {/* <ProductImage img={product.img} />
         <ProductTitle title={product.title}/>

          <ProductButtons count={count} increaseBy={increaseBy } /> */}
      </div>
    </Provider>
  );
};
