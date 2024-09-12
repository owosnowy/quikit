import Header from "@/components/landing/Header";
import Hero from "@/components/landing/Hero";
import { Suspense } from "react";

export default function Home() {
  return (
    <>
    <Suspense>
    <Header />
    </Suspense>
   <main>
    <Hero />
  </main>
</>
  );
}
