import { useState } from "react";
import { ModalNewProduct } from "../ModalNewProduct";
import { useAppDispatch } from "../../hooks/hooks";
import { setSelectFilter } from "../../redux/productAppSlice/productAppSlice";
import styles from "./ProductListInterface.module.css";

export const ProductListInterface: React.FC = () => {
    const dispatch = useAppDispatch();
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const openModal = (): void => {
        setIsOpen(true);
    };

    const closeModal = (): void => {
        setIsOpen(false);
    };

    const [isOpenDropDown, setIsOpenDropdown] = useState<boolean>(false);

    const toggleDropdown = (): void => {
        setIsOpenDropdown(!isOpenDropDown);
    };

    const handleButtonClick = (action: string): void => {
        dispatch(setSelectFilter(action));
    };
    return (
        <div className={styles.productListInterface}>
            <div className={styles.productListInterfaceWrapper}>
                <button className={styles.newProductBtn} onClick={openModal}>
                    Add new product +
                </button>
                <ModalNewProduct isOpen={isOpen} onClose={closeModal} />
                <div className={styles.filters}>
                    <button
                        className={styles.filtersDropdown}
                        onClick={toggleDropdown}
                    >
                        Filters
                    </button>
                    {isOpenDropDown && (
                        <div className={styles.dropDownWrapper}>
                            <button
                                onClick={() => handleButtonClick("alphabet")}
                            >
                                Filter by alphabet
                            </button>
                            <button
                                onClick={() => handleButtonClick("quantity")}
                            >
                                Filter by quanity in stock
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};
