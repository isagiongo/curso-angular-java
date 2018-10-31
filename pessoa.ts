export class Pessoa {

    private nome: string;

    constructor(nome: string) {
        this.nome = nome;
    }

    public mostraIdade(idade: number): void {
        console.log(`${this.nome} tem ${idade} anos`);
    }
}