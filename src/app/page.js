'use client'
import Navbar from "@/components/shared/Navbar";
import Counter from "@/components/conpound/counter";
import { Provider } from "react-redux";
import { store } from "@/Redux/store";

export default function Home() {
  return (
    <Provider store={store}>
      <header>
        <Navbar />
      </header>
      <main className="pt-20 flex justify-center items-center min-h-screen">
        <Counter />
      </main>
    </Provider>

  );
}
