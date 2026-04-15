import { headers } from 'next/headers'
import { getFarmaciaByKey } from '@/data/farmacias'
import { FarmaciaKey } from '@/types/farmacia'
import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { About } from '@/components/About'
import { Catalog } from '@/components/Catalog'
import { Services } from '@/components/Services'
import { Schedules } from '@/components/Schedules'
import { Contact } from '@/components/Contact'
import { Footer } from '@/components/Footer'
import { WhatsAppButton } from '@/components/WhatsAppButton'

export default async function Home() {
  const headersList = await headers()
  const key = (headersList.get('x-farmacia-key') || 'hunko') as FarmaciaKey
  const farmacia = getFarmaciaByKey(key)

  return (
    <>
      <Header farmacia={farmacia} />
      <main className="pt-8 md:pt-16">
        <Hero farmacia={farmacia} />
        <About />
        <Catalog />
        <Services farmacia={farmacia} />
        <Schedules farmacia={farmacia} />
        <Contact farmacia={farmacia} />
        <Footer farmacia={farmacia} />
      </main>
      <WhatsAppButton farmacia={farmacia} />
    </>
  )
}
