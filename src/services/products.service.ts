
import { array } from 'astro/zod';
import { v4 as uuidv4 } from 'uuid';

const products = [
	{
		id: uuidv4(),
		title: "Chaleco Rosa",
		description: "¡Deslumbra con estilo y elegancia con nuestro exquisito Chaleco Rosa! Este chaleco es una verdadera declaración de moda, diseñado para aquellos que desean destacar con un toque de color y sofisticación. Fabricado con los más altos estándares de calidad, nuestro chaleco rosa está confeccionado con un tejido suave y delicado que ofrece comodidad y calidez durante todo el día. Su tono rosa vibrante añade un toque de frescura y vitalidad a cualquier atuendo, mientras que su corte moderno y ajuste impecable garantizan una apariencia elegante y estilizada en cualquier ocasión.  Ya sea que desees elevar tu look casual diario o impresionar en un evento formal, nuestro chaleco rosa es la elección perfecta. Combínalo con una camisa blanca para un estilo clásico y atemporal, o atrévete a experimentar combinándolo con tonos neutros para un contraste chic y contemporáneo. Haz una declaración de moda audaz y añade un toque de color a tu guardarropa con nuestro Chaleco Rosa. ¡Prepárate para brillar con confianza y estilo dondequiera que vayas!",
		image: "/378542495_17995575353499155_6681925949692402668_n.jpg",
		stock: true,
		tag: "chalecos",
		images: ["/378542495_17995575353499155_6681925949692402668_n.jpg", "/379361470_17996266598499155_2013131359526437872_n.jpg", "/378542495_17995575353499155_6681925949692402668_n.jpg"],
		genre: "W",
	},
		
	{
		id: uuidv4(),
		title: "Campera de Jean",
		description: "¡Agrega un toque de estilo clásico y atemporal a tu guardarropa con nuestra Campera de Jean! Diseñada para aquellos que buscan un equilibrio perfecto entre moda y funcionalidad, esta campera es un imprescindible para cualquier temporada. Fabricada con denim de alta calidad, nuestra campera de jean ofrece durabilidad y resistencia, asegurando que te acompañe en todas tus aventuras con estilo. Su diseño versátil y atemporal combina perfectamente con cualquier outfit, desde un look casual de fin de semana hasta un conjunto más elegante para una salida nocturna. Con detalles de costura contrastantes y bolsillos prácticos, esta campera no solo es elegante, sino también funcional. Su silueta clásica y su corte favorecedor aseguran un ajuste cómodo y favorecedor para todo tipo de cuerpo. Ya sea que desees agregar un toque de frescura a tus conjuntos diarios o necesites una capa adicional para esos días frescos de primavera y otoño, nuestra Campera de Jean es la elección perfecta. ¡Haz una declaración de moda audaz y añade un toque de estilo retro con nuestra Campera de Jean! Prepárate para destacar con confianza en cualquier ocasión.",
		image: "/379361470_17996266598499155_2013131359526437872_n.jpg",
		stock: false,
		tag: "Camperas",
		images: ["/378542495_17995575353499155_6681925949692402668_n.jpg", "/379361470_17996266598499155_2013131359526437872_n.jpg", "/378542495_17995575353499155_6681925949692402668_n.jpg"],
		genre: "M",
	},
	{
		id: uuidv4(),
		title: "Camisa de algodon",
		description: "Camisa de manga larga con botones, disponible en varios colores y tallas",
		image: "/378542495_17995575353499155_6681925949692402668_n.jpg",
		stock: true,
		tag: "Camisas",
		images: ["/378542495_17995575353499155_6681925949692402668_n.jpg", "/379361470_17996266598499155_2013131359526437872_n.jpg", "/378542495_17995575353499155_6681925949692402668_n.jpg"],
		genre: "W",
	},
	{
		id: uuidv4(),
		title: "Camisa de algodon",
		description: "Camisa de manga larga con botones, disponible en varios colores y tallas",
		image: "/378542495_17995575353499155_6681925949692402668_n.jpg",
		stock: true,
		tag: "Chomba",
		images: ["/378542495_17995575353499155_6681925949692402668_n.jpg", "/379361470_17996266598499155_2013131359526437872_n.jpg", "/378542495_17995575353499155_6681925949692402668_n.jpg"],
		genre: "M",
	},
	
	{
		id: uuidv4(),
		title: "Camisa de algodon",
		description: "Camisa de manga larga con botones, disponible en varios colores y tallas",
		image: "/378542495_17995575353499155_6681925949692402668_n.jpg",
		stock: true,
		tag: "Remera",
		images: ["/378542495_17995575353499155_6681925949692402668_n.jpg", "/379361470_17996266598499155_2013131359526437872_n.jpg", "/378542495_17995575353499155_6681925949692402668_n.jpg"],
		genre: "W",
	},
	{
		id: uuidv4(),
		title: "Camisa de algodon",
		description: "Camisa de manga larga con botones, disponible en varios colores y tallas",
		image: "/378542495_17995575353499155_6681925949692402668_n.jpg",
		stock: true,
		tag: "Pantalon",
		images: ["/378542495_17995575353499155_6681925949692402668_n.jpg", "/379361470_17996266598499155_2013131359526437872_n.jpg", "/378542495_17995575353499155_6681925949692402668_n.jpg"],
		genre: "M",
	},
	{
		id: uuidv4(),
		title: "Camisa de algodon",
		description: "Camisa de manga larga con botones, disponible en varios colores y tallas",
		image: "/378542495_17995575353499155_6681925949692402668_n.jpg",
		stock: true,
		tag: "Bermuda",
		images: ["/378542495_17995575353499155_6681925949692402668_n.jpg", "/379361470_17996266598499155_2013131359526437872_n.jpg", "/378542495_17995575353499155_6681925949692402668_n.jpg"],
		genre: "W",
	},
	{
		id: uuidv4(),
		title: "Camisa de algodon",
		description: "Camisa de manga larga con botones, disponible en varios colores y tallas",
		image: "/378542495_17995575353499155_6681925949692402668_n.jpg",
		stock: true,
		tag: "Jean",
		images: ["/378542495_17995575353499155_6681925949692402668_n.jpg", "/379361470_17996266598499155_2013131359526437872_n.jpg", "/378542495_17995575353499155_6681925949692402668_n.jpg"],
		genre: "M",
		
	},
	{
		id: uuidv4(),
		title: "Chaleco Rosa",
		description: "¡Deslumbra con estilo y elegancia con nuestro exquisito Chaleco Rosa! Este chaleco es una verdadera declaración de moda, diseñado para aquellos que desean destacar con un toque de color y sofisticación. Fabricado con los más altos estándares de calidad, nuestro chaleco rosa está confeccionado con un tejido suave y delicado que ofrece comodidad y calidez durante todo el día. Su tono rosa vibrante añade un toque de frescura y vitalidad a cualquier atuendo, mientras que su corte moderno y ajuste impecable garantizan una apariencia elegante y estilizada en cualquier ocasión.  Ya sea que desees elevar tu look casual diario o impresionar en un evento formal, nuestro chaleco rosa es la elección perfecta. Combínalo con una camisa blanca para un estilo clásico y atemporal, o atrévete a experimentar combinándolo con tonos neutros para un contraste chic y contemporáneo. Haz una declaración de moda audaz y añade un toque de color a tu guardarropa con nuestro Chaleco Rosa. ¡Prepárate para brillar con confianza y estilo dondequiera que vayas!",
		image: "/378542495_17995575353499155_6681925949692402668_n.jpg",
		stock: true,
		tag: "chalecos",
		images: ["/378542495_17995575353499155_6681925949692402668_n.jpg", "/379361470_17996266598499155_2013131359526437872_n.jpg", "/378542495_17995575353499155_6681925949692402668_n.jpg"],
		genre: "W",
	},
		
	{
		id: uuidv4(),
		title: "Campera de Jean",
		description: "¡Agrega un toque de estilo clásico y atemporal a tu guardarropa con nuestra Campera de Jean! Diseñada para aquellos que buscan un equilibrio perfecto entre moda y funcionalidad, esta campera es un imprescindible para cualquier temporada. Fabricada con denim de alta calidad, nuestra campera de jean ofrece durabilidad y resistencia, asegurando que te acompañe en todas tus aventuras con estilo. Su diseño versátil y atemporal combina perfectamente con cualquier outfit, desde un look casual de fin de semana hasta un conjunto más elegante para una salida nocturna. Con detalles de costura contrastantes y bolsillos prácticos, esta campera no solo es elegante, sino también funcional. Su silueta clásica y su corte favorecedor aseguran un ajuste cómodo y favorecedor para todo tipo de cuerpo. Ya sea que desees agregar un toque de frescura a tus conjuntos diarios o necesites una capa adicional para esos días frescos de primavera y otoño, nuestra Campera de Jean es la elección perfecta. ¡Haz una declaración de moda audaz y añade un toque de estilo retro con nuestra Campera de Jean! Prepárate para destacar con confianza en cualquier ocasión.",
		image: "/379361470_17996266598499155_2013131359526437872_n.jpg",
		stock: false,
		tag: "Camperas",
		images: ["/378542495_17995575353499155_6681925949692402668_n.jpg", "/379361470_17996266598499155_2013131359526437872_n.jpg", "/378542495_17995575353499155_6681925949692402668_n.jpg"],
		genre: "M",
	},
	{
		id: uuidv4(),
		title: "Camisa de algodon",
		description: "Camisa de manga larga con botones, disponible en varios colores y tallas",
		image: "/378542495_17995575353499155_6681925949692402668_n.jpg",
		stock: true,
		tag: "Camisas",
		images: ["/378542495_17995575353499155_6681925949692402668_n.jpg", "/379361470_17996266598499155_2013131359526437872_n.jpg", "/378542495_17995575353499155_6681925949692402668_n.jpg"],
		genre: "W",
	},
	{
		id: uuidv4(),
		title: "Camisa de algodon",
		description: "Camisa de manga larga con botones, disponible en varios colores y tallas",
		image: "/378542495_17995575353499155_6681925949692402668_n.jpg",
		stock: true,
		tag: "Chomba",
		images: ["/378542495_17995575353499155_6681925949692402668_n.jpg", "/379361470_17996266598499155_2013131359526437872_n.jpg", "/378542495_17995575353499155_6681925949692402668_n.jpg"],
		genre: "M",
	},
	
	{
		id: uuidv4(),
		title: "Camisa de algodon",
		description: "Camisa de manga larga con botones, disponible en varios colores y tallas",
		image: "/378542495_17995575353499155_6681925949692402668_n.jpg",
		stock: true,
		tag: "Remera",
		images: ["/378542495_17995575353499155_6681925949692402668_n.jpg", "/379361470_17996266598499155_2013131359526437872_n.jpg", "/378542495_17995575353499155_6681925949692402668_n.jpg"],
		genre: "W",
	},
	{
		id: uuidv4(),
		title: "Camisa de algodon",
		description: "Camisa de manga larga con botones, disponible en varios colores y tallas",
		image: "/378542495_17995575353499155_6681925949692402668_n.jpg",
		stock: true,
		tag: "Pantalon",
		images: ["/378542495_17995575353499155_6681925949692402668_n.jpg", "/379361470_17996266598499155_2013131359526437872_n.jpg", "/378542495_17995575353499155_6681925949692402668_n.jpg"],
		genre: "M",
	},
	{
		id: uuidv4(),
		title: "Camisa de algodon",
		description: "Camisa de manga larga con botones, disponible en varios colores y tallas",
		image: "/378542495_17995575353499155_6681925949692402668_n.jpg",
		stock: true,
		tag: "Bermuda",
		images: ["/378542495_17995575353499155_6681925949692402668_n.jpg", "/379361470_17996266598499155_2013131359526437872_n.jpg", "/378542495_17995575353499155_6681925949692402668_n.jpg"],
		genre: "W",
	},
	{
		id: uuidv4(),
		title: "Camisa de algodon",
		description: "Camisa de manga larga con botones, disponible en varios colores y tallas",
		image: "/378542495_17995575353499155_6681925949692402668_n.jpg",
		stock: true,
		tag: "Jean",
		images: ["/378542495_17995575353499155_6681925949692402668_n.jpg", "/379361470_17996266598499155_2013131359526437872_n.jpg", "/378542495_17995575353499155_6681925949692402668_n.jpg"],
		genre: "M",
		
	},
	{
		id: uuidv4(),
		title: "Chaleco Rosa",
		description: "¡Deslumbra con estilo y elegancia con nuestro exquisito Chaleco Rosa! Este chaleco es una verdadera declaración de moda, diseñado para aquellos que desean destacar con un toque de color y sofisticación. Fabricado con los más altos estándares de calidad, nuestro chaleco rosa está confeccionado con un tejido suave y delicado que ofrece comodidad y calidez durante todo el día. Su tono rosa vibrante añade un toque de frescura y vitalidad a cualquier atuendo, mientras que su corte moderno y ajuste impecable garantizan una apariencia elegante y estilizada en cualquier ocasión.  Ya sea que desees elevar tu look casual diario o impresionar en un evento formal, nuestro chaleco rosa es la elección perfecta. Combínalo con una camisa blanca para un estilo clásico y atemporal, o atrévete a experimentar combinándolo con tonos neutros para un contraste chic y contemporáneo. Haz una declaración de moda audaz y añade un toque de color a tu guardarropa con nuestro Chaleco Rosa. ¡Prepárate para brillar con confianza y estilo dondequiera que vayas!",
		image: "/378542495_17995575353499155_6681925949692402668_n.jpg",
		stock: true,
		tag: "chalecos",
		images: ["/378542495_17995575353499155_6681925949692402668_n.jpg", "/379361470_17996266598499155_2013131359526437872_n.jpg", "/378542495_17995575353499155_6681925949692402668_n.jpg"],
		genre: "W",
	},
		
	{
		id: uuidv4(),
		title: "Campera de Jean",
		description: "¡Agrega un toque de estilo clásico y atemporal a tu guardarropa con nuestra Campera de Jean! Diseñada para aquellos que buscan un equilibrio perfecto entre moda y funcionalidad, esta campera es un imprescindible para cualquier temporada. Fabricada con denim de alta calidad, nuestra campera de jean ofrece durabilidad y resistencia, asegurando que te acompañe en todas tus aventuras con estilo. Su diseño versátil y atemporal combina perfectamente con cualquier outfit, desde un look casual de fin de semana hasta un conjunto más elegante para una salida nocturna. Con detalles de costura contrastantes y bolsillos prácticos, esta campera no solo es elegante, sino también funcional. Su silueta clásica y su corte favorecedor aseguran un ajuste cómodo y favorecedor para todo tipo de cuerpo. Ya sea que desees agregar un toque de frescura a tus conjuntos diarios o necesites una capa adicional para esos días frescos de primavera y otoño, nuestra Campera de Jean es la elección perfecta. ¡Haz una declaración de moda audaz y añade un toque de estilo retro con nuestra Campera de Jean! Prepárate para destacar con confianza en cualquier ocasión.",
		image: "/379361470_17996266598499155_2013131359526437872_n.jpg",
		stock: false,
		tag: "Camperas",
		images: ["/378542495_17995575353499155_6681925949692402668_n.jpg", "/379361470_17996266598499155_2013131359526437872_n.jpg", "/378542495_17995575353499155_6681925949692402668_n.jpg"],
		genre: "M",
	},
	{
		id: uuidv4(),
		title: "Camisa de algodon",
		description: "Camisa de manga larga con botones, disponible en varios colores y tallas",
		image: "/378542495_17995575353499155_6681925949692402668_n.jpg",
		stock: true,
		tag: "Camisas",
		images: ["/378542495_17995575353499155_6681925949692402668_n.jpg", "/379361470_17996266598499155_2013131359526437872_n.jpg", "/378542495_17995575353499155_6681925949692402668_n.jpg"],
		genre: "W",
	},
	{
		id: uuidv4(),
		title: "Camisa de algodon",
		description: "Camisa de manga larga con botones, disponible en varios colores y tallas",
		image: "/378542495_17995575353499155_6681925949692402668_n.jpg",
		stock: true,
		tag: "Chomba",
		images: ["/378542495_17995575353499155_6681925949692402668_n.jpg", "/379361470_17996266598499155_2013131359526437872_n.jpg", "/378542495_17995575353499155_6681925949692402668_n.jpg"],
		genre: "M",
	},
	
	{
		id: uuidv4(),
		title: "Camisa de algodon",
		description: "Camisa de manga larga con botones, disponible en varios colores y tallas",
		image: "/378542495_17995575353499155_6681925949692402668_n.jpg",
		stock: true,
		tag: "Remera",
		images: ["/378542495_17995575353499155_6681925949692402668_n.jpg", "/379361470_17996266598499155_2013131359526437872_n.jpg", "/378542495_17995575353499155_6681925949692402668_n.jpg"],
		genre: "W",
	},
	{
		id: uuidv4(),
		title: "Camisa de algodon",
		description: "Camisa de manga larga con botones, disponible en varios colores y tallas",
		image: "/378542495_17995575353499155_6681925949692402668_n.jpg",
		stock: true,
		tag: "Pantalon",
		images: ["/378542495_17995575353499155_6681925949692402668_n.jpg", "/379361470_17996266598499155_2013131359526437872_n.jpg", "/378542495_17995575353499155_6681925949692402668_n.jpg"],
		genre: "M",
	},
	{
		id: uuidv4(),
		title: "Camisa de algodon",
		description: "Camisa de manga larga con botones, disponible en varios colores y tallas",
		image: "/378542495_17995575353499155_6681925949692402668_n.jpg",
		stock: true,
		tag: "Bermuda",
		images: ["/378542495_17995575353499155_6681925949692402668_n.jpg", "/379361470_17996266598499155_2013131359526437872_n.jpg", "/378542495_17995575353499155_6681925949692402668_n.jpg"],
		genre: "W",
	},
	{
		id: uuidv4(),
		title: "Camisa de algodon",
		description: "Camisa de manga larga con botones, disponible en varios colores y tallas",
		image: "/378542495_17995575353499155_6681925949692402668_n.jpg",
		stock: true,
		tag: "Jean",
		images: ["/378542495_17995575353499155_6681925949692402668_n.jpg", "/379361470_17996266598499155_2013131359526437872_n.jpg", "/378542495_17995575353499155_6681925949692402668_n.jpg"],
		genre: "M",
		
	}
]


class ProductsService {
    static async getProducts() {
        return products
    }
	static async getProductsByCategory(category: string) {
        return products.filter(product => product.tag === category);
    }
    static async getProduct(id: string) {
		        return products.find(product => product.id === id)
    }

	static async getAllCategories() {
		const categories: any[] = [];
		products.forEach(product => {
			if (!categories.find((category) => category.tag === product.tag)) {
				categories.push({
					...product,
				});
				
			} 
		})
		return categories
	}

}

export default ProductsService