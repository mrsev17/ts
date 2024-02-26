import styles from "./ModalDelete.module.css";
import { useAppDispatch } from "../../hooks/hooks";
import { setDeleteProduct } from "../../redux/productAppSlice/productAppSlice";

interface ModalDeleteProps {
    isOpen: boolean;
    onClose: () => void;
    targetItem: string;
    id: string;
}

export const ModalDelete: React.FC<ModalDeleteProps> = ({
    isOpen,
    onClose,
    targetItem,
    id,
}) => {
    const dispatch = useAppDispatch();
    const removeProduct = (id: string) => {
        dispatch(setDeleteProduct(id));
    };
    if (!isOpen) return null;
    return (
        <div className={styles.modalDelete}>
            <div className={styles.modalDeleteWrapper}>
                <span>{`Are you sure? Delete ${targetItem}`}</span>
                <div className={styles.deleteBtnsWrapper}>
                    <button
                        onClick={() => {
                            removeProduct(id);
                            onClose();
                        }}
                    >
                        Yes
                    </button>
                    <button onClick={onClose}>No</button>
                </div>
            </div>
        </div>
    );
};
