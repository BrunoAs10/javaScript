let nombreProductoA = 'Tortillas De Harina de Maiz'
let precioProductoA = 350
let stockProductoA = 10

let nombreProductoB ="Tortillas de Harina de Trigo"
let precioProductoB = 300
let stockProductoB = 10

let nombreProductoC = "Tortillas de Harina de Trigopara Burritos"
let precioProductoC = 300
let stockProductoC = 10

let nombreProductoD = "Nachos de Harina de Maiz"
let precioProductoD = 250
let stockProductoD = 10
 
let nombreProductoE = "Salsa Tabasco"
let precioProductoE = 750
let stockProductoE = 10

let nombreProductoF = "Salsa Picante Valentina"
let precioProductoF = 1200
let stockProductoF = 10

let nombreProductoG = "Chiles Picantes Varios jalapeños,Habaneros, Arbol"
let precioProductoG = 250
let stockProductoG = 10

let precioTotal = 0

let opcion = prompt("Ingrese el num del producto que desea comprar: \n1 - Tortillas de Harina de Maíz x10unidades\n2 - Tortillas de Harina de Trigo x10unidades\n3 - Tortillas de Harina de Trigo para Burritos x5unidades\n4 - Nachos de Harina de Maiz 200g\n5 - Salsa Tabasco 60ml\n6 - Salsa Picante Valentina 370ml\n7 - Chiles Picantes Varios jalapeños,Habaneros, Arbol 250g\n8 - ESC")

while(opcion != "ESC"){
    
    if(opcion.toUpperCase() == '1'){
        let cantidadProductoA = prompt("ingrese que cantidad de " + nombreProductoA + " desea comprar:")
        if(cantidadProductoA <= stockProductoA){
            precioTotal = precioTotal + (cantidadProductoA * precioProductoA)
        }
        else{
            alert("Actualmente tenemos " + stockProductoA + " unidades de este producto")
        }
    }
    else if(opcion == '2'){
        let cantidadProductoB = prompt("ingrese que cantidad de " + nombreProductoB + " desea comprar:")
        precioTotal = precioTotal + (cantidadProductoB * precioProductoB)
    }
    else if(opcion == '3'){
        let cantidadProductoC = prompt("ingrese que cantidad de " + nombreProductoC + " desea comprar:")
        precioTotal = precioTotal + (cantidadProductoC * precioProductoC)
    }
    else if(opcion == '4'){
        let cantidadProductoD = prompt("ingrese que cantidad de " + nombreProductoD + " desea comprar:")
        precioTotal = precioTotal + (cantidadProductoD * precioProductoD)
    }
    else if(opcion == '5'){
        let cantidadProductoE = prompt("ingrese que cantidad de " + nombreProductoE + " desea comprar:")
        precioTotal = precioTotal + (cantidadProductoE * precioProductoE)
    }
    else if(opcion == '6'){
        let cantidadProductoF = prompt("ingrese que cantidad de " + nombreProductoF + " desea comprar:")
        precioTotal = precioTotal + (cantidadProductoF * precioProductoF)
    }
    else if(opcion == '7'){
        let cantidadProductoG = prompt("ingrese que cantidad de " + nombreProductoG + " desea comprar:")
        precioTotal = precioTotal + (cantidadProductoG * precioProductoG3)
    }
    else{
        alert("No tenemos ese producto a la venta")
    }
    opcion = prompt("Ingrese que es lo que desea comprar: \n1 - Tortillas de Harina de Maíz\n2 - Tortillas de Harina de Trigo\n3 - Tortillas de Harina de Trigo para Burritos\n4 - Nachos de Harina de Maiz\n5 - Salsa Tabasco\n6 - Salsa Picante Valentina\n7 - Chiles Picantes Varios jalapeños,Habaneros, Arbol\n8 - ESC")
}

if(precioTotal != 0){
    alert("El precio total es: " + precioTotal)
}