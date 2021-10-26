## Update

É o metodo responsável por fazer alterar os registros no nosso banco de dados

### UpdateOne

Altera apenas o primeiro registro que atender as condições passadas. Passamos primeiro a condição e posteriormente usamos o **$set** para definir o que será alterado.
Neste exemplo alteramos o **name** e o **value** do registro com **\_id: 2**
Usamos **$currentDate: {lastModified: true}** para adicionar um campo que mostrará a ultima atualização feita naquele registro

```
db.produtos.updateOne({_id: 2}, {$set: {name: "Mavic Mini", value: 999}, $currentDate: {lastModified: true}})
```

### UpdateMany

Altera todos os produtos que atenderem determinada condição passada no inicio.

```
db.produtos.updateMany({value: {$lt: 5000}}, {$set: {value: 999}, $currentDate: {lastModified: true}})
```

### ReplaceOne

Usamos **replaceOne** quando queremos substituir um unico registro inteiro. Passamos a condição e o dado que substituirá os dados atuais

```
db.produtos.replaceOne({_id: 4}, {name: "Monitor LG 4K IPS Curvo"})
```
