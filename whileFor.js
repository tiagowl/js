var contador = 0;

while(contador < 5){
    console.log(contador);
    ++contador;
}


var contador = 0;

while(contador < 5){
    if(contador === 3){
        break;
    }
    console.log(contador);
    ++contador;
}

var contador = 0;

while(contador < 100){

    if(contador % 3 == 0){
        console.log(contador);
    }else{
        if(contador % 5 == 0){
            console.log(contador);
        }
    }
    
    ++contador;
}

for (let index = 0; index < 10; index++) {
    console.log(index);
}

var numerosAleatorios = [3, 5, 10, 2, 19, 21, 13];

for (let index = 0; index < numerosAleatorios.length; index++) {
    console.log(numerosAleatorios[index]);
}

for(var num of numerosAleatorios){
    console.log('for of', num);
}

