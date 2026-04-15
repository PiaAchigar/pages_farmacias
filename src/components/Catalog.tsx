'use client'

export function Catalog() {
  const handleCatalogRedirect = () => {
    window.location.href = 'https://www.rodynafarmacias.com.ar/catalogo'
  }

  return (
    <section className="py-24 md:py-32" id="catalogo">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="relative overflow-hidden rounded-2xl md:rounded-[3rem] bg-secondary p-6 md:p-12 lg:p-16 xl:p-24 flex flex-col lg:flex-row items-center justify-between botanical-shadow gap-8 lg:gap-0">
          <div className="absolute top-0 right-0 w-1/2 h-full opacity-5 pointer-events-none hidden md:block">
            <img
              alt="Catalogue background"
              className="w-full h-full object-cover"
              src="https://images.unsplash.com/photo-1563903476-6be67a604d30?w=800&h=600&fit=crop"
            />
          </div>
          <div className="relative z-10 max-w-xl w-full lg:w-auto">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold font-headline text-white mb-6 md:mb-8">
              Explorá nuestro Catálogo Online
            </h2>
            <p className="text-white/80 text-base sm:text-lg md:text-xl mb-8 md:mb-12 font-medium">
              Encontrá todos los productos que necesitás con solo un clic. Envíos a domicilio y retiro en
              sucursal.
            </p>
            <button
              onClick={handleCatalogRedirect}
              className="bg-primary text-white px-8 md:px-12 py-3 md:py-5 rounded-2xl font-bold text-sm md:text-lg hover:brightness-105 transition-all shadow-lg flex items-center gap-2 md:gap-3"
            >
              Ver Productos
              <span className="material-symbols-outlined">arrow_forward</span>
            </button>
          </div>
          <div className="relative z-10 w-full sm:w-auto flex justify-center lg:justify-end">
            <div className="bg-white p-4 md:p-6 rounded-2xl md:rounded-[2.5rem] botanical-shadow transform rotate-3 w-48 sm:w-56 md:w-64">
              <img
                alt="Product preview"
                className="w-full h-auto aspect-square object-cover rounded-xl md:rounded-[2rem]"
                src="https://images.unsplash.com/photo-1587854692152-cbe660dbde0e?w=300&h=300&fit=crop"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
