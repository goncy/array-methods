import {useMemo, useState} from "react";

interface Articulo {
  id: number;
  name: string;
  price: number;
  count: number;
  status: "deseo" | "comprado" | "cancelado";
}

function obtenerNuevoArticulo(): Articulo {
  return {
    id: Date.now(),
    name: "Cámara digital",
    price: 100,
    count: 1,
    status: "deseo",
  };
}

function App() {
  const [articulos, setArticulos] = useState<Articulo[]>(() => [obtenerNuevoArticulo()]);
  const total = useMemo(() => {
    // @TODO: Retornar la suma de los precios de los artículos
    return 0;
  }, [articulos]);
  const articulosValidos = useMemo(() => {
    // @TODO: Retornan true si todos los artículos son válidos
    return true;
  }, [articulos]);

  function agregarArticulo() {
    setArticulos((articulos) => {
      // @TODO: Retornar un nuevo arreglo con un nuevo artículo
      return articulos;
    });
  }

  function editarArticulo(articulo: Articulo) {
    setArticulos((articulos) => {
      // @TODO: Retornar un nuevo arreglo con el artículo editado
      return articulos;
    });
  }

  function eliminarArticulo(articulo: Articulo) {
    setArticulos((articulos) => {
      // @TODO: Retornar un nuevo arreglo sin el artículo
      return articulos;
    });
  }

  return (
    <main>
      <h1>Wincy</h1>
      <ul>
        {articulos.map((articulo) => (
          <li key={articulo.id}>
            <input
              value={articulo.name}
              onChange={(event) => editarArticulo({...articulo, name: event.target.value})}
            />
            <input
              style={{width: 96}}
              value={articulo.price}
              onChange={(event) => editarArticulo({...articulo, price: Number(event.target.value)})}
            />
            <input
              style={{width: 96}}
              value={articulo.count}
              onChange={(event) => editarArticulo({...articulo, count: Number(event.target.value)})}
            />
            <select
              value={articulo.status}
              onChange={(event) =>
                editarArticulo({...articulo, status: event.target.value as Articulo["status"]})
              }
            >
              <option value="wish">Deseo</option>
              <option value="bought">Comprado</option>
              <option value="cancelled">Cancelado</option>
            </select>
            <button onClick={() => eliminarArticulo(articulo)}>Borrar</button>
          </li>
        ))}
      </ul>
      <button onClick={agregarArticulo}>Agregar artículo</button>
      <p>Artículos válidos?: {articulosValidos ? "✅" : "⛔"}</p>
      <p>Total: ${total}</p>
    </main>
  );
}

export default App;
