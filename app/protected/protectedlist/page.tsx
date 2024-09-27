'use client'
import React from 'react'
import { useEffect } from "react";

function Page() {


  useEffect(() => {
    // Show the splash screen for 30 seconds
    const changeHeaderColor = async () => {
        const WebApp = (await import('@twa-dev/sdk')).default
        WebApp.ready()
  
        // Set the Mini App bar color to a custom color, e.g., dark grey
        WebApp.setHeaderColor('#1F1F1F')


        if (WebApp.BackButton.isVisible) {
          WebApp.BackButton.show();
          WebApp.BackButton.onClick(() => {
            // Handle the back button click, for example: navigate back
            window.history.back();
          });
  
          // Hide the default close button if visible
          if (WebApp.MainButton.isVisible) {
            WebApp.MainButton.hide();
          }
       
      }
    }
      changeHeaderColor()
   

  // Clear timer on component unmount
}, []) 


  return (
    <div className='bg-red-300 h-screen w-full'>
      <h1>hu</h1>
    </div>
  )
}

export default Page
