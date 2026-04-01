export interface Farmacia {
  key: string
  nombre: string
  dominio: string
  direccion: string
  telefono: string
  whatsapp: string
  horarioSemana: string
  horarioSabado: string
  obrasSociales: string[]
  googleMapsEmbed: string
  instagram: string
  facebook: string
}

export type FarmaciaKey = 'hunko' | 'social' | 'rio1' | 'palermo'
