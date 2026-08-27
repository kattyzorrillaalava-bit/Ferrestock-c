export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100">
      <nav className="bg-red-700 text-white px-8 py-4">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          <h1 className="text-2xl font-bold">Ferrestock</h1>

          <div className="flex gap-6">
            <a href="/" className="hover:text-yellow-300">
              Inicio
            </a>
            <a href="/productos" className="hover:text-yellow-300">
              Productos
            </a>
            <a href="/login" className="hover:text-yellow-300">
              Iniciar sesión
            </a>
          </div>
        </div>
      </nav>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="rounded-3xl bg-white p-10 shadow-lg">
          <p className="mb-4 font-semibold text-red-700">
            SISTEMA DE GESTIÓN FERRETERA
          </p>

          <h2 className="max-w-3xl text-5xl font-bold text-gray-900">
            Todo lo que necesitas para administrar tu ferretería.
          </h2>

          <p className="mt-6 max-w-2xl text-lg text-gray-600">
            Ferrestock permite gestionar productos, controlar el inventario
            y ofrecer un catálogo digital para los clientes.
          </p>

          <div className="mt-8 flex gap-4">
            <a
              href="/productos"
              className="rounded-lg bg-red-700 px-6 py-3 font-semibold text-white hover:bg-red-800"
            >
              Ver productos
            </a>

            <a
              href="/login"
              className="rounded-lg border border-red-700 px-6 py-3 font-semibold text-red-700 hover:bg-red-50"
            >
              Iniciar sesión
            </a>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-6 px-6 pb-20 md:grid-cols-3">
        <div className="rounded-xl bg-white p-6 shadow">
          <h3 className="text-xl font-bold">📦 Inventario</h3>
          <p className="mt-2 text-gray-600">
            Administra tus productos y controla sus existencias.
          </p>
        </div>

        <div className="rounded-xl bg-white p-6 shadow">
          <h3 className="text-xl font-bold">🛒 Catálogo</h3>
          <p className="mt-2 text-gray-600">
            Permite que tus clientes consulten los productos disponibles.
          </p>
        </div>

        <div className="rounded-xl bg-white p-6 shadow">
          <h3 className="text-xl font-bold">🔐 Seguridad</h3>
          <p className="mt-2 text-gray-600">
            Gestiona usuarios y permisos mediante autenticación segura.
          </p>
        </div>
      </section>
    </main>
  );
}
