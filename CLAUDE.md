# Objetivo: Un servidor para 4 paginas web de 4 Farmacias distintas.
# Stack
Next.js 15 con App Router. Deply en Vercel.

# Información de las 4 farmacias:
## Farmacia Hunko:
Nombre: Farmacia Hunko.
Dirección: Av. Marcelo T. de Alvear 4787 - Caseros
Teléfono: 00549116412 7300
Horario: De lunes a Viernes de 9:00 a 13:00 y de 16:00 a 20:00hs. Los sábados de 9:00 a 13:00hs
Obras Sociales: Osde, Medife, Swiss Medical, PAMI, Ioma, Luis Pasteur.
Google Maps: <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3283.1153242042974!2d-58.56744168881245!3d-34.62652585859004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcb8063c4fc6e5%3A0x5efe3a5baabe88df!2sAv.%20Marcelo%20Torcuato%20de%20Alvear%204787%2C%20B1678%20Buenos%20Aires%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses!2sar!4v1773447341522!5m2!1ses!2sar" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
URLs:
Instagram: https://www.instagram.com/farmaciashunko/
Facebook:https://www.facebook.com/FarmaciasHunko/

## Farmacia Social Hunko:
Nombre: Farmacia Social Hunko.
Dirección: Carhue 99 - Liniers
Teléfono: 005491161333590
Horario: De lunes a Viernes de 9:00 a 19hs. Los sábados de 9:00 a 14:00hs
Obras Sociales: Osde, Swiss Medical, PAMI.
Google Maps: <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3282.5808578748333!2d-58.530009252886956!3d-34.64003088984384!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcc847382b8827%3A0x5ec92fd0edb82340!2sFarmacia%20Social%20Hunko!5e0!3m2!1ses!2sar!4v1773447466666!5m2!1ses!2sar" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
URLs:
Instagram: https://www.instagram.com/farmaciashunko/
Facebook:https://www.facebook.com/FarmaciasHunko/

## Farmacia Rio1:
Nombre: Farmacia Rio1.
Dirección: Av. Diaz velez 4500- Almagro
Teléfono: 005491122622826
Horario: De lunes a Viernes de 8:00 a 20hs. Los sábados de 9:00 a 14:00hs
Obras Sociales: Osde, Medife, Swite Medical, PAMI, Galeno, Medicus,Osseg, Medife, Osseg, Centro médico Pueyrredon, Policia Federal, Ospical
Google Maps: <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3283.814159312437!2d-58.43287288881336!3d-34.608860557656755!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcca68f510bf33%3A0x901e86dc2ecb6a5f!2sAv.%20D%C3%ADaz%20V%C3%A9lez%204500%2C%20C1200AAY%20Cdad.%20Aut%C3%B3noma%20de%20Buenos%20Aires!5e0!3m2!1ses!2sar!4v1773447520216!5m2!1ses!2sar" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
URLs:
Instagram: https://www.instagram.com/farmaciashunko/
Facebook:https://www.facebook.com/FarmaciasHunko/

## Farmacia Nueva Palermo:
Nombre: Farmacia Nueva Palermo.
Dirección: Bulnes 2001 - Palermo
Teléfono: 005491171538375
Horario: De lunes a Viernes de 9:00 a 20hs. Los sábados de 9:00 a 13:00hs
Obras Sociales: Swiss Medical, Galeno.
Google Maps: <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3284.6393021523004!2d-58.41397488881431!3d-34.58799225655478!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcca82289ba017%3A0x53c0b33fab8636ee!2sBulnes%202001%2C%20C1425DKI%20Cdad.%20Aut%C3%B3noma%20de%20Buenos%20Aires!5e0!3m2!1ses!2sar!4v1773447562872!5m2!1ses!2sar" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

URLs:
Instagram: https://www.instagram.com/farmaciashunko/
Facebook:https://www.facebook.com/FarmaciasHunko/

 
 # Estructura y estilos.
Entrá a la carpeta @Vista y fijate el code.html, basate en ése codigo para armar la estructura y estilos.

# OG - Open Graph tags
Quiero que agregues etiquetas Open Graph para que, cuando se comparta la URL del sitio, se vea una vista previa atractiva segun la farmacia. Usá título, descripción, imagen, URL y el favicon/logo del proyecto. 
Ejemplo:
og:title: "Farmacia Social Hunko"
og:description: "Farmacias online con envío rápido y precios competitivos."
og:image: sacala de /assets/cruz_color_claro.svg
og:url: www.rodynafarmacias.com.ar

# Estructura 
proyecto/
  ├── src/                                                                      
  │   ├── app/
  │   │   ├── layout.tsx          # Layout compartido                           
  │   │   ├── page.tsx            # Home (detecta dominio aquí)
  │   │   ├── catalog/                                                          
  │   │   │   └── page.tsx        # Redirecciona a rodyna
  │   │   └── middleware.ts       # Detecta dominio + redireccionamientos       
  │   ├── data/                                                                 
  │   │   └── farmacias.ts        # Datos de las 4 farmacias                    
  │   ├── components/                                                           
  │   │   ├── Header.tsx
  │   │   ├── Hero.tsx                                                          
  │   │   ├── Contact.tsx
  │   │   ├── About.tsx       # Nosotros
  │   │   └── Services.tsx    # Obras Sociales                                                  
  │   ├── hooks/
  │   │   └── useFarmacia.ts      # Hook para obtener datos del dominio         
  │   └── types/                                                                
  │       └── farmacia.ts         # TypeScript types
  ├── public/                                                                   
  │   ├── images/ 
  │   ├── farmacia1-logo.svg                                                    
  │   └── ...
  ├── package.json                                                              
  ├── next.config.js
  ├── tsconfig.json                                                             
  └── .env.local


# AUTONOMÍA                                                                   
  - Trabaja sin pedir confirmación mientras sigas las reglas de este archivo
  - Aun no tengo repo asociado, lo pusheamos en una segunda etapa.