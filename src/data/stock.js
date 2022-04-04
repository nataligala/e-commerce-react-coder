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
import muzzalmendra from "../../src/assets/img_productos/muzzalmendra.png"
import cremoso from "../../src/assets/img_productos/cremoso.png"
import hummus from "../../src/assets/img_productos/hummus.png"
import lechoc from "../../src/assets/img_productos/lechoc.png"

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
        price: 586,
        img: nuggets,
        alt: "NUGGETS SABOR POLLO",
        weight: "300gr",
        desc: "Bocaditos sabor a pollo.",
        ingredients: "Agua, harina de soja texturizada, arroz integral inflado, aceite de girasol alto oleico, metilcelulosa, jugo de limón, fibra de maíz, sal, ARO: idéntico al natural pollo" ,
        traces: "CONTIENE ALMENDRAS, DERIVADOS DE SOJA Y SULFITOS. PUEDE CONTENER LECHE, HUEVO, CASTAÑAS DE CAJÚ, NUECES Y MANÍ.",
        glutenfree: "CERTIFICADO SIN TACC.",
        category: 'carnes vegetales',
        stock: 10
    },
    {
        id: 4,
        name: "BEBIBLE DE CHOCOLATADA",
        price: 194,
        img: bebibleChocolatada,
        alt: "BEBIBLE DE CHOCOLATADA",
        weight: "200ml",
        desc: "BEBIBLE DE CHOCOLATADA",
        ingredients: "Agua, almendras, azúcar, cacao, sal, EST: goma xántica, EMU: lecitina de girasol.",
        traces: "CONTIENE ALMENDRAS. PUEDE CONTENER CASTAÑAS DE CAJÚ.",
        glutenfree: "CERTIFICADO SIN TACC.",
        category: 'bebibles',
        stock: 15
    },
    {
        id: 5,
        name: "BEBIBLE DE MARACUYA",
        price: 233,
        img: bebibleMaracuya,
        alt: "BEBIBLE DE MARACUYA",
        weight: "200ml",
        desc: "BEBIBLE DE MARACUYA",
        ingredients: "Bebida de almendras (agua, almendras), maracuya, concentrado de uva, aceite de coco, fécula de papa, proteína de arveja, inulina orgánica Bacillus coagulans GBI-30 6086, AC REG: ácido cítrico." ,
        traces: "CONTIENE ALMENDRAS. PUEDE CONTENER CASTAÑAS DE CAJÚ.",
        glutenfree: "CERTIFICADO SIN TACC.",
        category: 'bebibles',
        stock: 15
    },
    {
        id: 6,
        name: "BEBIBLE DE VAINILLA",
        price: 233,
        img: bebibleVainilla,
        alt: "BEBIBLE DE VAINILLA",
        weight: "200ml",
        desc: "BEBIBLE DE VAINILLA",
        ingredients: "Bebida de almendras (agua, almendras), concentrado de uva, aceite de coco, fécula de papa, proteína de arveja, inulina orgánica Bacillus coagulans GBI-30 6086, AC REG: ácido cítrico, ARO: vainilla." ,
        traces: "CONTIENE ALMENDRAS. PUEDE CONTENER CASTAÑAS DE CAJÚ.",
        glutenfree: "CERTIFICADO SIN TACC.",
        category: 'bebibles',
        stock: 15
    },
    {
        id: 7,
        name: "BEBIBLE DE FRUTOS ROJOS",
        price: 233,
        img: bebibleFrutosRojos,
        alt: "BEBIBLE DE FRUTOS ROJOS",
        weight: "200ml",
        desc: "BEBIBLE DE FRUTOS ROJOS",
        ingredients: "Bebida de almendras (agua, almendras), mix de frutos rojos, concentrado de uva, aceite de coco, fécula de papa, proteína de arveja, inulina orgánica Bacillus coagulans GBI-30 6086, AC REG: ácido cítrico." ,
        traces: "CONTIENE ALMENDRAS. PUEDE CONTENER CASTAÑAS DE CAJÚ.",
        glutenfree: "CERTIFICADO SIN TACC.",
        category: 'bebibles',
        stock: 15
    },
    {
        id: 8,
        name: "BIG CLASSIC (2 unidades de 115g.)",
        price: 281,
        img: bigClassic,
        alt: "BIG CLASSIC",
        weight: "2U - 230gr" ,
        desc: "HAMBURGUESA BIG CLASSIC - A base de Soja Orgánica",
        ingredients:"Agua, texturizado de soja orgánica, aceite de girasol alto oleico, aceite vegetal, metilcelulosa fibra cítrica, sal, cloruro de potasio, levadura, jugo de limón COL: Caramelo ARO: Idéntico al natural carne." ,
        traces: "CONTIENE DERIVADOS DE SOJA. PUEDE CONTENER SULFITOS, ALMENDRAS Y CASTAÑAS DE CAJÚ.",
        glutenfree: "CERTIFICADO SIN TACC.",
        category: 'carnes vegetales',
        stock: 10
    },
    {
        id: 9,
        name: "ALFAJOR DE CHOCOLATE SIN TACC",
        price: 564,
        img: alfajorChocolate,
        alt: "ALFAJOR DE CHOCOLATE SIN TACC",
        weight: "60gr",
        desc: "Delicioso Alfajor Negro de Chocolate de 60gr. Apto Kosher. 100% Plant Based",
        ingredients: "Untable endulzado de almendras sabor dulce de leche*, galletitas dulces sabor chocolate, baño de repostería semiamargo. *(almendras, porotos blancos, agua, proteína de arveja, azúcar, jarabe de glucosa, sal, EST: agar-agar, ARO: dulce de leche).",
        traces: "CONTIENE ALMENDRAS Y DERIVADOS DE SOJA Y SULFITO. PUEDE CONTENER HUEVO, LECHE, CASTAÑAS DE CAJÚ, NUECES Y MANÍ" ,
        glutenfree: "CERTIFICADO SIN TACC.",
        category: 'alfajores',
        stock: 10
    },
    {
        id: 10,
        name: "PIZZA SIN TACC CON MUZZALMENDRA",
        price: 419,
        img: pizzaMuzza,
        alt: "PIZZA SIN TACC CON MUZZALMENDRA",
        weight: "240 gr" ,
        desc: "PIZZA SIN TACC CON MUZZALMENDRA.",
        ingredients: "Alimento vegetal a Base de Almendras sabor mozzarella , agua. harina de arroz, fécula de mandioca, almidón de maíz , tomate triturado, aceite de girasol, levadura, sal, cebolla, pimienta, oregano, azúcar, est, goma xantica.",
        traces: "PUEDE CONTENER LECHE, HUEVO, DERIVADOS DE SOJA, SULFITOS Y CASTAÑAS DE CAJU.",
        glutenfree: "CERTIFICADO SIN TACC.",
        category: 'pizzas',
        stock: 15
    },
    {
        id: 11,
        name: "CHICKENVIL PARTY (4 unidades)",
        price: 625,
        img: chickenVil,
        alt: "CHICKENVIL PARTY (4 unidades)",
        weight: "4 UNIDADES DE 80g c/u: 320gr" ,
        desc: "Medallón a base de arveja, sabor pollo",
        ingredients: "Agua, proteína texturizada de arveja, aceite de girasol alto oleico, meticelusa, fibra de maíz, jugo de limón, sal, ARO: Idéntico al natural pollo. PUEDE CONTENER ALMENDRAS, CASTAÑAS DE CAJÚ Y DERIVADOS DE SOJA." ,
        traces: "PUEDE CONTENER LECHE, HUEVO, DERIVADOS DE SOJA, SULFITOS Y CASTAÑAS DE CAJU.",
        glutenfree: "CERTIFICADO SIN TACC.",
        category: 'carnes vegetales',
        stock: 15
    },
    {
        id: 12,
        name: "DANBO EN FETAS",
        price: 564,
        img: danboEnFetas,
        alt: "DANBO EN FETAS",
        weight: "200gr",
        desc: "DANBO EN FETAS",
        ingredients: "Agua, almendras, fécula de mandioca, fécula de papa, aceite vegetal, levadura, jugo de limón, especias, sal, ARO: Danbo." ,
        traces: "CONTIENE ALMENDRAS. PUEDE CONTENER DERIVADOS DE SOJA Y CASTAÑAS DE CAJÚ.",
        glutenfree: "CERTIFICADO SIN TACC.",
        category: 'quesos',
        stock: 5
    },
    {
        id: 13,
        name: "ALFAJOR DE CHOCOLATE, RELLENO CON PASTA DE MANÍ",
        price: 564,
        img: alfajorMani,
        alt: "ALFAJOR DE CHOCOLATE, RELLENO CON PASTA DE MANÍ",
        weight: "60gr" ,
        desc: "Relleno con pasta de maní, cubierto con baño de repostería semiamargo",
        ingredients: "Pasta de maní (Maní, azúcar, jarabe de glucosa), galletitas dulces sabor chocolate, baño de repostería semiamargo",
        traces: "CONTIENE DERIVADOS DE SOJA Y MANÍ, PUEDE CONTENER ALMENDRAS, CASTAÑAS DE CAJÚ, NUECES, LECHE, HUEVOS Y SULFITOS" ,
        glutenfree: "CERTIFICADO SIN TACC.",
        category: 'alfajores',
        stock: 10
    },
    {
        id: 14,
        name: "PIZZA PROVOLONE",
        price: 817,
        img: pizzaProvolone,
        alt: "PIZZA PROVOLONE",
        weight: "480gr" ,
        desc: "PIZZA CON QUESO PROVOLONE" ,
        ingredients: "Harina integral enriquecida según Ley 25.630*, agua, alimento vegetal a base de almendras y castañas, sabor provolone, tomates pelados perita enteros, aceite vegetal, sal, orégano, levadura, albahaca deshidratada. *(con hierro 30mg/kg, ácido fólico 2,2mg/kg, tiamina 6,3mg/kg, riboflavina 1,3 mg/kg y niacina 13mg/kg)",
        traces: "CONTIENE DERIVADOS DE TRIGO, ALMENDRAS Y CASTAÑAS DE CAJÚ. PUEDE CONTENER DERIVADOS DE LECHE, DE HUEVO Y DE SOJA.",
        glutenfree: "CERTIFICADO SIN TACC.",
        category: 'pizzas',
        stock: 10,
    },
    {
        id: 15,
        name: "CHEDDAR EN FETAS",
        price: 383,
        img: cheddarFetas,
        alt: "CHEDDAR EN FETAS",
        weight: "200gr",
        desc: "Queso cheddar en fetas.",
        ingredients: "Agua, almendras, fécula de mandioca, fécula de papa, aceite vegetal, levadura, jugo de limón, especias, sal, ARO: Cheddar." ,
        traces: "CONTIENE ALMENDRAS. PUEDE CONTENER DERIVADOS DE SOJA Y CASTAÑAS DE CAJÚ.",
        glutenfree: "CERTIFICADO LIBRE DE ALÉRGENO DE LECHE Y TACC." ,
        category: 'quesos',
        stock: 5
    },
    {
        id: 16,
        name: "KARNEVIL PARTY (4 unidades)",
        price: 626,
        img: karnevilParty,
        alt: "KARNEVIL PARTY (4 unidades)",
        weight: "80gr por unidad: 320gr totales.",
        desc: "Medallón a Base de Arvejas.",
        ingredients: "Agua, proteína texturizada de arveja, aceite de coco, aceite de girasol alto oleico, meticelulosa, inulina, jugo de limón, sal, ARO: carne.",
        traces: "PUEDE CONTENER ALMENDRAS Y CASTAÑAS DE CAJÚ." ,
        glutenfree: "CERTIFICADO SIN TACC.",
        category: 'carnes vegetales',
        stock: 10
    },
    {
        id: 17,
        name: "POSTRECITO DULCE DE LECHE",
        price: 564,
        img: postrecitoDll,
        alt: "POSTRECITO DULCE DE LECHE",
        weight: "170 ml",
        desc: "El más rico postrecito vegano (junto con el de choco), ideal para compartir en familia o con amigos.",
        ingredients: "Agua, almendras, azúcar, aceite de coco, almidón, sal, EST: goma guar, EMU: lecitina de girasol, ARO: dulce de leche.",
        traces: "CONTIENE ALMENDRAS. PUEDE CONTENER CASTAÑAS DE CAJÚ.",
        glutenfree: "CERTIFICADO SIN TACC.",
        category: 'postres',
        stock: 15
    },
    {
        id: 18,
        name: "POSTRECITO CHOCOLATE",
        price: 564,
        img: postrecitoChoco,
        alt: "POSTRECITO CHOCOLATE",
        weight: "170 ml",
        desc: "El más rico postrecito vegano (junto con el de dulce de leche), ideal para compartir en familia o con amigos.",
        ingredients: "Agua, almendras, azúcar, aceite de coco, almidón, cacao amargo, sal, EST: goma guar, EMU: lecitina de girasol.",
        traces: "CONTIENE ALMENDRAS. PUEDE CONTENER CASTAÑAS DE CAJÚ.",
        glutenfree: "CERTIFICADO SIN TACC.",
        category: 'postres',
        stock: 15
    },
    {
        id: 19,
        name: "FANTASTIQUE FINAS HIERBAS",
        price: 272,
        img: fantastiqueFinas,
        alt: "FANTASTIQUE FINAS HIERBAS",
        weight: "200gr.",
        desc: "FANTASTIQUE DE FINAS HIERBAS - Untable ",
        ingredients: "Agua, almendras, aceite de coco, almidón, finas hierbas, sal, acreg: ácido cítrico, esp: gomar guar." ,
        traces: "CONTIENE ALMENDRAS. PUEDE CONTENER CASTAÑAS DE CAJÚ." ,
        glutenfree: "CERTIFICADO LIBRE DE ALÉRGENO DE LECHE.",
        category: 'untables',
        stock: 10
    },
    {
        id: 20,
        name: "FANTASTIQUE TRADICIONAL",
        price: 564,
        img: fantastiqueTrad,
        alt: "FANTASTIQUE TRADICIONAL",
        weight: "200gr.",
        desc: "FANTASTIQUE TRADICIONAL - Untable",
        ingredients: "Agua, almendras, aceite de coco, almidón, sal, acreg: ácido cítrico, esp: gomar guar.",
        traces: "CONTIENE ALMENDRAS. PUEDE CONTENER CASTAÑAS DE CAJÚ.",
        glutenfree: "CERTIFICADO SIN TACC.",
        category: 'untables',
        stock: 15
    },
    {
        id: 21,
        name: "MUZZALMENDRA",
        price: 642,
        img: muzzalmendra,
        alt: "MUZZALMENDRA",
        weight: "500gr" ,
        desc: "Queso alternativo a base de almendra. El preferido por todos. ",
        ingredients: "Agua, almendras, aceite de coco, fécula de mandioca, arroz, levadura, especias, sal, ARO: mozzarella.",
        traces: "CONTIENE ALMENDRAS. PUEDE CONTENER CASTAÑAS DE CAJÚ Y DERIVADOS DE SOJA." ,
        glutenfree: "CERTIFICADO SIN TACC.",
        category: 'quesos',
        stock: 10
    },
    {
        id: 22,
        name: "CREMOSO",
        price: 642,
        img: cremoso,
        alt: "CREMOSO",
        weight: "500gr" ,
        desc: "Queso alternativo a base de almendra. Sabor suave, textura cremosa, delicioso!. ",
        ingredients: "Agua, almendras, aceite de coco, fécula de mandioca, arroz, levadura, especias, sal, ARO: crema.",
        traces: "CONTIENE ALMENDRAS. PUEDE CONTENER CASTAÑAS DE CAJÚ Y DERIVADOS DE SOJA." ,
        glutenfree: "CERTIFICADO SIN TACC.",
        category: 'quesos',
        stock: 10
    },
    {
        id: 23,
        name: "HUMMUS DE GARBANZOS",
        price: 316,
        img: hummus,
        alt: "HUMMUS DE GARBANZOS",
        weight: "220gr" ,
        desc: "Aderezo hummus de garbanzos.",
        ingredients: "Garbanzos, agua, aceite de oliva, jugo de limón, semillas de sésamo blanco, sal, especias.",
        traces: "PUEDE CONTENER ALMENDRAS, CASTAÑAS DE CAJÚ Y DERIVADOS DE SOJA." ,
        glutenfree: "CERTIFICADO SIN TACC.",
        category: 'aderezos',
        stock: 10
    },
    {
        id: 24,
        name: "LE CHOC",
        price: 316,
        img: lechoc,
        alt: "LE CHOC",
        weight: "48gr." ,
        desc: "BARRA DE BAÑO DE REPOSTERIA SEMIAMARGO RELLENA DE UNTABLE DE ALMENDRAS,.",
        ingredients: "Untable endulzado de almendras (almendras, porotos blancos, agua, proteína de arvejas, azúcar, jarabe de glucosa, sal, EST: agar-agar, ARO.: dulce de leche), baño de repostería semi-amargo (azúcar, aceite vegetal, cacao en polvo, EMU: lecitina de soja, ARO: esencia de vainilla).",
        traces: "CONTIENE ALMENDRAS, SULFITOS Y DERIVADOS DE SOJA. PUEDE CONTENER CASTAÑAS DE CAJÚ, MANÍ, LECHE Y DERIVADOS." ,
        glutenfree: "CERTIFICADO SIN TACC.",
        category: 'postres',
        stock: 10
    },
]