import { useState, useEffect } from "react";
import { useAppDispatch } from "./hooks/hooks";
import { setInitDataBase } from "./redux/productAppSlice/productAppSlice";
import "./App.css";
import { ProductList } from "./components";

function App() {
    const dispatch = useAppDispatch();
    const [dataLoaded, setDataLoaded] = useState<boolean>(false);
    useEffect(() => {
        const storedData = localStorage.getItem("persist:product-list-web-app");
        if (storedData) {
            setTimeout(() => {
                setDataLoaded(true);
            }, 2000);
        } else {
            dispatch(setInitDataBase());
            setTimeout(() => {
                setDataLoaded(true);
            }, 2000);
        }
    }, [dispatch]);
    return (
        <div className="App">
            <ProductList />
        </div>
    );
}

export default App;
