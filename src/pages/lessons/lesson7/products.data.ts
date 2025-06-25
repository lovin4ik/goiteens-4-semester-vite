export interface IProduct {
	id: number
	name: string
	price: number
	description: string
}
export const PRODUCTS: IProduct[] = [
	{
		id: 1,
		name: 'Laptop',
		price: 1500,
		description: 'A high-performance laptop for all your needs.'
	},
	{
		id: 2,
		name: 'Smartphone',
		price: 700,
		description: 'A modern smartphone with an excellent camera.'
	},
	{
		id: 3,
		name: 'Headphones',
		price: 200,
		description: 'Noise-cancelling headphones for better focus.'
	}
]
