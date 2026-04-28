/**Define un tipo Producto que incluya id, nombre, cantidad y categoría ("alimentos",
"tecnología", "papelería").
Crea una función que evalúe si un producto tiene bajo stock dependiendo de la
categoría:
alimentos: menos de 20 unidades
tecnología: menos de 5 unidades
papelería: menos de 50 unidades */

type CategoriaProducto = "alimentos" | "tecnología" | "papelería";

type Producto = {
    id: number;
    nombre: string;
    cantidad: number;
    categoria: CategoriaProducto;
};

function tieneBajoStock(producto: Producto): boolean {
    switch (producto.categoria) {
        case "alimentos":
            return producto.cantidad < 20;

        case "tecnología":
            return producto.cantidad < 5;

        case "papelería":
            return producto.cantidad < 50;

        default:
            return false;
    }
}

const inventario: Producto[] = [
    { id: 1, nombre: "Manzanas", cantidad: 15, categoria: "alimentos" },
    { id: 2, nombre: "Laptop", cantidad: 10, categoria: "tecnología" },
    { id: 3, nombre: "Cuadernos", cantidad: 30, categoria: "papelería" }
];

inventario.forEach(producto => {
    if (tieneBajoStock(producto)) {
        console.log(`El producto "${producto.nombre}" tiene bajo stock (${producto.cantidad} unidades).`);
    } else {
        console.log(` El producto "${producto.nombre}" tiene stock suficiente.`);
    }
});