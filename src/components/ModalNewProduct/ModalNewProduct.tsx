import { useState } from "react";
import { setNewProduct } from "../../redux/productAppSlice/productAppSlice";
import { FormValues } from "../../utils/types";
import { useAppDispatch } from "../../hooks/hooks";
import styles from "./ModalNewProduct.module.css";

interface ModalNewProductProps {
    isOpen: boolean;
    onClose: () => void;
}

export const ModalNewProduct: React.FC<ModalNewProductProps> = ({
    isOpen,
    onClose,
}) => {
    const dispatch = useAppDispatch();
    const [formValues, setFormValues] = useState<FormValues>({
        name: "",
        picture: "",
        weight: "",
        inStock: "",
    });
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });
    };
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
        e.preventDefault();
        if (
            formValues.name.length > 3 &&
            formValues.picture.length > 3 &&
            formValues.weight.length > 3 &&
            formValues.inStock.length > 3
        ) {
            dispatch(
                setNewProduct({
                    ...formValues,
                    inStock: +formValues.inStock,
                })
            );
            setFormValues({
                name: "",
                picture: "",
                weight: "",
                inStock: "",
            });
            onClose();
        }
    };
    if (!isOpen) return null;
    return (
        <div className={styles.modalNewProduct}>
            <div className={styles.modalNewProductWrapper}>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="name">Product Name:</label>
                    <input
                        id="name"
                        name="name"
                        value={formValues.name}
                        onChange={handleChange}
                        placeholder="Input name for new product"
                        maxLength={20}
                    />

                    <label htmlFor="url">Product URL of picture:</label>
                    <input
                        id="url"
                        name="picture"
                        value={formValues.picture}
                        onChange={handleChange}
                        type="text"
                        placeholder="Input URL for new product picture"
                    />

                    <label htmlFor="weight">Product weight:</label>
                    <input
                        id="weight"
                        name="weight"
                        value={formValues.weight}
                        onChange={handleChange}
                        placeholder="Input weight for new product"
                        maxLength={20}
                    />
                    <label htmlFor="inStock">Product in stock:</label>
                    <input
                        id="inStock"
                        name="inStock"
                        value={formValues.inStock}
                        onChange={handleChange}
                        placeholder="Input quantity in stock for new product"
                        maxLength={10}
                    />

                    <div className={styles.newProductBtnsWrapper}>
                        <button type="submit">CREATE NEW PRODUCT</button>
                        <button type="button" onClick={onClose}>
                            CLOSE MODAL
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};
