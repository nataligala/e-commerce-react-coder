import veganesa from "../../src/assets/img_productos/veganesa.png"
import alfajorDll from "../../src/assets/img_productos/alfajor_dll.png"
import nuggets from "../../src/assets/img_productos/nuggets.jpg"
import bebibleChocolatada from "../../src/assets/img_productos/bebible-chocolatada.png"
import bebibleMaracuya from "../../src/assets/img_productos/bebible-maracuya.png"
import bebibleVainilla from "../../src/assets/img_productos/bebible-vainilla.png"
import bebibleFrutosRojos from "../../src/assets/img_productos/bebible-frutos-rojos.png"
import bigClassic from "../../src/assets/img_productos/big-classic.png"
import alfajorChocolate from "../../src/assets/img_productos/alfajor-chocolate.png"
import pizzaMuzza from "../../src/assets/img_productos/pizza-sin-tacc.jpg"
import chickenVil from "../../src/assets/img_productos/chickenvil.png"
import danboEnFetas from "../../src/assets/img_productos/queso-en-fetas-danbo.jpg"
import alfajorMani from "../../src/assets/img_productos/alfajor-Mani.png"
import pizzaProvolone from "../../src/assets/img_productos/pizza-provolone.png"
import cheddarFetas from "../../src/assets/img_productos/cheddar-fetas-flowpack.jpg"
import karnevilParty from "../../src/assets/img_productos/karnevil-party.jpg"
import postrecitoDll from "../../src/assets/img_productos/postrecito_dll.png"
import postrecitoChoco from "../../src/assets/img_productos/postrecito_chocolate.png"
import fantastiqueFinas from "../../src/assets/img_productos/fantastique-finas-hierbas.jpg"
import fantastiqueTrad from "../../src/assets/img_productos/fantastique-tradicional.jpg"

export const stock = [
    {
        id: 1,
        name: "VEGANESA",
        price: 359,
        img: veganesa,
        alt: "Veganesa",
        weight: "CONT. NETO: 310g",
        desc: "Aderezo a base de aceite de girasol, sabor mayonesa, libre de gluten, sin tacc.",
        ingredients: "Agua, aceite de girasol, vinagre blanco, almidón de maíz, ARO: idéntico al natural mayonesa.",
        traces: "PUEDE CONTENER ALMENDRAS Y CASTAÑAS DE CAJÚ.",
        glutenfree: "CERTIFICADO SIN TACC.",
        category: 'aderezos',
        stock: 15
    },
    {
        id: 2,
        name: "ALFAJOR DE DULCE DE LECHE SIN TACC x60gr",
        price: 125,
        img: alfajorDll,
        alt: "Alfajor de Dulce De Leche Sin Tacc",
        weight: "(60gr x unidad)",
        desc: "Delicioso Alfajor de Dulce de Leche de 60gr. Trae 12 Unidades por caja.",
        ingredients: "Untable endulzado de almendras sabor dulce de leche*, galletitas dulces sabor vainilla, coco rallado.*(almendras, porotos blancos, agua, proteína de arveja, azúcar, jarabe de glucosa, sal, EST: agar-agar, ARO: dulce de leche).",
        traces: "CONTIENE ALMENDRAS, DERIVADOS DE SOJA Y SULFITOS. PUEDE CONTENER LECHE, HUEVO, CASTAÑAS DE CAJÚ, NUECES Y MANÍ.",
        glutenfree: "CERTIFICADO SIN TACC.",
        category: 'alfajores',
        stock: 15
    },
    {
        id: 3,
        name: "NUGGETS SABOR POLLO",
        price: 564,
        img: nuggets,
        alt: "NUGGETS SABOR POLLO",
        desc: "Lorem ipsum",
        category: 'carnes vegetales',
        stock: 15
    },
    {
        id: 4,
        name: "BEBIBLE DE CHOCOLATADA",
        price: 564,
        img: bebibleChocolatada,
        alt: "BEBIBLE DE CHOCOLATADA",
        desc: "Lorem ipsum",
        category: 'bebibles',
        stock: 15
    },
    {
        id: 5,
        name: "BEBIBLE DE MARACUYA",
        price: 564,
        img: bebibleMaracuya,
        alt: "BEBIBLE DE MARACUYA",
        desc: "Lorem ipsum",
        category: 'bebibles',
        stock: 15
    },
    {
        id: 6,
        name: "BEBIBLE DE VAINILLA",
        price: 564,
        img: bebibleVainilla,
        alt: "BEBIBLE DE VAINILLA",
        desc: "Lorem ipsum",
        category: 'bebibles',
        stock: 15
    },
    {
        id: 7,
        name: "BEBIBLE DE FRUTOS ROJOS",
        price: 564,
        img: bebibleFrutosRojos,
        alt: "BEBIBLE DE FRUTOS ROJOS",
        desc: "Lorem ipsum",
        category: 'bebibles',
        stock: 15
    },
    {
        id: 8,
        name: "BIG CLASSIC (2 unidades de 115g.)",
        price: 564,
        img: bigClassic,
        alt: "BIG CLASSIC",
        desc: "Lorem ipsum",
        category: 'carnes vegetales',
        stock: 15
    },
    {
        id: 9,
        name: "ALFAJOR DE CHOCOLATE SIN TACC x60gr",
        price: 564,
        img: alfajorChocolate,
        alt: "ALFAJOR DE CHOCOLATE SIN TACC",
        desc: "Lorem ipsum",
        category: 'alfajores',
        stock: 15
    },
    {
        id: 10,
        name: "PIZZA SIN TACC CON MUZZALMENDRA",
        price: 564,
        img: pizzaMuzza,
        alt: "PIZZA SIN TACC CON MUZZALMENDRA",
        desc: "Lorem ipsum",
        category: 'pizzas',
        stock: 15
    },
    {
        id: 11,
        name: "CHICKENVIL PARTY (4 unidades)",
        price: 564,
        img: chickenVil,
        alt: "CHICKENVIL PARTY (4 unidades)",
        desc: "Lorem ipsum",
        category: 'carnes vegetales',
        stock: 15
    },
    {
        id: 12,
        name: "DANBO EN FETAS",
        price: 564,
        img: danboEnFetas,
        alt: "DANBO EN FETAS",
        desc: "Lorem ipsum",
        category: 'quesos',
        stock: 15
    },
    {
        id: 13,
        name: "ALFAJOR DE CHOCOLATE, RELLENO CON PASTA DE MANÍ",
        price: 564,
        img: alfajorMani,
        alt: "ALFAJOR DE CHOCOLATE, RELLENO CON PASTA DE MANÍ",
        category: 'alfajores',
        stock: 15
    },
    {
        id: 14,
        name: "PIZZA PROVOLONE",
        price: 564,
        img: pizzaProvolone,
        alt: "PIZZA PROVOLONE",
        category: 'pizzas',
        stock: 15,
    },
    {
        id: 15,
        name: "CHEDDAR EN FETAS",
        price: 564,
        img: cheddarFetas,
        alt: "CHEDDAR EN FETAS",
        category: 'quesos',
        stock: 15
    },
    {
        id: 16,
        name: "KARNEVIL PARTY (4 unidades)",
        price: 564,
        img: karnevilParty,
        alt: "KARNEVIL PARTY (4 unidades)",
        desc: "Lorem ipsum",
        category: 'carnes vegetales',
        stock: 15
    },
    {
        id: 17,
        name: "POSTRECITO DULCE DE LECHE",
        price: 564,
        img: postrecitoDll,
        alt: "POSTRECITO DULCE DE LECHE",
        desc: "Lorem ipsum",
        category: 'postres',
        stock: 15
    },
    {
        id: 18,
        name: "POSTRECITO CHOCOLATE",
        price: 564,
        img: postrecitoChoco,
        alt: "POSTRECITO CHOCOLATE",
        desc: "Lorem ipsum",
        category: 'postres',
        stock: 15
    },
    {
        id: 19,
        name: "FANTASTIQUE FINAS HIERBAS",
        price: 564,
        img: fantastiqueFinas,
        alt: "FANTASTIQUE FINAS HIERBAS",
        desc: "Lorem ipsum",
        category: 'untables',
        stock: 15
    },
    {
        id: 20,
        name: "FANTASTIQUE TRADICIONAL",
        price: 564,
        img: fantastiqueTrad,
        alt: "fantastiqueFinas",
        desc: "Lorem ipsum",
        category: 'untables',
        stock: 15
    },
    
]