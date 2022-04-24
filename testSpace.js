const productos = [{
    id: "aAvVbBnNdDeeEfFggG025698",
    nombre: "camiseta",
    precio: 500
},
{
    id: "aAvVbBnNdDeasERggG025698",
    nombre: "camiseta",
    precio: 2000
},
{
    id: "aAvvvaaNdDeasERggG025698",
    nombre: "camiseta",
    precio: 1500
}]



const productosConDescuento = productos.map(function (elementos) {
    if (elementos.precio < 1000) return elementos 
return {
    ...elementos, 
    precio: elementos.precio * 0.9 
    }
})
console.log(productosConDescuento)