import { ProductListWrapper } from "../ProductListWrapper";
import { ProductListInterface } from "../ProductListInterface";
import styles from "./ProductList.module.css";
import "../../App.css";

export const ProductList: React.FC = () => {
    return (
        <section className={`${styles.productList} container`}>
            <ProductListInterface />
            <ProductListWrapper />
        </section>
    );
};
