export interface NewProduct {
    name: string;
    picture: string;
    weight: string;
    inStock: number;
}

export interface Comment {
    id: string;
    productId: string;
    description: string;
    date: string;
}

export interface Product {
    id: string;
    imageUrl: string;
    name: string;
    count: number;
    size: {
        width: number;
        height: number;
    };
    weight: string;
    comments: Comment[];
}

export interface FormValues {
    name: string;
    picture: string;
    weight: string;
    inStock: string;
}
