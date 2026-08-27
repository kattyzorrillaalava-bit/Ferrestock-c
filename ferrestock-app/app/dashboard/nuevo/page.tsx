export default function NuevoProductoPage() {
  return (
    <main className="min-h-screen bg-gray-100 px-6 py-10">
      <div className="mx-auto max-w-2xl rounded-2xl bg-white p-8 shadow-lg">
        <h1 className="text-3xl font-bold">
          Nuevo producto
        </h1>

        <p className="mt-2 text-gray-600">
          Agrega un producto al inventario de Ferrestock.
        </p>

        <form className="mt-8 space-y-5">
          <div>
            <label className="mb-2 block font-medium">
              Nombre del producto
            </label>

            <input
              type="text"
              placeholder="Ej. Cemento"
              className="w-full rounded-lg border px-4 py-3"
            />
          </div>

          <div>
            <label className="mb-2 block font-medium">
              Categoría
            </label>

            <input
              type="text"
              placeholder="Ej. Construcción"
              className="w-full rounded-lg border px-4 py-3"
            />
          </div>

          <div>
            <label className="mb-2 block font-medium">
              Precio
            </label>

            <input
              type="number"
              step="0.01"
              placeholder="0.00"
              className="w-full rounded-lg border px-4 py-3"
            />
          </div>

          <button
            type="submit"
            className="w-full rounded-lg bg-red-700 px-4 py-3 font-semibold text-white"
          >
            Guardar producto
          </button>
        </form>
      </div>
    </main>
  );
}