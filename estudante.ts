import { Pessoa } from "./pessoa";

export class Estudante extends Pessoa {
    constructor(nome: string) {
        super(nome);
    }

    public mostraIdade(idade: number): void {
        console.log('Estudando...');
        super.mostraIdade(24);
    }
}