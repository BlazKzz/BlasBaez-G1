export const products = [
    // Notebooks Gamer
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
    // Fin Notebooks Gamer
    
    // Monitores
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
    // Fin Monitores

    // Notebooks para estudio
    {
        id: 10,
        name: 'Estudio1',
        price: 200,
        description:'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno',
        stock: 3,
        img: '/Nestudio/Estudio1.png',
        category: 'estudio'
    },
    {
        id: 11,
        name: 'Estudio2',
        price: 210,
        description:'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno',
        stock: 4,
        img: '/Nestudio/Estudio2.png',
        category: 'estudio'
    },
    {
        id: 12,
        name: 'Estudio3',
        price: 207,
        description:'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno',
        stock: 2,
        img: '/Nestudio/Estudio3.png',
        category: 'estudio'
    },
    {
        id: 13,
        name: 'Estudio4',
        price: 220,
        description:'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno',
        stock: 3,
        img: '/Nestudio/Estudio4.png',
        category: 'estudio'
    },
        // Fin Notebooks para estudio

        // Notebooks Convertibles
    {
        id: 14,
        name: 'convertible1',
        price: 270,
        description:'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno',
        stock: 4,
        img: '/Nconvertible/convertible1.png',
        category: 'convertible',
    },
    {
        id: 15,
        name: 'convertible2',
        price: 270,
        description:'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno',
        stock: 5,
        img: '/Nconvertible/convertible2.png',
        category: 'convertible',
    },
    {
        id: 16,
        name: 'convertible3',
        price: 300,
        description:'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno',
        stock: 2,
        img: '/Nconvertible/convertible3.jpg',
        category: 'convertible',
    },
    {
        id: 17,
        name: 'convertible4',
        price: 350,
        description:'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno',
        stock: 3,
        img: '/Nconvertible/convertible4.jpg',
        category: 'convertible',
    },
            // Fin Notebooks Convertibles

            // Celulares Samsung
    

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