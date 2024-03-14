
import { v4 as uuidv4 } from 'uuid';

const products = [
	{
		id: uuidv4(),
		title: "Camisa de algodon",
		description: "Camisa de manga larga con botones, disponible en varios colores y tallas",
		image: "/378542495_17995575353499155_6681925949692402668_n.jpg"
	},
	{
		id: uuidv4(),
		title: "Camisa de algodon",
		description: "Camisa de manga larga con botones, disponible en varios colores y tallas",
		image: "/378542495_17995575353499155_6681925949692402668_n.jpg"

	},
	{
		id: uuidv4(),
		title: "Camisa de algodon",
		description: "Camisa de manga larga con botones, disponible en varios colores y tallas",
		image: "/378542495_17995575353499155_6681925949692402668_n.jpg"
	},
	{
		id: uuidv4(),
		title: "Camisa de algodon",
		description: "Camisa de manga larga con botones, disponible en varios colores y tallas",
		image: "/378542495_17995575353499155_6681925949692402668_n.jpg"
	},
	{
		id: uuidv4(),
		title: "Camisa de algodon",
		description: "Camisa de manga larga con botones, disponible en varios colores y tallas",
		image: "/378542495_17995575353499155_6681925949692402668_n.jpg"
	},
	{
		id: uuidv4(),
		title: "Camisa de algodon",
		description: "Camisa de manga larga con botones, disponible en varios colores y tallas",
		image: "/378542495_17995575353499155_6681925949692402668_n.jpg"

	},
	{
		id: uuidv4(),
		title: "Camisa de algodon",
		description: "Camisa de manga larga con botones, disponible en varios colores y tallas",
		image: "/378542495_17995575353499155_6681925949692402668_n.jpg"
	},
	{
		id: uuidv4(),
		title: "Camisa de algodon",
		description: "Camisa de manga larga con botones, disponible en varios colores y tallas",
		image: "/378542495_17995575353499155_6681925949692402668_n.jpg"
	}
]

class ProductsService {
    static async getProducts() {
        return products
    }
    static async getProduct(id: string) {
        return products.find(product => product.id === id)
    }
}

export default ProductsService