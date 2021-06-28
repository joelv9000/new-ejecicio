

var payasos = parseInt(prompt("numero de payasos"));
var munecas = parseInt(prompt("numero de muñecas"));

function main (payasos,munecas){
    pesoPaquete(payasos,munecas);
    let pesoT=pesoPaquete(payasos,munecas);
    let numPaquetes=(pesoPaquete(payasos,munecas))/1000;
    if((numPaquetes*1000)%1000 !=0){
        numPaquetes=parseInt(numPaquetes)+1;
        }
        console.log(numPaquetes);
        console.log(pesoT/1000);

}

function pesoPaquete(payasos,munecas){
    let pesoTotal =(payasos*112)+(munecas*75);
    return pesoTotal;
}
main(payasos,munecas);