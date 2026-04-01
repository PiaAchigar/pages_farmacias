import { headers } from 'next/headers'
import { getFarmaciaByKey } from '@/data/farmacias'
import { Farmacia, FarmaciaKey } from '@/types/farmacia'

export async function getFarmaciaFromHeaders(): Promise<Farmacia> {
  const headersList = await headers()
  const key = (headersList.get('x-farmacia-key') || 'hunko') as FarmaciaKey
  return getFarmaciaByKey(key)
}
