

import { getSession } from '@/utils/session';
import ReferralSystem from '@/components/referralSystem'
import Footer from '@/components/footer';


export default async function Home() {
    const session = await getSession();



  return (
    <div>  
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-4xl font-bold mb-8">Mela invitation</h1>

      <ReferralSystem userId={session.user.telegramId}  />
   
    </main>
    <Footer/></div>
  )
}