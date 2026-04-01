export function About() {
  return (
    <section className="py-24 bg-surface" id="nosotros">
      <div className="max-w-4xl mx-auto px-8 text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold font-headline text-secondary mb-8">
          Cuidamos lo más importante: Tu Salud
        </h2>
        <p className="text-xl text-secondary/80 leading-relaxed mb-12 font-medium">
          En Rodyna Farmacias, nuestra vocación es el bienestar integral. Somos más que una farmacia;
          somos un centro de cuidado donde la atención personalizada y la calidad clínica se encuentran.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="p-8 bg-white rounded-3xl shadow-lg">
            <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center text-primary mx-auto mb-6">
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 3.062v6.708a1 1 0 01-.305.7l-4.666 4.666a1 1 0 01-1.414 0l-4.666-4.666a1 1 0 01-.305-.7V6.517a3.066 3.066 0 012.812-3.062zM9 12a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
              </svg>
            </div>
            <h4 className="text-2xl font-bold text-secondary mb-3">Calidad Certificada</h4>
            <p className="text-secondary/70 font-medium">
              Productos seleccionados bajo los más altos estándares farmacéuticos.
            </p>
          </div>
          <div className="p-8 bg-white rounded-3xl shadow-lg">
            <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center text-primary mx-auto mb-6">
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM0 16.68a6.002 6.002 0 0112 0M12 12a4 4 0 11-8 0 4 4 0 018 0zM4 20a4 4 0 100-8 4 4 0 000 8z" />
              </svg>
            </div>
            <h4 className="text-2xl font-bold text-secondary mb-3">Atención Humana</h4>
            <p className="text-secondary/70 font-medium">
              Nuestro equipo de profesionales está siempre dispuesto a asesorarte con calidez.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
