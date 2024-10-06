import Header from "@/components/Header";
import IntroSection from "@/components/rootPage/IntroSection";
import TravelSection from "@/components/rootPage/TravelSection";
import WorkingSection from "@/components/rootPage/WorkingSection";

export default function Home() {
  return (
    <>
      <Header />
      <main className="mx-auto max-w-screen-xl text-slate-900">
        <IntroSection />
        <WorkingSection />
        <TravelSection />
      </main>
    </>
  );
}
