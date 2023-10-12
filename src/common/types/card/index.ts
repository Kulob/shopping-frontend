export interface ICardData {
    id: number,
    title: string,
    price: number,
    category: string,
    image: string,
    description: string
}

export interface IProductState {
    products: ICardData,
    isLoading: boolean
}

export interface IProductData {
    id: number,
    title: string,
    price: number,
}

export interface ICardBlockProps {
    id: number,
    title: string,
    price: number,
    category: string,
    image: string,
}