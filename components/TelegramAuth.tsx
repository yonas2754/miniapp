'use client'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import mountains from '../public/image/melaImage.jpg'
import mountains2 from '../public/image/lottery_winning3.png'
import { LoaderCircle } from 'lucide-react'


export default function TelegramAuth() {
    const [isAuthenticated, setIsAuthenticated] = useState(false)
    const [showSplash, setShowSplash] = useState(true) // State to control splash visibility
    const router = useRouter()

    useEffect(() => {
        // Show the splash screen for 30 seconds
        const splashTimer = setTimeout(() => {
            setShowSplash(false) // Hide splash screen after 30 seconds
            authenticateUser()    // Start authentication after splash
        }, 2000)

        return () => clearTimeout(splashTimer) // Clear timer on component unmount
    }, [])

    useEffect(() => {
        if (isAuthenticated) {
            router.push('/protected') // Automatically redirect to '/protected' once authenticated
        }
    }, [isAuthenticated, router])

    const authenticateUser = async () => {
        const WebApp = (await import('@twa-dev/sdk')).default
        WebApp.ready()

  // Change the Mini App bar color
  WebApp.setHeaderColor('#FFD70') // Set the bar color to a yellow (#FFD700)

  // Optionally, change the background color of the Mini App
  WebApp.setBackgroundColor('#000000') // Set the entire app's background color to black

  // Customize the main button color if used
  WebApp.MainButton.setParams({
    color: '#FFD700', // Set the main button color to yellow
    text_color: '#000000', // Set the main button text color to black
  })

  WebApp.MainButton.show() // Make the main button visible




        const initData = WebApp.initData
        if (initData) {
            try {
                const response = await fetch('/api/auth', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ initData }),
                })

                if (response.ok) {
                    setIsAuthenticated(true) // Set authenticated state
                } else {
                    console.error('Authentication failed')
                    setIsAuthenticated(false)
                }
            } catch (error) {
                console.error('Error during authentication:', error)
                setIsAuthenticated(false)
            }
        }
    }

    return (
        <div className="flex  items-center justify-center  w-full h-screen ">
            {showSplash ? (
              <Image
              alt="Mountains"
              src={mountains}
              placeholder="blur"
              quality={100}
              fill
              sizes="100vw"
              style={{
                objectFit: 'cover',
              }}
            />
            ) : (<>
               
                <div className='flex items-center justify-center w-full  h-screen '>


                <Image
              alt="Mountains2"
              src={mountains2}
              placeholder="blur"
              quality={100}
              fill
              sizes="100vw"
              style={{
                objectFit: 'cover',
              }}
            />

                </div>

                 <div className=' flex items-center justify-center w-full h-screen'>
                 <div className='   animate-spin'>
                 <LoaderCircle size={100} strokeWidth={1.25} color="#6B5000" />
              
                 </div>
                 </div>
                </>

            )}
        </div>
    )
}
