"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Pessoa = /** @class */ (function () {
    function Pessoa(nome) {
        this.nome = nome;
    }
    Pessoa.prototype.mostraIdade = function (idade) {
        console.log(this.nome + " tem " + idade + " anos");
    };
    return Pessoa;
}());
exports.Pessoa = Pessoa;
//# sourceMappingURL=pessoa.js.map