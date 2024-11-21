//
class Notas_Atletas{
 
  constructor(atletas){
      this.atletas = atletas;
}

MostrarMediasAtletas(){
 
  for (let i = 0; i <this.atletas.length; i++) {
      
      this.mostrarAtletas(i);
      this.mostrarAtletasNotas(i);
      this.mostrarMediaNotas(i);
      console.log("  ")
  }
}
//
mostrarAtletas(Atleta){
   let Atletas =  "Atleta: "+this.atletas[Atleta].nome;
   console.log(Atletas);
}
//
mostrarAtletasNotas(Atleta){
  let AtletasNotas =  "Notas Obtidas: "+this.buscaNotas(Atleta);
  console.log(AtletasNotas);
}//
mostrarMediaNotas(Atleta){
  let media = 0;
  let notas = this.buscaNotas(Atleta);
  //
  let maiorNota = 0;
   for (let i = 0; i <notas.length; i++) {
     if (notas[i] > maiorNota){
        maiorNota = notas[i];
     }
   }
   let menorNota = maiorNota;
   for (let i = 0; i <notas.length; i++) {
      if (notas[i] < menorNota){
       menorNota = notas[i];
    }
  }
  for (let i = 0; i <notas.length; i++) {
    if (notas[i] == maiorNota){
      //console.log(maiorNota)  
       notas[i] = 0;
       i = notas.length+1
    }
  }
  //
  for (let i = 0; i <notas.length; i++) {
    
        if (notas[i] == menorNota){
          //console.log(menorNota)  
           notas[i] = 0;
           i = notas.length+1 
    } 
  }  
 
  //console.log(notas);
  //
  let qtd = 0
  for (let i = 0; i <notas.length; i++) {
       if (notas[i]>0){
        qtd = qtd+1
        media = media + notas[i];
       }
      }
  
  
   
  let mediasNotas =  "Média Válida: "+(media/qtd);
  console.log(mediasNotas);
}
//
buscaNotas(Atleta){
  let notas = [];
  this.atletas[Atleta].notas.forEach(function(nota){
      notas.push(nota);
  });
  //
  return notas.sort();
}
//
};

// definição de grade de atletas
let atletas = [
 {
   nome: "Cesar Abascal",
   notas: [10, 9.34, 8.42, 10, 7.88]
 },
 {
   nome: "Fernando Puntel",
   notas:  [8, 10, 10, 7, 9.33]
 },
 {
   nome: "Daiane Jelinsky",
   notas: [7, 10, 9.5, 9.5, 8]
 },
 {
   nome: "Bruno Castro",
   notas: [10, 10, 10, 9, 9.5]
 }
];
// carregas notas atletas
let AtletasNotas = new Notas_Atletas(atletas);
AtletasNotas.MostrarMediasAtletas();
