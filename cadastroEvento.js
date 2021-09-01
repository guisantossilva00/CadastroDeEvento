// todas as Variaveis

let dataEvento = new Date(2021, 12, 30);

const dataAtual = new Date();

let tipoEvento ="Empreendorismo";

let numeroDeParticipantes = 125;

let idadeMinima = 18;

// verificar se a data está correta

if (dataEvento <= dataAtual) {
    console.log("Data invalida !");
    
} else {
    console.log("Data cadastrada com sucesso !");

};

// Mostra o tipo de Evento

console.log(tipoEvento);

// Verificar se o número de participante excedeu o limite

if (numeroDeParticipantes <= 150) {
    console.log("Número de participantes Cadastrado com sucesso !");

} else {
    console.log("Número de participantes excedeu o limite !")
}

// Mostrar idade minima

console.log(idadeMinima);

// Mostrar que o evento foi cadastrado

console.log("Evento cadsatrado com sucesso!");
