'use client'
import Navbar from "@/components/shared/Navbar";
import "./globals.css";
import StoreProvider from "@/Redux/storeProvider";
import { makeStore } from "@/Redux/makeStore";

export default function RootLayout({ children }) {
  return (
    <StoreProvider store={makeStore}>
      <html lang="en">
        <body className="min-h-screen">
          <header>
            <Navbar />
          </header>
          <main className="pt-20 flex justify-center items-center min-h-screen">
            {children}
          </main>
        </body>
      </html>
    </StoreProvider>
  );
}
