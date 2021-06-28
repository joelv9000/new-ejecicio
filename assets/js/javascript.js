/* Recibes la tarea de construir un sistema de alarma para una fábrica de champús. Tu sistema recibe las siguientes variables: temperatura ambiente, humedad ambiental, número de trabajadores en la planta y nivel de líquido en los tanques. La alarma debe sonar siempre que la temperatura ambiente sea superior o inferior a los umbrales, si la humedad es superior al 50%, si hay más de 100 trabajadores en la planta al mismo tiempo, o si el nivel del líquido es superior al 90% (para evitar el desbordamiento).
umbral superior 90% umbral inferior 30%*/

function main (temp,ambiente,humedad,numtrabajadores,nivelliquido){
var form = document.forms[0];
form.elements[0].nodeValue;
verificarParametros(temp,ambiente,humedad,numtrabajadores,nivelliquido);
}

function verificarParametros(temp,ambiente,humedad,numtrabajadores,nivelliquido){
    if(temp>.9 || temp<.3){
       alert("Temperatura excedida");
    }
    if(humedad>.5){
       alert("la humedad exedida");

    }
    if(numtrabajadores>100){
       alert("ocurrencia excedida");
    }
    if(nivelliquido>.9){
        alert("Nivel excedido");
    }
}

