import { useAppSelector } from "../../hooks/hooks";
import { Product } from "../../utils/types";
import { ProductCard } from "../ProductCard";
import styles from "./ProductListWrapper.module.css";

export const ProductListWrapper: React.FC = () => {
    const getProductsList: Product[] = useAppSelector(
        (state) => state.products.products
    );
    return (
        <ul className={styles.productListWrapper}>
            {getProductsList.map((product, i) => {
                return <ProductCard key={i} product={product} />;
            })}
        </ul>
    );
};
