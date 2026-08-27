export default function RegisterPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-gray-100 px-6">
      <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-lg">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-red-700">
            Crear cuenta
          </h1>

          <p className="mt-2 text-gray-600">
            Únete a Ferrestock
          </p>
        </div>

        <form className="space-y-5">
          <div>
            <label className="mb-2 block font-medium text-gray-700">
              Nombre
            </label>

            <input
              type="text"
              placeholder="Tu nombre"
              className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-red-600"
            />
          </div>

          <div>
            <label className="mb-2 block font-medium text-gray-700">
              Correo electrónico
            </label>

            <input
              type="email"
              placeholder="correo@ejemplo.com"
              className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-red-600"
            />
          </div>

          <div>
            <label className="mb-2 block font-medium text-gray-700">
              Contraseña
            </label>

            <input
              type="password"
              placeholder="••••••••"
              className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-red-600"
            />
          </div>

          <button
            type="submit"
            className="w-full rounded-lg bg-red-700 px-4 py-3 font-semibold text-white hover:bg-red-800"
          >
            Crear cuenta
          </button>
        </form>

        <p className="mt-6 text-center text-gray-600">
          ¿Ya tienes una cuenta?{" "}
          <a href="/login" className="font-semibold text-red-700">
            Inicia sesión
          </a>
        </p>
      </div>
    </main>
  );
}
