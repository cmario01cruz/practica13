
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


let inventario = [];
let siguienteId = 1;


function mostrarMenu() {
    console.log("\n===== SISTEMA DE INVENTARIO =====");
    console.log("1. Registrar un producto");
    console.log("2. Mostrar todos los productos");
    console.log("3. Buscar producto por ID");
    console.log("4. Salir");

    rl.question("Seleccione una opción: ", (opcion) => {
        switch (opcion) {
            case '1':
                registrarProducto();
                break;

            case '2':
                mostrarProductos();
                break;

            case '3':
                buscarProducto();
                break;

            case '4':
                console.log("\nSaliendo del sistema...");
                rl.close();
                break;

            default:
                console.log("\nOpción no válida. Intente nuevamente.");
                mostrarMenu();
                break;
        }
    });
}


function registrarProducto() {
    rl.question("Ingrese el nombre del producto: ", (nombre) => {
        rl.question("Ingrese el precio: ", (precio) => {
            rl.question("Ingrese el stock: ", (stock) => {

                
                let producto = {
                    id: siguienteId++,
                    nombre: nombre,
                    precio: parseFloat(precio),
                    stock: parseInt(stock)
                };

                inventario.push(producto);

                console.log("\n¡Producto registrado correctamente!");
                console.log("ID asignado: " + producto.id);

                mostrarMenu();
            });
        });
    });
}


function mostrarProductos() {
    if (inventario.length === 0) {
        console.log("\nEl inventario está vacío.");
    } else {
        console.log("\n===== LISTA DE PRODUCTOS =====");

        inventario.forEach((producto) => {
            console.log("---------------------------");
            console.log("ID: " + producto.id);
            console.log("Nombre: " + producto.nombre);
            console.log("Precio: $" + producto.precio);
            console.log("Stock: " + producto.stock);
        });
    }

    mostrarMenu();
}


function buscarProducto() {
    rl.question("Ingrese el ID del producto: ", (id) => {

        let producto = inventario.find(
            (p) => p.id === parseInt(id)
        );

        if (producto) {
            console.log("\n===== PRODUCTO ENCONTRADO =====");
            console.log("ID: " + producto.id);
            console.log("Nombre: " + producto.nombre);
            console.log("Precio: $" + producto.precio);
            console.log("Stock: " + producto.stock);
        } else {
            console.log("\nNo se encontró ningún producto con ese ID.");
        }

        mostrarMenu();
    });
}


mostrarMenu();
