/**
 * This code was generated by v0 by Vercel.
 * @see https://v0.dev/t/l6VwW3Lmy62
 */
import { Card, CardContent, CardDescription, CardTitle } from "@/components/ui/card";
import Link from "next/link";

export function IA() {
  return (
    (<main
      className="flex flex-col items-center justify-center min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div
        className="w-full h-64 bg-cover bg-center"
        style={{
          backgroundImage: `url('/9.jpeg')`,
          backgroundPosition: 'center',
        }}>
        <div
          className="flex items-center justify-center h-full w-full bg-gray-900 bg-opacity-50 text-black">
          <h1 className="text-4xl font-bold text-black">Cuidado y belleza para tu mascota</h1>
        </div>
      </div>
      <section className="max-w-4xl mx-auto mt-8">
        <h2 className="text-2xl font-bold text-center mb-4 text-black">Nuestros trabajos</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-black">
          <Card>
            <img
              alt="Dog 1"
              className="w-full h-48 object-cover"
              height="200"
              src="/placeholder.svg"
              style={{
                aspectRatio: "200/200",
                objectFit: "cover",
              }}
              width="200" />
            <CardContent>
              <CardTitle>Perro 1</CardTitle>
              <CardDescription>Un corte elegante y limpio</CardDescription>
            </CardContent>
          </Card>
          <Card>
            <img
              alt="Dog 2"
              className="w-full h-48 object-cover"
              height="200"
              src="/placeholder.svg"
              style={{
                aspectRatio: "200/200",
                objectFit: "cover",
              }}
              width="200" />
            <CardContent>
              <CardTitle>Perro 2</CardTitle>
              <CardDescription>Un baño relajante y refrescante</CardDescription>
            </CardContent>
          </Card>
          <Card>
            <img
              alt="Dog 3"
              className="w-full h-48 object-cover"
              height="200"
              src="/placeholder.svg"
              style={{
                aspectRatio: "200/200",
                objectFit: "cover",
              }}
              width="200" />
            <CardContent>
              <CardTitle>Perro 3</CardTitle>
              <CardDescription>Un estilo moderno y a la moda</CardDescription>
            </CardContent>
          </Card>
          <Card>
            <img
              alt="Dog 4"
              className="w-full h-48 object-cover"
              height="200"
              src="/placeholder.svg"
              style={{
                aspectRatio: "200/200",
                objectFit: "cover",
              }}
              width="200" />
            <CardContent>
              <CardTitle>Perro 4</CardTitle>
              <CardDescription>Un look clásico y atemporal</CardDescription>
            </CardContent>
          </Card>
        </div>
      </section>
      <div className="max-w-md w-full space-y-8 mt-8 rounded-lg shadow-lg p-6">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Reserva tu cita para el cuidado de tu mascota
          </h2>
        </div>
        <form className="mt-8 space-y-6">
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label className="sr-only" htmlFor="name">
                Nombre
              </label>
              <input
                className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                id="name"
                name="name"
                placeholder="Nombre"
                required
                type="text" />
            </div>
            <div>
              <label className="sr-only" htmlFor="pet-name">
                Nombre de la mascota
              </label>
              <input
                className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                id="pet-name"
                name="pet-name"
                placeholder="Nombre de la mascota"
                required
                type="text" />
            </div>
            <div>
              <label className="sr-only" htmlFor="phone">
                Teléfono
              </label>
              <input
                className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                id="phone"
                name="phone"
                placeholder="Teléfono"
                required
                type="text" />
            </div>
            <div>
              <label className="sr-only" htmlFor="date">
                Fecha
              </label>
              <input
                className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                id="date"
                name="date"
                placeholder="Fecha"
                required
                type="date" />
            </div>
            <div>
              <label className="sr-only" htmlFor="time">
                Hora
              </label>
              <input
                className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                id="time"
                name="time"
                placeholder="Hora"
                required
                type="time" />
            </div>
          </div>
          <div>
            <button
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              type="submit">
              Reservar
            </button>
          </div>
        </form>
        <div className="flex justify-center space-x-4 mt-4">
          <Link className="text-blue-600 hover:text-blue-800" href="#">
            <i className="fab fa-facebook-square text-3xl" />
          </Link>
          <Link className="text-pink-600 hover:text-pink-800" href="#">
            <i className="fab fa-instagram-square text-3xl" />
          </Link>
          <Link className="text-green-600 hover:text-green-800" href="#">
            <i className="fab fa-whatsapp-square text-3xl" />
          </Link>
        </div>
      </div>
    </main>)
  );
}
