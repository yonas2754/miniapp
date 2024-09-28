import { getSession } from '@/utils/session';
import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Coins from '@/components/icons/Coins';
import Friends from '@/components/icons/Friends';
import Mine from '@/components/icons/Mine';

// Define types for the Lottery Card props
interface LotteryCardProps {
  date: string;
  imageSrc: string;
  amount: number;
  price: number;
}

// Reusable LotteryCard component with type safety
const LotteryCard: React.FC<LotteryCardProps> = ({ date, imageSrc, amount, price }) => (
  <Card className='bg-ethLightBlue-950 text-white'>
    <CardHeader>
      <CardTitle>Day at {date}</CardTitle>
      <CardDescription>
        <Image src={imageSrc} alt="Lottery Image" sizes="100vw" style={{ objectFit: 'cover' }} />
      </CardDescription>
    </CardHeader>
    <CardContent className="space-y-2">
      <div className="flex items-center justify-center space-x-1">
        <Image src="/image/dollar-coin.png" alt="Dollar Icon" width={24} height={24} />
        <p className="text-lg">{amount}</p>
      </div>
    </CardContent>
    <CardFooter>
      <p className="text-sm">Price: {price}</p>
    </CardFooter>
  </Card>
);

// Define a type for the tabsData structure
type TabsData = Record<string, LotteryCardProps[]>;

export default async function ProtectedPage() {
  const session = await getSession();

  // Centralized card data
  const tabsData: TabsData = {
    own: [
      { date: "9/24/2021", imageSrc: "/image/lottery_winning3.png", amount: 2000, price: 100 },
      { date: "9/24/2021", imageSrc: "/image/lottery_winning3.png", amount: 4000, price: 100 }
    ],
    available: [
      { date: "10/27/2024", imageSrc: "/image/lottery_winning2.png", amount: 10000, price: 500 }
    ],
    end: [
      { date: "10/27/2025", imageSrc: "/image/lottery_winning1.png", amount: 10000, price: 500 }
    ]
  };

  return (
    <div className="w-full bg-ethBlack-600 text-white h-screen font-bold flex flex-col max-w-xl">
      <div className="px-4 z-10 pt-4">
        <div className="flex items-center space-x-2">
          <div className="p-1 rounded-lg bg-[#1d2025]">
            <Image src="/image/lottery_winning3.png" alt="Profile Pic" width={30} height={30} />
          </div>
          <p className="text-sm">yonas (CEO)</p>
        </div>
      </div>

      <div className='flex flex-col rounded-t-3xl bg-ethBlack-500 border-t-2 shadow-2xl border-ethYellow-500 w-full grow p-8'>
        <Tabs defaultValue="own" className="w-full grow">
          <TabsList className="grid w-full grid-cols-3 bg-ethBlack-400">
            {Object.keys(tabsData).map(key => (
              <TabsTrigger key={key} value={key} className='bg-ethBlack-500 capitalize'>
                {key}
              </TabsTrigger>
            ))}
          </TabsList>

          {Object.entries(tabsData).map(([key, cards]) => (
            <TabsContent key={key} value={key}>
              <div className='grid grid-cols-2 gap-2'>
                {cards.map((card, index) => (
                  <LotteryCard key={index} {...card} />
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>

        <div className="px-4 mt-4 flex justify-center">
          <div className="p-4 rounded-full circle-outer">
            <div className="w-full h-full rounded-full circle-inner">
              <Link href="/protected/protectedlist">
                <p className='text-center font-bold text-lg text-ethYellow-600'>1200</p>
              </Link>
            </div>
          </div>
        </div>
      </div>





      <div className="fixed bottom-0 left-1/2 transform -translate-x-1/2 w-[calc(100%-2rem)] max-w-xl bg-[#272a2f] flex justify-around items-center z-50 rounded-3xl text-xs p-2">
        <div className="text-center text-[#85827d] w-1/5 bg-[#1c1f24] m-1 p-2 rounded-2xl">
        {/*   <img src={binanceLogo} alt="Exchange" className="w-8 h-8 mx-auto" /> */}
          <p className="mt-1  text-lg  font-extrabold text-ethYellow-600">Mela</p>
        </div>
        <div className="text-center text-[#85827d] w-1/5">
          <Mine className="w-8 h-8 mx-auto" />
          <p className="mt-1">Bank</p>
        </div>
        <div className="text-center text-[#85827d] w-1/5">
          <Friends className="w-8 h-8 mx-auto" />
          <p className="mt-1">Friends</p>
        </div>
        <div className="text-center text-[#85827d] w-1/5">
          <Coins className="w-8 h-8 mx-auto" />
          <p className="mt-1">Earn</p>
        </div>
        {/* <div className="text-center text-[#85827d] w-1/5">
         <img src={hamsterCoin} alt="Airdrop" className="w-8 h-8 mx-auto" /> 
          <p className="mt-1">Airdrop</p>
        </div> */}
      </div>
    </div>
  );
}


     {/*   <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <h1 className="text-3xl font-bold mb-4">Protected Page</h1>
        <h1 className="text-4xl font-bold mb-8">Jwt Authentication for Telegram Mini Apps</h1>
        <pre>{JSON.stringify(session, null, 2)}</pre>
        <p className="text-xl">Welcome to the protected page! Only authenticated users can see this.</p>
      </div> */}