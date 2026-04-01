# Rodyna Farmacias - Multi-Domain Website

Un sitio web moderno, rápido y dinámico para las 4 farmacias del grupo Rodyna, con un único deploy en Vercel que detecta automáticamente el dominio y renderiza la información de la farmacia correspondiente.

## 🎯 Características

- **Multi-dominio**: 4 dominios independientes (`*.com.ar`) apuntando a un único deploy
- **Detección automática de farmacia**: Basada en el header `Host`
- **Metadata y OG tags dinámicas**: Adaptadas por farmacia
- **Formulario de contacto**: Envía emails mediante Resend
- **Diseño responsive**: Mobile-first con Tailwind CSS
- **Performance optimizado**: SSR + caching de Vercel
- **TypeScript**: Tipado completo

## 🛠️ Stack

- Next.js 15 (App Router)
- TypeScript
- Tailwind CSS
- Resend (emails)
- Vercel (deploy)

## 📋 Dominios

- `farmaciahunko.com.ar` → Farmacia Hunko
- `farmaciasocialhunko.com.ar` → Farmacia Social Hunko
- `farmaciario1.com.ar` → Farmacia Rio1
- `farmacianuevapale.com.ar` → Farmacia Nueva Palermo

Todos los emails van a: `administracion@rodynafarmacias.com.ar`

## 🚀 Desarrollo Local

```bash
npm install
npm run dev  # http://localhost:3000
```

## 🔧 Setup en Vercel

1. **Crear proyecto**: `vercel link`
2. **Variable de entorno**: `RESEND_API_KEY` (obtener en resend.com)
3. **Agregar 4 dominios** en Vercel Dashboard
4. **Configurar DNS** en nic.ar (nameservers o CNAME records)

## 📁 Estructura

```
src/
├── app/
│   ├── layout.tsx (metadata dinámica)
│   ├── page.tsx (componentes)
│   └── api/contact/route.ts (emails)
├── middleware.ts (detección de dominio)
├── components/ (Header, Hero, About, etc)
├── data/farmacias.ts (datos de las 4 farmacias)
├── hooks/useFarmacia.ts
└── types/farmacia.ts
```

## 🔄 Cómo Funciona

1. Request llega a Vercel con dominio specific
2. `middleware.ts` lee el header `Host` y detecta la farmacia
3. Inyecta `x-farmacia-key` en los headers
4. `layout.tsx` genera metadata única por farmacia
5. `page.tsx` renderiza con datos de esa farmacia

## 🎨 Colores

- Primary: #4CAF50 (verde)
- Secondary: #374351 (gris oscuro)
- Surface: #f8f9fa
- Background: #ffffff

Fuentes: Plus Jakarta Sans + Manrope (Google Fonts)

## 📧 Emails

Formulario contacto usa Resend:
- **De**: Rodyna Farmacias <noreply@rodynafarmacias.com.ar>
- **Para**: administracion@rodynafarmacias.com.ar
- **Reply-To**: Email del usuario
- **Subject**: [nombre farmacia] Consulta de {nombre}

## 🧪 Testing

En `localhost:3000` carga Farmacia Hunko por defecto.

Para cambiar farmacia en dev, modifica `middleware.ts`:
```typescript
'localhost:3000': 'social',  // o 'rio1', 'palermo'
```

## 🌐 Dominios en nic.ar

Para cada dominio:

**Opción A: Nameservers** (Recomendado)
- Reemplaza nameservers con los de Vercel
- Espera 24-48 horas

**Opción B: CNAME**
- Agrega record: `@ CNAME cname.vercel-dns.com.`

## 📱 Secciones

1. Header - Nav fija
2. Hero - Imagen + CTAs
3. About - Nosotros
4. Catalog - Redirecciona a www.rodynafarmacias.com.ar
5. Services - Obras sociales (dinámico)
6. Schedules - Horarios (dinámico)
7. Contact - Formulario + mapa
8. Footer
9. WhatsApp - Botón flotante

## 🚢 Deploy

```bash
npm run build
git push origin main  # Deploy automático desde Vercel
```

## 📝 Notas

- Las imágenes usan Unsplash (placeholder) → reemplaza en /public
- Google Maps embed viene del CLAUDE.md
- Email siempre va a administracion@rodynafarmacias.com.ar
- Cada farmacia ve su propia info (dirección, teléfono, horarios, obras sociales)

## 📞 Contacto

Email: administracion@rodynafarmacias.com.ar
