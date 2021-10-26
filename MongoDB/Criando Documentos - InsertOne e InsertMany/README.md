### Mostra as collections do Schema atual

```
show collections
```

### InsertOne

Usamos o InsertOne quando queremos adicionar apenas um registro

```
db.produtos.insertOne({_id:1, name:"MacBook Pro", value: 78000, description: "Notebook caro pra dedeu"})
```

### InsertMany

Usamos o InsertMany quando queremos adicionar vários registros, para isso passamos um **Array** contendo os registros.

```
db.produtos.insertMany([{_id:2, name:"Maverick Pro", value: 1999, description: "Melhor drone do mundo!"}, {_id:3,name: "Tekpix", value: 599, description: "A camera mais vendida do Brasil"} ])
```
