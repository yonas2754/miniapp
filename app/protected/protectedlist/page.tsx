'use client'
import { useEffect } from "react";
import Head from "next/head";

const TelegramPage = () => {
  useEffect(() => {
    const initTelegramWebApp = async () => {
      const WebApp = (await import('@twa-dev/sdk')).default;

      // Initialize the WebApp
      WebApp.ready()

      // Check if the back button is available and customize it
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
    };

    if (typeof window !== "undefined") {
      initTelegramWebApp();
    }
  }, []);

  return (
    <>
      <Head>
        <title>Telegram Mini App</title>
      </Head>
      <div style={{ padding: "20px", textAlign: "center" }}>
        <h1>Telegram Mini App</h1>
        <p>Welcome to your custom Telegram Mini App with a Back Button!</p>
      </div>
    </>
  );
};

export default TelegramPage;
