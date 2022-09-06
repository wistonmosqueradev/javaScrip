const obtenerNumero = () => {
  let num = prompt("ingrese un numero");
  try {
    if (num == "") throw "esta vacio";
    if (isNaN(num)) throw "no es un numero"; //throw es paraPuede especificar un objeto cuando lanza una     excepción.Puede entonces referenciar las
    // propiedades del objeto en el bloque catch. El siguiente ejemplo crea un objeto 
    //miExcepcionUsuario del tipo ExceptionUsuario y //
    //la utiliza usándola en una sentencia throw.
    num = Number(num);

    if (num < 5) throw "el numero es muy pequeño";
    if (num > 10) throw "el numero es muy grande";
  } catch (error) {
    console.log(error);
  }
}

obtenerNumero();
