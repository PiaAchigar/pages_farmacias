import { Farmacia, FarmaciaKey } from '@/types/farmacia'

export type { FarmaciaKey }
export const farmacias: Record<FarmaciaKey, Farmacia> = {
  hunko: {
    key: 'hunko',
    nombre: 'Farmacia Hunko',
    dominio: 'farmaciahunko.com.ar',
    direccion: 'Av. Marcelo T. de Alvear 4787 - Caseros',
    telefono: '011 6412-7300',
    whatsapp: '5491164127300',
    horarioSemana: '09:00 - 13:00 y 16:00 - 20:00 hs',
    horarioSabado: '09:00 - 13:00 hs',
    obrasSociales: ['OSDE', 'Medife', 'Swiss Medical', 'PAMI', 'Ioma', 'Luis Pasteur'],
    googleMapsEmbed:
      '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3283.1153242042974!2d-58.56744168881245!3d-34.62652585859004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcb8063c4fc6e5%3A0x5efe3a5baabe88df!2sAv.%20Marcelo%20Torcuato%20de%20Alvear%204787%2C%20B1678%20Buenos%20Aires%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses!2sar!4v1773447341522!5m2!1ses!2sar" width="600" height="450" style="border:0;" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>',
    instagram: 'https://www.instagram.com/farmaciashunko/',
    facebook: 'https://www.facebook.com/FarmaciasHunko/',
  },
  social: {
    key: 'social',
    nombre: 'Farmacia Social Hunko',
    dominio: 'farmaciasocialhunko.com.ar',
    direccion: 'Carhue 99 - Liniers',
    telefono: '011 6133-3590',
    whatsapp: '5491161333590',
    horarioSemana: '09:00 - 19:00 hs',
    horarioSabado: '09:00 - 14:00 hs',
    obrasSociales: ['OSDE', 'Swiss Medical', 'PAMI'],
    googleMapsEmbed:
      '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3282.5808578748333!2d-58.530009252886956!3d-34.64003088984384!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcc847382b8827%3A0x5ec92fd0edb82340!2sFarmacia%20Social%20Hunko!5e0!3m2!1ses!2sar!4v1773447466666!5m2!1ses!2sar" width="600" height="450" style="border:0;" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>',
    instagram: 'https://www.instagram.com/farmaciashunko/',
    facebook: 'https://www.facebook.com/FarmaciasHunko/',
  },
  rio1: {
    key: 'rio1',
    nombre: 'Farmacia Rio1',
    dominio: 'farmaciario1.com.ar',
    direccion: 'Av. Díaz Vélez 4500 - Almagro',
    telefono: '011 2262-2826',
    whatsapp: '5491122622826',
    horarioSemana: '08:00 - 20:00 hs',
    horarioSabado: '09:00 - 14:00 hs',
    obrasSociales: ['OSDE', 'Medife', 'Swiss Medical', 'PAMI', 'Galeno', 'Medicus', 'Osseg', 'Centro Médico Pueyrredon', 'Policía Federal', 'Ospical'],
    googleMapsEmbed:
      '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3283.814159312437!2d-58.43287288881336!3d-34.608860557656755!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcca68f510bf33%3A0x901e86dc2ecb6a5f!2sAv.%20D%C3%ADaz%20V%C3%A9lez%204500%2C%20C1200AAY%20Cdad.%20Aut%C3%B3noma%20de%20Buenos%20Aires!5e0!3m2!1ses!2sar!4v1773447520216!5m2!1ses!2sar" width="600" height="450" style="border:0;" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>',
    instagram: 'https://www.instagram.com/farmaciashunko/',
    facebook: 'https://www.facebook.com/FarmaciasHunko/',
  },
  palermo: {
    key: 'palermo',
    nombre: 'Farmacia Nueva Palermo',
    dominio: 'farmacianuevapale.com.ar',
    direccion: 'Bulnes 2001 - Palermo',
    telefono: '011 7153-8375',
    whatsapp: '5491171538375',
    horarioSemana: '09:00 - 20:00 hs',
    horarioSabado: '09:00 - 13:00 hs',
    obrasSociales: ['Swiss Medical', 'Galeno'],
    googleMapsEmbed:
      '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3284.6393021523004!2d-58.41397488881431!3d-34.58799225655478!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcca82289ba017%3A0x53c0b33fab8636ee!2sBulnes%202001%2C%20C1425DKI%20Cdad.%20Aut%C3%B3noma%20de%20Buenos%20Aires!5e0!3m2!1ses!2sar!4v1773447562872!5m2!1ses!2sar" width="600" height="450" style="border:0;" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>',
    instagram: 'https://www.instagram.com/farmaciashunko/',
    facebook: 'https://www.facebook.com/FarmaciasHunko/',
  },
}

export function getFarmaciaByDominio(dominio: string): Farmacia | undefined {
  return Object.values(farmacias).find((f) => f.dominio === dominio)
}

export function getFarmaciaByKey(key: FarmaciaKey): Farmacia {
  return farmacias[key]
}
