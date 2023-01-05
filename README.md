# Práctica de arreglos
Este es el repositorio de acompañamiento de [este stream](https://www.youtube.com/watch?v=kX1HKn9yk0g). Si querés saber más sobre arreglos podes visitar la MDN en su [artículo de primeros pasos](https://developer.mozilla.org/es/docs/Learn/JavaScript/First_steps/Arrays)

### Instrucciones para correr la aplicación
Podés correr la app desde codesandbox sin necesidad de instalar nada entrando a [este link](https://codesandbox.io/s/github/goncy/array-methods)

Si querés correr este repositorio localmente podes clonarlo y luego correr:
```bash
npm install
npm run dev
```

### Tareas
Implementá todos los métodos que tengan un `@TODO`

## Intro a arreglos

Los arreglo sirven para almacenar listas.
```js
const articulos = ['cámara', 'celular', 'reloj']
```

Esas listas pueden almacenar cualquier tipo de dato y no todos los elementos tienen por que ser del mismo tipo.
```js
const articulosMezclados = ['cámara', 2, 'reloj']
```

Cualquier tipo, incluyendo otros arreglos.
```js
const articulosSuperMezclados = ['cámara', 2, 'reloj', [], ['por', 'que', '?']]
```

Podemos acceder a sus elementos por índice, los arreglos inician desde el índice 0.
```js
const arregloDeNumeros = ['cero', 'uno', 'dos']

arregloDeNumeros[1] // => 'uno'
```

Podemos modificar los elementos por índice también
```js
arregloDeNumeros[1] = 'one'

arregloDeNumeros // => [ 'cero', 'one', 'dos' ]
```

Los arreglos poseen numerosas propiedades y métodos que podemos usar para interactuar con ellos.

```js
arregloDeNumeros.length // 3
arregloDeNumeros.forEach(num => console.log(`número: ${num}`)) // 'número: N'
```

Algunos de estos métodos suelen usarse para modificar u obtener copias del arreglo, los métodos que modifican el arreglo original se los llaman métodos mutables.

```js
const arregloMutable = [1, 2, 3]

// Agregar un elemento al final
arregloMutable.push(4)

// Eliminar el primer elemento
arregloMutable.shift()

arregloMutable // [2, 3, 4]
```

Los métodos que devuelven una copia modificada sin modificar el arreglo original, se los llama métodos inmutables.

```js
const arregloInmutable = [1, 2, 3]

// Agregar un elemento al final
const arregloConcatenado = arregloInmutable.concat(4)

// Eliminar el primer elemento
const arregloCortado = arregloInmutable.slice(1)

arregloInmutable // [1, 2, 3]
arregloConcatenado // [1, 2, 3, 4]
arregloCortado // [2, 3]
```

La decisión de que métodos usar está en cada uno y en las necesidades que tengamos a la hora de manipular nuestros datos. En este ejercicio vamos a estar haciendo cambios a una aplicación React, donde se aconseja no debemos mutar los estados ya que esto puede interferir con el resultado esperado, por ende vamos a centrarnos en algunos de los métodos inmutables como .concat, .filter, .map, .reduce o .some.

---
Si te gusta mi contenido, seguime en [Twitter](https://twitter.gonzalopozzo.com), [Twitch](https://twitch.gonzalopozzo.com), [YouTube](https://youtube.gonzalopozzo.com), convertite en [GitHub sponsor](https://github.com/sponsors/goncy), votame para [Github Star](https://stars.github.com/) o doname un [Cafecito](https://cafecito.gonzalopozzo.com) ✨
