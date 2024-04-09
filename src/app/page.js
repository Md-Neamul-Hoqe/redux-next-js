export const metadata = {
  title: {
    template: '%s - Redux with Next JS',
    default: 'Redux with Next JS'
  },
  description: "Practice Redux with Next JS app",
};

import Counter from "@/components/conpound/counter";

// import { Provider } from 'react-redux'
import StoreProvider from "@/Redux/storeProvider";
// import { store } from "@/Redux/store";
import { makeStore } from "@/Redux/makeStore";

export default function Home() {
  return (
    <Counter />
  );
}
