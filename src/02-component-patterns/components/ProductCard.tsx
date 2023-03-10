import { createContext } from "react";
import { useProduct } from "../hooks/useProduct";
import {
  onChangeArgs,
  Product,
  ProductContextProps,InitialValues, ProductCardHandlers
} from "../interfaces/interfaces";
import styles from "../styles/styles.module.css";

export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;

export interface Props {
  product: Product;
  //children?: ReactElement | ReactElement[];
  children:(args:ProductCardHandlers)=>JSX.Element,
  className?: string;
  style?: React.CSSProperties;
  onChange?: (args: onChangeArgs) => void;
  value?: number;
  initialValues?: InitialValues;
}

export const ProductCard = ({ children, product, className, style, onChange, value, initialValues }: Props) => {
  
  const { count, increaseBy, maxCount, isMaxCountReached, reset}
    = useProduct({ onChange, product, value, initialValues });
  console.log(maxCount);
  return (
    <Provider
      value={{
        count,
        increaseBy,
        maxCount,
        product,
      }}
    >
      <div className={`${styles.productCard} ${className} `} style={style}>
        {
          children({
            count,
            isMaxCountReached,
            maxCount: initialValues?.maxCount,
            product,

            increaseBy,
            reset
        })
        }
        {/*  <img className={styles.productImg} src="./coffee-mug.png" alt="Coffe Mug" /> */}

        {/* <ProductImage img={product.img} />
         <ProductTitle title={product.title}/>

          <ProductButtons count={count} increaseBy={increaseBy } /> */}
      </div>
    </Provider>
  );
};
