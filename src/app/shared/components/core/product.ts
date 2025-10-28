export interface Product {
    id: number;
    name: string;
    price: number;
    category: 'men' | 'women';
    description: string;
    image: {
        url: string;
        alt: string;
        width?: number;
        height?: number;
    };
    isNew: boolean;
}