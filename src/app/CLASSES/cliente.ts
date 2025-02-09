export class Cliente {
    id:string = '';
    nome: string = '';
    nascimento: string = '';
    cpf: string = '';
    rua: string = '';
    telefone: string = '';
    celular: string = '';
    numero: string = '';
    bairro: string = '';
    cep: string = '';
    email: string = '';

    constructor(id: string, nome: string, nascimento: string, cpf: string, rua: string, telefone: string, celular: string, numero: string, bairro: string, cep: string, email: string){
        this.id = id;
        this.nome = nome;
        this.nascimento = nascimento;
        this.cpf = cpf;
        this.rua = rua;
        this.telefone = telefone;
        this.celular = celular;
        this.numero = numero;
        this.bairro = bairro;
        this.cep = cep;
        this.email = email;
    }
}
