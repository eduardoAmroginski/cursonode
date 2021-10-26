### Collection

As Collections são como tabelas em bancos Relacionais.

### Código de terminal para executar no shell do MongoDB:

#### Define o Schema

```
use hcode
```

#### Insere uma informação em uma Collection (clientes)

1. Sem definido Id

```
db.cliente.insertOne({name: "Eduardo Amroginski", site: "eduardo-amroginski.com.br"})
```

Caso não seja definido um \_id, o MongoDB definirá de forma automatica como sendo um ObjectId(hash)

2. Com definido Id

```
db.testandoArquivos.insertOne({_id: 1, title: "Testando Documentos", date: new Date('2021-10-25')})
```

#### Visualiza todos os dados de uma Collection

```
db.clientes.find()
```
