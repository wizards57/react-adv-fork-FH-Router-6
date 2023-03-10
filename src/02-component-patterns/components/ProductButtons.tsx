import { useCallback, useContext } from "react";
import { ProductContext } from "./ProductCard";
import styles from "../styles/styles.module.css";

export interface Props {
  className?: string;
  style?: React.CSSProperties;
}

export const ProductButtons = ({ className, style }: Props) => {
  
  const { increaseBy, count, maxCount } = useContext(ProductContext);

  const isMaxReached= useCallback(
    () => !!maxCount && count ===maxCount,
    [count, maxCount]
  )
  
// TODO: isMaxReached=useCallback, [count, maxCount]
  // true si el count ===maxCount
  // false si no lo es

  return (
    <div className={`${styles.buttonsContainer} ${className}`} style={style}>
      <button className={styles.buttonMinus} onClick={() => increaseBy(-1)}>
        -
      </button>
      <div className={styles.countLabel}> {count} </div>
      <button className={ `${styles.buttonAdd}  ${isMaxReached() && styles.disable}`} onClick={() => increaseBy(+1)}>
        +
      </button>
    </div>
  );
};
