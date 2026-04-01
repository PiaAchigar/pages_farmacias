'use client'

export function Catalog() {
  const handleCatalogRedirect = () => {
    window.location.href = 'https://www.rodynafarmacias.com.ar/catalogo'
  }

  return (
    <section className="py-24" id="catalogo">
      <div className="max-w-7xl mx-auto px-8">
        <div className="relative overflow-hidden rounded-[3rem] bg-secondary p-12 md:p-20 flex flex-col md:flex-row items-center justify-between shadow-lg">
          <div className="absolute top-0 right-0 w-1/2 h-full opacity-5 pointer-events-none">
            <img
              alt="Catalogue background"
              className="w-full h-full object-cover"
              src="https://images.unsplash.com/photo-1563903476-6be67a604d30?w=800&h=600&fit=crop"
            />
          </div>
          <div className="relative z-10 max-w-xl">
            <h2 className="text-4xl md:text-5xl font-extrabold font-headline text-white mb-6">
              Explorá nuestro Catálogo Online
            </h2>
            <p className="text-white/80 text-xl mb-10 font-medium">
              Encontrá todos los productos que necesitás con solo un clic. Envíos a domicilio y retiro en
              sucursal.
            </p>
            <button
              onClick={handleCatalogRedirect}
              className="bg-primary text-white px-10 py-5 rounded-2xl font-bold text-lg hover:brightness-105 transition-all shadow-lg flex items-center gap-3"
            >
              Ver Productos
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 10l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
          </div>
          <div className="relative z-10 mt-12 md:mt-0">
            <div className="bg-white p-4 rounded-[2.5rem] shadow-lg transform rotate-3">
              <img
                alt="Product preview"
                className="w-64 h-64 object-cover rounded-[2rem]"
                src="https://images.unsplash.com/photo-1587854692152-cbe660dbde0e?w=300&h=300&fit=crop"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
