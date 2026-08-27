export default function ProductosPage() {
  const productos = [
    {
      id: 1,
      nombre: "Cemento",
      categoria: "Construcción",
      precio: 8.5,
    },
    {
      id: 2,
      nombre: "Tubo PVC",
      categoria: "Plomería",
      precio: 4.25,
    },
    {
      id: 3,
      nombre: "Guantes de trabajo",
      categoria: "Seguridad",
      precio: 3.5,
    },
    {
      id: 4,
      nombre: "Silicona",
      categoria: "Adhesivos",
      precio: 2.75,
    },
  ];

  return (
    <main className="min-h-screen bg-gray-100 px-6 py-10">
      <div className="mx-auto max-w-7xl">
        <h1 className="text-4xl font-bold text-gray-900">
          Catálogo de productos
        </h1>

        <p className="mt-3 text-gray-600">
          Consulta los productos disponibles en Ferrestock.
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {productos.map((producto) => (
            <div
              key={producto.id}
              className="rounded-xl bg-white p-6 shadow-md"
            >
              <div className="mb-4 flex h-32 items-center justify-center rounded-lg bg-gray-200 text-5xl">
                📦
              </div>

              <h2 className="text-xl font-bold">{producto.nombre}</h2>

              <p className="mt-2 text-sm text-gray-500">
                {producto.categoria}
              </p>

              <p className="mt-4 text-2xl font-bold text-red-700">
                ${producto.precio.toFixed(2)}
              </p>

              <a
                href={`/productos/${producto.id}`}
                className="mt-5 block rounded-lg bg-red-700 px-4 py-2 text-center font-semibold text-white hover:bg-red-800"
              >
                Ver detalle
              </a>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}