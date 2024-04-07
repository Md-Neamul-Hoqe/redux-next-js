'use client'

import Counter from "@/components/conpound/counter";
import { Provider } from 'react-redux'
import { store } from "@/Redux/store";

export default function Home() {
  return (
    <Provider store={store}>
      <Counter />
    </Provider>);
}
