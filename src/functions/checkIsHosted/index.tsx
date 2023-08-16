import api from "@/services/api";

const checkReserva = api.get('/reserva');
console.log(checkReserva);