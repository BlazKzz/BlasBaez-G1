export const products = [
    {
        id: 1,
        name: 'Notebook Gamer 1',
        price: 799990,
        description: 'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno',
        stock: 5,
        img: '/Ngamer/G1.webp',
        category: 'ngamer'
    },
    {
        id: 2,
        name: 'Notebook Gamer 2',
        price: 699990,
        description: 'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno',
        stock: 4,
        img: '/Ngamer/G2.png',
        category: 'ngamer'
    },
    {
        id: 3,
        name: 'Notebook Gamer 3',
        price: 599990,
        description: 'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno',
        stock: 3,
        img: '/Ngamer/G3.jpg',
        category: 'ngamer'
    },
    {
        id: 4,
        name: 'Notebook Gamer 4',
        price: 899990,
        description: 'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno',
        stock: 6,
        img: '/Ngamer/G4.jpg',
        category: 'ngamer'
    },
    {
        id: 6,
        name: 'Monitor 1',
        price: 999990,
        description: 'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno',
        stock: 8,
        img: '/Monitor_card/Mcard1.webp',
        category: 'monitor'
    },
    {
        id: 7,
        name: 'Monitor 2',
        price: 999990,
        description: 'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno',
        stock: 8,
        img: '/Monitor_card/Mcard1.webp',
        category: 'monitor'
    },
    {
        id: 8,
        name: 'Monitor 3',
        price: 999990,
        description: 'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno',
        stock: 8,
        img: '/Monitor_card/Mcard1.webp',
        category: 'monitor'
    },
    {
        id: 9,
        name: 'Monitor 4',
        price: 999990,
        description: 'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno',
        stock: 8,
        img: '/Monitor_card/Mcard1.webp',
        category: 'monitor'
    },
];

export const getProducts = () => {
    return new Promise((res) => {
        setTimeout(() => {
            res(products);
        }, 3000);
    });
};

export const getProductById = (id) => {
    return new Promise((res) => {
        const productoFiltrado = products.find((product) => product.id === parseInt(id));
        setTimeout(() => {
            res(productoFiltrado);
        }, 2000);
    });
};

export const getProductByCategory = (category) => {
    return new Promise((res) => {
        const productosFiltrados = products.filter((product) => product.category === category);
        setTimeout(() => {
            res(productosFiltrados);
        }, 2000);
    });
};