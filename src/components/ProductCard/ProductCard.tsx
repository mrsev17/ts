import { useState } from "react";
import { Product } from "../../utils/types";
import { ModalDelete } from "../ModalDelete";
import styles from "./ProductCard.module.css";

export const ProductCard: React.FC<{ product: Product }> = ({ product }) => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const openModal = (): void => {
        setIsOpen(true);
    };

    const closeModal = (): void => {
        setIsOpen(false);
    };
    const productPictureSize = {
        width: product.size.width,
        height: product.size.height,
    };
    return (
        <li className={styles.productCard}>
            <div className={styles.productCardWrapper}>
                <img
                    src={product.imageUrl}
                    alt={`Picture of ${product.name}`}
                    style={productPictureSize}
                />
                <h2>{product.name}</h2>
                <span>In Stock: {product.count}</span>
                <button onClick={openModal} className={styles.deleteBtn}>
                    Delete Product
                </button>
                <ModalDelete
                    isOpen={isOpen}
                    onClose={closeModal}
                    targetItem={product.name}
                    id={product.id}
                />
            </div>
        </li>
    );
};
