var resultquery;
var ncarg;



function candidatosRequest() {
  return resultquery;
}

function ncargosRequest(){
  return ncarg;
}

function IniciaUrna(jsoncandidato,ncargos){
  ncarg = ncargos;
  resultquery = jsoncandidato;
  console.log(resultquery);
}