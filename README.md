# Práctica de Arrays
Si querés saber más sobre Arrays podes visitar la MDN en su [artículo de primeros pasos](https://developer.mozilla.org/es/docs/Learn/JavaScript/First_steps/Arrays)

---

Los array sirven para almacenar listas.
```js
const items = ['cámara', 'celular', 'reloj']
```

Esas listas pueden almacenar cualquier tipo de dato y no todos los elementos tienen por que ser del mismo tipo.
```js
const weirdItems = ['cámara', 2, 'reloj']
```

Cualquier tipo, incluyendo otros arrays.
```js
const extraWeirdItems = ['cámara', 2, 'reloj', [], ['por', 'que', '?']]
```

Podemos acceder a sus elementos por índice, los arrays inician desde el índice 0.
```js
const numArray = ['cero', 'uno', 'dos']

numArray[1] // => 'uno'
```

Podemos modificar los elementos por índice también
```js
numArray[1] = 'one'

numArray // => [ 'cero', 'one', 'dos' ]
```

Los arrays poseen numerosas propiedades y métodos que podemos usar para interactuar con ellos.

```js
numArray.length // 3
numArray.forEach(num => console.log(`número: ${num}`)) // 'número: N'
```

Algunos de estos métodos suelen usarse para modificar u obtener copias del array, los métodos que modifican el array original se los llaman métodos mutables.

```js
const mutableArray = [1, 2, 3]

// Agregar un elemento al final
mutableArray.push(4)

// Eliminar el primer elemento
mutableArray.shift()

mutableArray // [2, 3, 4]
```

Los métodos que devuelven una copia modificada sin modificar el array original, se los llama métodos inmutables.

```js
const immutableArray = [1, 2, 3]

// Agregar un elemento al final
const concatenatedArray = immutableArray.concat(4)

// Eliminar el primer elemento
const shiftedArray = immutableArray.slice(1)

immutableArray // [1, 2, 3]
concatenatedArray // [1, 2, 3, 4]
shiftedArray // [2, 3]
```

La decisión de que métodos usar está en cada uno y en las necesidades que tengamos a la hora de manipular nuestros datos. En este ejercicio vamos a estar haciendo cambios a una aplicación React, donde se aconseja no debemos mutar los estados ya que esto puede interferir con el resultado esperado, por ende vamos a centrarnos en algunos de los métodos inmutables como .concat, .filter, .map, .reduce o .some.

---
Si te gusta mi contenido, seguime en [Twitter](https://twitter.gonzalopozzo.com), [Twitch](https://twitch.gonzalopozzo.com), convertite en [GitHub sponsor](https://github.com/sponsors/goncy), votame para [Github Star](https://stars.github.com/) o doname un [Cafecito](https://cafecito.gonzalopozzo.com) ✨
