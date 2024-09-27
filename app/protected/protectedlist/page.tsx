'use client';
import React, { useEffect, useCallback } from 'react';
import { useRouter } from 'next/router';

// Define a functional component with TypeScript
const MiniAppWithBackButton: React.FC = () => {
  const router = useRouter();

  useEffect(() => {
    let backButtonHandler: () => void;

    async function initializeTelegram() {
      // Dynamically import the WebApp SDK
      const { default: WebApp } = await import('@twa-dev/sdk');

      WebApp.ready(); // Ensure the WebApp is fully initialized

      // Define the back button click handler using useCallback to maintain reference
      backButtonHandler = () => {
        router.back(); // Navigate back to the previous page
      };

      // Show the back button and set its behavior
      WebApp.BackButton.show();
      WebApp.BackButton.onClick(backButtonHandler);

      // Optional: hide the main button
      WebApp.MainButton.hide();
    }

    initializeTelegram(); // Call the function to initialize the WebApp

    // Clean up the back button listener on component unmount
    return () => {
      if (backButtonHandler) {
        const { default: WebApp } = require('@twa-dev/sdk');
        WebApp.BackButton.offClick(backButtonHandler); // Remove the registered handler
      }
    };
  }, [router]);

  return (
    <div className="w-full h-screen flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-2xl font-bold">Telegram MiniApp with Back Button</h1>
      <p className="mt-4 text-gray-700">Click the back button in the MiniApp header to go back!</p>
    </div>
  );
};

export default MiniAppWithBackButton;
