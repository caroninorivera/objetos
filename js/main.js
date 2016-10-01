// crear objetos plantilla
/* jshint esversion: 6 */
var Animal = function(
  // recibe parámetros
  nombre = null,
  numero_de_patas = 4,
  carnivoro = true,
  pelaje = true,
  numero_de_ojos = 2
){//function
    var object = {// Inicializa un objeto
      numero_de_patas:  numero_de_patas,
      carnivoro:        carnivoro,
      pelaje:           pelaje,
      numero_de_ojos:   numero_de_ojos,
      nombre:           nombre,
      comer: function(){
        if(carnivoro === true){
          return "carnivoro";
        }//if
        else{
          return "no carnivoro";
        }//else
      }//function
    };//object
    return object;
};//Animal
var jirafa = new Animal("jirafa", 4, false, true, 2);
var araña = new Animal("araña", 8, false, false, 8);
var rata = new Animal("rata", 4, true, true, 2);
var rata = new Animal("perro");
console.log(jirafa);
console.log(araña);
console.log(rata);
console.log(perro);
jirafa.color_de_pelo = "amarillo";
// pokemon
var Pokemon = function(
  tipo = null,
  poder = null,
  energia = null
) {

}
