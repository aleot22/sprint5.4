/*Escribe una consulta para mostrar todos los documentos en la colección Restaurantes.
Escribe una consulta para mostrar el restaurante_id, name, borough y cuisine de todos los documentos en la colección Restaurantes.
Escribe una consulta para mostrar el restaurante_id, name, borough y cuisine, pero excluyendo el campo _id por todos los documentos en la colección Restaurantes.
Escribe una consulta para mostrar restaurant_id, name, borough y zip code, pero excluyendo el campo _id por todos los documentos en la colección Restaurantes.
Escribe una consulta para mostrar todos los restaurantes que están en el Bronx.
Escribe una consulta para mostrar los primeros 5 restaurantes que están en el Bronx.
Escribe una consulta para mostrar los 5 restaurantes después de saltar los primeros 5 que sean del Bronx.
Escribe una consulta para encontrar los restaurantes que tienen algún resultado mayor de 90.
Escribe una consulta para encontrar los restaurantes que tienen un resultado mayor que 80 pero menos que 100.
Escribe una consulta para encontrar los restaurantes situados en una longitud inferior a -95.754168.
Escribe una consulta de MongoDB para encontrar los restaurantes que no cocinan comida 'American' y tienen algún resultado superior a 70 y longitud inferior a -65.754168.
Escribe una consulta para encontrar los restaurantes que no preparan comida 'American' y tienen algún resultado superior a 70 y que, además, se localizan en longitudes inferiores a -65.754168. Nota : Realiza esta consulta sin utilizar operador $and.
Escribe una consulta para encontrar los restaurantes que no preparan comida 'American', tienen alguna nota 'A' y no pertenecen a Brooklyn. Se debe mostrar el documento según la cuisine en orden descendente.
Escribe una consulta para encontrar el restaurante_id, name, borough y cuisine para aquellos restaurantes que contienen 'Wil' en las tres primeras letras en su nombre.
Escribe una consulta para encontrar el restaurante_id, name, borough y cuisine para aquellos restaurantes que contienen 'ces' en las últimas tres letras en su nombre.
Escribe una consulta para encontrar el restaurante_id, name, borough y cuisine para aquellos restaurantes que contienen 'Reg' en cualquier lugar de su nombre.
Escribe una consulta para encontrar los restaurantes que pertenecen al Bronx y preparan platos americanos o chinos.*/

1.- db.restaurante.find({})
2.- db.restaurante.find({}, { restaurant_id: 1, name: 1, borough: 1, cuisine: 1,})
3.- db.restaurante.find({}, { restaurant_id: 1, name: 1, borough: 1, cuisine: 1, _id: 0 })
4.- db.restaurante.find({}, { restaurant_id: 1, name: 1, borough: 1, zipcode: 1, _id: 0 })
5.- db.restaurante.find({ borough: "Bronx" })
6.- db.restaurante.find({ borough: "Bronx" }).limit(5)
7.- db.restaurante.find({ borough: "Bronx" }).skip(5).limit(5)
8.- db.restaurante.find({ 'grades.score': { $gt: 90 } })
9.- db.restaurante.find({ 'grades.score': { $gt: 80, $lt: 100 } })
10.-db.restaurante.find( { "address.coord.0" : {$lt: -95.754168 }})
11.-db.restaurante.find({ cuisine: { $ne: "American" }, "grades.score":  { $gt: 70 }, "address.coord.0": { $lt: -65.754168 }})
12.-db.restaurante.find({ cuisine: { $ne: "American" }, "grades.score":  { $gt: 70 }, "address.coord.0": { $lt: -65.754168 }})
13.-db.restaurante.find({cuisine: { $ne: "American" }, "grades.grade": "A",borough: { $ne: "Brooklyn" }}).sort({ cuisine: -1 })
14.-db.restaurante.find({name: { $regex: /^Wil/i }}, {restaurant_id: 1,name: 1,borough: 1,cuisine: 1,_id: 0})
15.-db.restaurante.find({ name: { $regex: /ces$/i } },{ restaurant_id: 1, name: 1, borough: 1, cuisine: 1, _id: 0 })
16.-db.restaurante.find({ name: { $regex: /Reg/i } },{ restaurant_id: 1, name: 1, borough: 1, cuisine: 1, _id: 0 })
17.-db.restaurante.find({borough: "Bronx",cuisine: { $in: ["American", "Chinese"] }})