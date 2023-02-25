import { createContext, ReactElement } from "react";
import { useProduct } from "../hooks/useProduct";
import { Product, ProductContextProps } from "../interfaces/interfaces";
import styles from "../styles/styles.module.css";

export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;

export interface Props {
  product: Product;
  children?: ReactElement | ReactElement[];
  className?: string;
  style?: React.CSSProperties;
}

export const ProductCard = ({ children, product, className, style }: Props) => {
  const { count, increaseBy } = useProduct();

  return (
    <Provider
      value={{
        count,
        increaseBy,
        product,
      }}
    >
      <div className={`${styles.productCard} ${className} `} style={style}>
        {children}
        {/*  <img className={styles.productImg} src="./coffee-mug.png" alt="Coffe Mug" /> */}

        {/* <ProductImage img={product.img} />
         <ProductTitle title={product.title}/>

          <ProductButtons count={count} increaseBy={increaseBy } /> */}
      </div>
    </Provider>
  );
};
