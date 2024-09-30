

import { getSession } from '@/utils/session';
import ReferralSystem from '@/components/referralSystem'


export default async function Home() {
    const session = await getSession();



  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-4xl font-bold mb-8">Mela invitation</h1>

      <ReferralSystem userId={session.user.telegramId}  />
    </main>
  )
}