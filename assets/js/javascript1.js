//indice de masa corporal peso, altura ,
function main(){
     let peso =document.forms[0].elements[0].value;
     let estatura =document.forms[0].elements[1].value;
     let numero =document.forms[0].elements[2].value;
      
     masa(peso,estatura);
     serie(numero);

}

function masa (kg,h,){
  let resultado;
  resultado=parseFloat(kg/(h*h));
  console.log(resultado.toFixed(2));
} 

function serie (n){
    let resultado;
    resultado =(n*(n+1))/2;
    console.log(resultado);
}