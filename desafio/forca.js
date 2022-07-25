const { array, string, x } = require("joi");

class Forca {

  letrasChutadas = [];
  palavra = ["_","_","_","_","_","_","_"];
  vidas = 6;

  chutar(letra) {
    
    const string = letra
    const palavraSecreta = ["abacaxi", "a", "b", "c", "x", "i"]

      if (palavraSecreta.includes(letra)) {
        this.vidas
      } else {
        this.vidas = this.vidas -1
      }
      
      if (this.vidas == 0) {
        console.log("Você perdeu")
      }

      Object.assign([0], string);
      var adicionar = this.letrasChutadas.push(string);

        if (string == "a") {
          var adicionar = this.palavra.splice(0,1, "a");
          var adicionar = this.palavra.splice(2,1, "a");
          var adicionar = this.palavra.splice(4,1, "a");
        }
        if (string == "b") {
          var adicionar = this.palavra.splice(1,1, "b");
        }
        if (string == "c") {
          var adicionar = this.palavra.splice(3,1, "c");
        }
        if (string == "x") {
          var adicionar = this.palavra.splice(5,1, "x");
        }
        if (string == "i") {
          var adicionar = this.palavra.splice(6,1, "i");
        }

  }
    
  buscarEstado() { return ""; } // Possiveis valores: "perdeu", "aguardando chute" ou "ganhou"

  buscarDadosDoJogo() {
      return {
          letrasChutadas: this.letrasChutadas,//[], // Deve conter todas as letras chutadas
          vidas: this.vidas, // Quantidade de vidas restantes
          palavra: this.palavra,//[] // Deve ser um array com as letras que já foram acertadas ou o valor "_" para as letras não identificadas
      }
  }
}

module.exports = Forca;
