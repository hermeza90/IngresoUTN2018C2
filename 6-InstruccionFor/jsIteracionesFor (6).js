function mostrar()
{
  var num;
  var contPares=0;

  num = parseInt(prompt("Ingrese el numero: "));

for(var i = 1 ; i<= num ; i++){
    
    if( i % 2 == 0){
        console.log ( i );
        contPares ++;
    
    }
}  

console.log("Cantidad de pares: " + contPares);

}//FIN DE LA FUNCIÓN