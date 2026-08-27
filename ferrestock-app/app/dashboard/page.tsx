export default function DashboardPage() {
  return (
    <main className="min-h-screen bg-gray-100 px-6 py-10">
      <div className="mx-auto max-w-7xl">
        <div className="rounded-2xl bg-red-700 p-8 text-white">
          <p className="text-sm font-semibold uppercase">
            Panel de administración
          </p>

          <h1 className="mt-2 text-4xl font-bold">
            Bienvenido a Ferrestock
          </h1>

          <p className="mt-3 text-red-100">
            Gestiona tus productos e inventario desde este panel.
          </p>
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-3">
          <div className="rounded-xl bg-white p-6 shadow">
            <p className="text-gray-500">Productos</p>
            <p className="mt-2 text-4xl font-bold">4</p>
          </div>

          <div className="rounded-xl bg-white p-6 shadow">
            <p className="text-gray-500">Categorías</p>
            <p className="mt-2 text-4xl font-bold">4</p>
          </div>

          <div className="rounded-xl bg-white p-6 shadow">
            <p className="text-gray-500">Estado</p>
            <p className="mt-2 text-xl font-bold text-green-600">
              Activo
            </p>
          </div>
        </div>

        <div className="mt-8 rounded-xl bg-white p-6 shadow">
          <h2 className="text-2xl font-bold">
            Administración
          </h2>

          <p className="mt-2 text-gray-600">
            Desde aquí podrás crear, editar y eliminar productos.
          </p>

          <a
            href="/dashboard/nuevo"
            className="mt-6 inline-block rounded-lg bg-red-700 px-6 py-3 font-semibold text-white"
          >
            + Nuevo producto
          </a>
        </div>
      </div>
    </main>
  );
}