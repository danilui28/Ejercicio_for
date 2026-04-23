function listaNumeros(){
    for(let i = 0; i <= 3; i++){
        console.log(i)
    }
}

function ejecutar(numEjercicio){
    if(numEjercicio == 1){
        listaNumeros()
    }else if(numEjercicio == 2){
        listaNumerosReversa()
    }else if(numEjercicio == 3){
        listaPares()
    }
}

function listaNumerosReversa(){
    for(let i = 3; i > 0; i--){
        console.log(i)
    }
}

function listaPares(){
    for(let i=0; i < 10; i+=2){
        console.log(i)
    }
}