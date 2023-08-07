console.log(`Trabalhando com condicionais`)
const listaDesDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`
);
const idadeComprador = 17;
const estaAcompanhada = false;
const temPassagemComprada = true;

console.log("Destinos possíveis");
console.log(listaDeDestinos);

// if(idadeCompradoer >= 18){
//     console.log("Comprador maior de idade");
// listaDesDestinos.splice(1,1); //removendo um item
// }else if(estaACompanhada == true){console.log("Comprador está acompanhado");
//     listaDesDestinos.splice(1,1);}
//     else {
//     console.log("Não é maior de idade e não posso vender");
//     }


if(idadeComprador >= 18 || estaACompanhada == true
    ) {
    console.log("Boa Viagem!");
 listaDesDestinos.splice(2, 1); //removendo um item
 } else {
     console.log("Não é maior de idade e não posso vender");
     }


     console.log("Embarque: \n\n")
     if(idadeComprador >=18 && passagemComprada){
        console.log("Boa Viagem");

     }else{ 
        console.log("Você não pode embarcar");
     }

     console.log(listaDeDestinos);






