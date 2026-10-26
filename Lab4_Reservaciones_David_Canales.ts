// Nombre: Rudis David Canales ferman

// 1. Organiza los datos
interface Reservacion {
    id: number;
    cliente: string;
    personas: number;
    zona: string; 
}


let reservaciones: Reservacion[] = [
    { id: 1, cliente: "Carlos Pérez", personas: 3, zona: "Interior" },
    { id: 2, cliente: "Ana Gómez", personas: 6, zona: "Interior" },
    { id: 3, cliente: "Luis Rodríguez", personas: 2, zona: "Terraza" },
    { id: 4, cliente: "María Torres", personas: 5, zona: "Terraza" }
];

console.log("=== LISTA INICIAL DE RESERVACIONES ===");
console.log(reservaciones);

function buscarReservacionPorId(lista: Reservacion[], idBuscado: number): void {
    const encontrada = lista.find(res => res.id === idBuscado);
    
    if (encontrada) {
        console.log(`-> ¡Encontrado! Reservación ID ${idBuscado}:`, encontrada);
    } else {
        console.log(`-> No existe ninguna reservación con el identificador ${idBuscado}.`);
    }
}

// 2. Registra nuevas reservaciones
reservaciones.push({ id: 5, cliente: "Jorge Mendoza", personas: 4, zona: "Interior" });

reservaciones.unshift({ id: 0, cliente: "Sofía Benítez", personas: 2, zona: "Terraza" });

console.log("\n=== LISTA DESPUÉS DE REGISTRAR (NUEVA PRIORITARIA Y NORMAL) ===");
console.log(reservaciones);


// 3. Atiende una reservación
console.log("\n=== ATENCIÓN DE RESERVACIÓN ===");
const atendida = reservaciones.shift();

if (atendida !== undefined) {
    console.log(`Cliente atendido: ${atendida.cliente} (${atendida.personas} personas).`);
} else {
    console.log("La lista de reservaciones está vacía.");
}

// 4. Busca y consulta
console.log("\n=== BÚSQUEDA POR IDENTIFICADOR ===");

console.log("Caso 1: Buscando un ID existente (ID: 3)...");
buscarReservacionPorId(reservaciones, 3);

console.log("Caso 2: Buscando un ID inexistente (ID: 99)...");
buscarReservacionPorId(reservaciones, 99);


console.log("\n=== FILTRADO DE GRUPOS GRANDES EN TERRAZA ===");

const terrazaGrandes = reservaciones.filter(res => res.zona === "Terraza" && res.personas >= 5);

if (terrazaGrandes.length > 0) {
    console.log("Reservaciones de Terraza con 5 o más personas:", terrazaGrandes);
} else {
    console.log("No se encontraron reservaciones en Terraza con 5 o más personas.");
}

// 6. Comprueba el estado final
console.log("\n=== COMPROBACIÓN DEL ESTADO FINAL ===");

console.log(`Reservaciones pendientes (${reservaciones.length}):`, reservaciones);

console.log(`Cantidad de coincidencias del filtro (Terraza >= 5 personas): ${terrazaGrandes.length}`);

const cantidadAntesDeFiltrar = reservaciones.length;
const pruebaFiltro = reservaciones.filter(res => res.zona === "Terraza" && res.personas >= 5);
const cantidadDespuesDeFiltrar = reservaciones.length;

console.log(`Cantidad de elementos en el arreglo antes de filtrar: ${cantidadAntesDeFiltrar}`);
console.log(`Cantidad de elementos en el arreglo después de filtrar: ${cantidadDespuesDeFiltrar}`);
console.log(`¿El filtro conservó el arreglo original intacto?: ${cantidadAntesDeFiltrar === cantidadDespuesDeFiltrar}`);