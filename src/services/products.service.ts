const products = [
	{
		id: "1",
		title: "Camisa de algodon",
		description: "Camisa de manga larga con botones, disponible en varios colores y tallas",
		image: "/378542495_17995575353499155_6681925949692402668_n.jpg"
	},
	{
		id: "2",
		title: "Camisa de algodon",
		description: "Camisa de manga larga con botones, disponible en varios colores y tallas",
		image: "/378542495_17995575353499155_6681925949692402668_n.jpg"

	},
	{
		id: "3",
		title: "Camisa de algodon",
		description: "Camisa de manga larga con botones, disponible en varios colores y tallas",
		image: "/378542495_17995575353499155_6681925949692402668_n.jpg"
	},
	{
		id: "4",
		title: "Camisa de algodon",
		description: "Camisa de manga larga con botones, disponible en varios colores y tallas",
		image: "/378542495_17995575353499155_6681925949692402668_n.jpg"
	},
	{
		id: "5",
		title: "Camisa de algodon",
		description: "Camisa de manga larga con botones, disponible en varios colores y tallas",
		image: "/378542495_17995575353499155_6681925949692402668_n.jpg"
	},
	{
		id: "6",
		title: "Camisa de algodon",
		description: "Camisa de manga larga con botones, disponible en varios colores y tallas",
		image: "/378542495_17995575353499155_6681925949692402668_n.jpg"

	},
	{
		id: "7",
		title: "Camisa de algodon",
		description: "Camisa de manga larga con botones, disponible en varios colores y tallas",
		image: "/378542495_17995575353499155_6681925949692402668_n.jpg"
	},
	{
		id: "8",
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