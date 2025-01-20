//Variables
let numeroMaximoPosible = 100;
let numeroSecreto = Math.floor(Math.random()*100)+1;
let numeroUsuario = 0;
let intentos = 1;
//let palabraVeces = 'Vez';
let maximosIntentos = 10;

//console.log(numeroSecreto);

while(numeroUsuario != numeroSecreto) {
    numeroUsuario = parseInt(prompt(`Me Indicas Un Número Entre 1 Y ${numeroMaximoPosible} Por Favor:`));

    console.log(typeof(numeroUsuario));
    /*
    Este codigo realiza la comparacion
    */
    if (numeroUsuario == numeroSecreto){
        //Acertamos, fue verdadera la condición
        alert(`Acertaste, El Número es: ${numeroUsuario}. Lo hiciste en ${intentos} ${intentos ==1 ? 'vez' : 'veces' }`);
    } else{
        if (numeroUsuario > numeroSecreto) {
            alert('El número secreto es menor');
        } else{
            alert('El número secreto es mayor');
        }
        //La condición no se cumplió
    //Incrementamos el contador cuando no acierte
    //intentos = intentos +1;
    //intentos += 1;
    intentos ++;
    palabraVeces = 'veces';
    if (intentos > 10) {
        alert(`Llegaste al número máximo de ${maximosIntentos} intentos`);
        break;
    }
    }
}