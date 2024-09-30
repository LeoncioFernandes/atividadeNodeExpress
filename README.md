# Construção de API com Node.JS + Express

### Atividade desenvolvida no curso de Programação com Frameworks Web

#### Esta atividade consiste em criar uma API com Node.JS e Express para cadastros de alunos.

## Requisitos
- Cadastrar um Aluno
- Listar todos os Alunos
- Alterar os dados de um Aluno pelo ID
- Deletar um Aluno pelo ID
- Retornar o nome e a média de um determinado Aluno pelo ID.

## Requisitos do Aluno (Objeto *Students*)
```javascript
{
  id: number,
  nome: string,
  n1: number,
  n2: number,
  media: number,
  status: string("aprovado" | "recuperação" | "reprovado")
}
```

#### Para o cadastro e atualização dos Alunos é realizada a verificação se as notas *n1* e *n2* são do tipo *number* e se estão entre 0 e 10.

#### O *ID*, a *Média* e o *Status* do Aluno são definidos automaticamente após a validação das notas *n1* e *n2* que devem ser do type *Number*.

#### O *Status* será definido à partir da *média*:
- Se a *média* for maior ou igual à 7, *status* = "aprovado";
- Se a *média* for maior ou igual à 4 e menor que 7, *status* = "recuperação";
- Se a *média* for menor que 4, *status* = "reprovado".

## Rotas

### Foram configuradas as seguintes rotas:

- GET /students => Recebe um objeto *students* que contém uma Lista de objetos *Students*

- GET /students/:id => Recebe um objeto com o *name* e a *media* do aluno solicitado pelo ID

- POST /students => Salva um objeto *Student* contendo o *name*, a *n1* e a *n2* na Lista de objetos *Students*:
  ```json
  {
    "nome": "string",
    "n1": number,
    "n2": number
  }
  ```
- POST /students/:id => Atualiza um objeto *Student* contendo o *name*, a *n1* e a *n2* na Lista de objetos *Students* à partir do ID:
  ```json
    {
      "nome": "string",
      "n1": number,
      "n2": number
    }
    ```
- DELETE /students/:id => Exclui um objeto *Student* da Lista de objetos *Students* à partir do ID

## Rodar o projeto

Após clonar o projeto, dê o seguinte comando no terminal para baixar todos os pacotes de dependências:
```
npm install
```

Depois que instalar as dependências, para rodar o projeto utilize no terminal o comando abaixo:
```
npm run dev
```
