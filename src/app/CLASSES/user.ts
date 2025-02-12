export class User {
    id:string
    nome:string;
    nascimento:string;
    cpf:string;
    rua:string;
    numero:string;
    bairro:string;
    cep:string;
    email:string;
    telefone:string;
    celular:string;
    senha:string;

    constructor(id:string,nome:string, nascimento:string, cpf:string, rua:string, numero:string, bairro:string, cep:string, email:string, telefone:string, celular:string, senha:string){
        this.id = id;
        this.nome = nome;
        this.nascimento = nascimento;
        this.cpf = cpf;
        this.rua = rua;
        this.numero = numero;
        this.bairro = bairro;
        this.cep = cep;
        this.email = email;
        this.telefone = telefone;
        this.celular = celular;
        this.senha = senha
    }
}
