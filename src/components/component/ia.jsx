/**
 * This code was generated by v0 by Vercel.
 * @see https://v0.dev/t/l6VwW3Lmy62
 */
import { Card, CardContent, CardDescription, CardTitle } from "@/components/ui/card";
import Image from 'next/image';


export function IA() {
  return (

    <main className='flex flex-col items-center justify-center min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8'>
      <div
        className='w-full h-64 bg-cover bg-center'
        style={{
          backgroundImage: `url('/1.jpeg')`,
          backgroundSize: "cover",
        }}
      >
        <div className='flex items-center justify-center h-full w-full bg-gray-900 bg-opacity-50 text-black'>
          <h1 className='text-4xl font-bold text-black'>
            Cuidado y belleza para tu mascota
          </h1>
        </div>
      </div>
      <section className='max-w-4xl mx-auto mt-8'>
        <h2 className='text-2xl font-bold text-center mb-4 text-black'>
          Nuestros trabajos
        </h2>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-black'>
          <Card>
            <Image src="/1.jpeg" alt="Dog 1" style={{
                aspectRatio: "200/200",
                objectFit: "cover",
              }} />
            <CardContent className='mt-5'>
              <CardTitle> Hook </CardTitle>
              <CardDescription className='mt-2'>
                Un corte elegante y limpio
              </CardDescription>
            </CardContent>
          </Card>

          <Card>
          <Image src="/2.jpeg" alt="Dog 2" style={{
                aspectRatio: "200/200",
                objectFit: "cover",
              }} />
            <CardContent className='mt-5'>
              <CardTitle>Panchi</CardTitle>
              <CardDescription className='mt-2'>
                Un baño relajante y refrescante
              </CardDescription>
            </CardContent>
          </Card>

          <Card>
          <Image src="/3.jpeg" alt="Dog 3"style={{
                aspectRatio: "200/200",
                objectFit: "cover",
              }} />
            <CardContent className='mt-5'>
              <CardTitle>Florinda</CardTitle>
              <CardDescription className='mt-2'>
                Un estilo moderno y a la moda
              </CardDescription>
            </CardContent>
          </Card>

          <Card>
          <Image src="/4.jpeg" alt="Dog 4" style={{
                aspectRatio: "200/200",
                objectFit: "cover",
              }} />
            <CardContent className='mt-5'>
              <CardTitle>Milka</CardTitle>
              <CardDescription className='mt-2'>
                Un look clásico y atemporal
              </CardDescription>
            </CardContent>
          </Card>
        </div>
      </section>

      <form className='max-w-md w-full space-y-8 mt-8 rounded-lg shadow-lg p-6'>
        <div>
          <h2 className='mt-6 text-center text-3xl font-extrabold text-gray-900'>
            Reserva tu cita para el cuidado de tu mascota
          </h2>
        </div>
        < form className='mt-8 space-y-6'>
          <div className='rounded-md shadow-sm -space-y-px'>
            <div>
              <label className='sr-only' htmlFor='name'>
                Nombre
              </label>
              <input
                className='appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm'
                id='name'
                name='name'
                placeholder='Nombre'
                required
                type='text'
              />
            </div>
            <div>
              <label className='sr-only' htmlFor='pet-name'>
                Nombre de la mascota
              </label>
              <input
                className='appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm'
                id='pet-name'
                name='pet-name'
                placeholder='Nombre de la mascota'
                required
                type='text'
              />
            </div>
            <div>
              <label className='sr-only' htmlFor='phone'>
                Teléfono
              </label>
              <input
                className='appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm'
                id='phone'
                name='phone'
                placeholder='Teléfono'
                required
                type='text'
              />
            </div>
            <div>
              <label className='sr-only' htmlFor='date'>
                Fecha
              </label>
              <input
                className='appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm'
                id='date'
                name='date'
                placeholder='Fecha'
                required
                type='date'
              />
            </div>
            <div>
              <label className='sr-only' htmlFor='time'>
                Hora
              </label>
              <input
                className='appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm'
                id='time'
                name='time'
                placeholder='Hora'
                required
                type='time'
              />
            </div>
          </div>
            <button
              className='group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
              type='submit'
            >
              Reservar
            </button>
      </form>

        <div>
          <iframe
            src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d412.0700896637636!2d-60.2494795679535!3d-34.28525239344473!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95b90dc93555b4a1%3A0x8e7c2ed78d0ccebf!2sTRIBU%20Forrajeria!5e0!3m2!1ses!2sar!4v1705064812927!5m2!1ses!2sar'
            width='600'
            height='450'
            style={{border: '0'}}
            allowfullscreen=''
            loading='lazy'
            referrerpolicy='no-referrer-when-downgrade'
          ></iframe>
        </div>

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
    </main>
  );
}
