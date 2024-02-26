import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { compareNames, compareCount } from "../../utils/funtions";
import { v4 as uuidv4 } from "uuid";
import { NewProduct, Product } from "../../utils/types";
import productsData from "../../data/data.json";

interface InitialState {
    products: Product[];
    filterBy: string;
}

const initialState: InitialState = {
    products: [],
    filterBy: "alphabet",
};

const productAppSlice = createSlice({
    name: "productSlice",
    initialState,
    reducers: {
        setInitDataBase(state) {
            state.products = productsData;
            state.products.sort(compareNames);
        },
        setDeleteProduct(state, action: PayloadAction<string>) {
            const dataAfterDelete: Product[] = state.products.filter(
                (product) => {
                    return product.id !== action.payload;
                }
            );
            state.products = dataAfterDelete;
        },
        setNewProduct(state, actions: PayloadAction<NewProduct>) {
            const newProduct: Product = {
                name: actions.payload.name,
                imageUrl: actions.payload.picture,
                count: actions.payload.inStock,
                weight: actions.payload.weight,
                id: uuidv4(),
                size: {
                    width: 200,
                    height: 200,
                },
                comments: [],
            };
            state.products.push(newProduct);
        },
        setSelectFilter(state, actions: PayloadAction<string>) {
            state.filterBy = actions.payload;
            if (state.filterBy === "alphabet") {
                state.products.sort(compareNames);
            }
            if (state.filterBy === "quantity") {
                state.products.sort(compareCount);
            }
        },
    },
});

export const {
    setInitDataBase,
    setDeleteProduct,
    setNewProduct,
    setSelectFilter,
} = productAppSlice.actions;
export default productAppSlice.reducer;
