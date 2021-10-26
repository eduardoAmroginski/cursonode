## Find

É o metodo responsável por fazer buscas no nosso banco de dados, semelhante ao Select \* From <nome_da_tabela> em Bancos Relacionais.

### Busca geral (sem parametros)

```
db.produtos.find()
```

### Busca usando parametros

No exemplo abaixo passamos o **\_id: 3**, como parametro para buscar apenas o registro com o \_id correspondente, semelhante ao uso do **WHERE**

```
db.produtos.find({_id: 3})
```

### Busca usando parametros com condicionais

1. Exemplo 1
   No exemplo abaixo buscamos apenas produtos que tenham o valor menor que 5000, passamos então a condição **$lt** (lower than).

```
db.produtos.find({value: {$lt: 5000}})
```

2. Exemplo 2
   Usamos **$gt** (grand than), para verificar se valor é maior que 5000

```
db.produtos.find({value: {$gt: 5000}})
```

3. Exemplo 3
   Usamos **$or** para verificar se pelo menos uma das condições é atendida

```
db.produtos.find({$or: [{value: {$lt: 5000}}, {_id: {$gt: 2}}]})
```

1. Exemplo 4
   Usamos **,** para verificar se as duas condições são atendidas

```
db.produtos.find({value: {$gt: 1000}, value: {$lt: 5000}})
```
