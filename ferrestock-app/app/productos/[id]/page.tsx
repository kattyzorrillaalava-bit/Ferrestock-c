type Props = {
  params: {
    id: string;
  };
};

export default function ProductoDetalle({ params }: Props) {
  return (
    <main className="min-h-screen bg-gray-100 px-6 py-10">
      <div className="mx-auto max-w-3xl rounded-2xl bg-white p-10 shadow-lg">
        <p className="font-semibold text-red-700">
          FERRESTOCK
        </p>

        <h1 className="mt-3 text-4xl font-bold text-gray-900">
          Detalle del producto
        </h1>

        <div className="mt-8 rounded-xl bg-gray-100 p-6">
          <p className="text-gray-600">
            ID del producto:
          </p>

          <p className="mt-2 text-3xl font-bold">
            {params.id}
          </p>
        </div>

        <a
          href="/productos"
          className="mt-8 inline-block rounded-lg bg-red-700 px-6 py-3 font-semibold text-white"
        >
          ← Volver al catálogo
        </a>
      </div>
    </main>
  );
}