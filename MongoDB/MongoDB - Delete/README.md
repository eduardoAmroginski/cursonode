## DELETE

É usado para apagar registros das collections
**ATENÇÃO: SEMPRE LEMBRAR DE USAR CONDIÇÕES PARA DELIMITAR O DELETE, POIS É UM COMANDO MUITO PERIGOSO!**

### DeleteOne

Apaga apenas um unico registro que atende a condição passada

```
db.produtos.deleteOne({_id: 1})
```

### DeleteMany

Apaga todos os registros que atendam a condição passada. **Caso não colocarmos nenhuma condição, tudo na collection será apago**

```
db.produtos.deleteMany({value: 999})
```
