var resultquery;
var ncarg;
function candidatosRequest() {
  // let request = new XMLHttpRequest();
  // request.overrideMimeType("application/json");
  // request.open(method, url, true);
  // request.onreadystatechange = () => {
  //   if (request.readyState === 4 && request.status == "200") {
  //       callback(request.responseText);
  //   }
  // };
  // request.send(null);
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