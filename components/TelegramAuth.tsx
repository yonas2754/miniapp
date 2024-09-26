'use client'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'

export default function TelegramAuth() {
    const [isAuthenticated, setIsAuthenticated] = useState(false)
    const [showSplash, setShowSplash] = useState(true) // State to control splash visibility
    const router = useRouter()

    useEffect(() => {
        // Show the splash screen for 30 seconds
        const splashTimer = setTimeout(() => {
            setShowSplash(false) // Hide splash screen after 30 seconds
            authenticateUser()    // Start authentication after splash
        }, 30000)

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
        <div className="flex flex-col items-center justify-center h-screen p-8">
            {showSplash ? (
                <p className="text-2xl font-bold">Welcome! Please wait...</p> // Splash screen message
            ) : isAuthenticated ? (
                <p>Authenticated! Redirecting...</p> // Message while redirecting
            ) : (
                <p>Authenticating...</p> // Message during authentication
            )}
        </div>
    )
}
