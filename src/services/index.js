export const rutValidator = (rutCompleto) =>{
  /*Función que retorna si un rut es valido o no*/
  if (!/^[0-9]+[-|‐]{1}[0-9kK]{1}$/.test(rutCompleto)) return false;
  let tmp = rutCompleto.split("-");
  let digv = tmp[1];
  let rut = tmp[0];
  if (digv == "K") digv = "k";
  return dv(rut) == digv;
}

function dv(T) {
  let M = 0,
    S = 1;
  for (; T; T = Math.floor(T / 10)) S = (S + (T % 10) * (9 - (M++ % 6))) % 11;
  return S ? S - 1 : "k";
}


export const formatRut = (rut) => {
  /*Funcion que retorna el rut con el siguiente formato 12345678-9*/
  const cleanRut = rut.replace(/[^0-9kK]+/g, '');

  if (cleanRut.length < 3) return cleanRut;

  const body = cleanRut.slice(0, -1);
  const dv = cleanRut.slice(-1);

  return `${body}-${dv}`;
};


export const formatCurrency =(amount) =>{
  // Convertir el monto a una cadena y usar expresión regular para agregar puntos como separadores de miles
  const cleanNumber = amount.replace(/[^0-9]+/g, '');
  

  return cleanNumber? '$' + Number.parseFloat(cleanNumber).toFixed(0).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.'): '$0';
}