import { headers } from 'next/headers'
import { getFarmaciaByKey } from '@/data/farmacias'
import { FarmaciaKey } from '@/types/farmacia'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { Terms } from '@/components/Terms'

export default async function TerminosPage() {
  const headersList = await headers()
  const key = (headersList.get('x-farmacia-key') || 'rio1') as FarmaciaKey
  const farmacia = getFarmaciaByKey(key)

  return (
    <>
      <main className="pt-8 md:pt-16">
        <Terms farmacia={farmacia} />
        <Footer farmacia={farmacia} />
      </main>
    </>
  )
}
