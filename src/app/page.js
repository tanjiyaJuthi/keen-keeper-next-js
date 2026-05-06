import Counter from "@/components/Counter";
import Friends from "@/components/Friends";
import Hero from "@/components/Hero";
import { DiVim } from "react-icons/di";

export default function Home() {
  return (
    <div className="bg-[#F8FAFC]">
        <Hero />
        <Counter/>
        <Friends />
    </div>
  );
}
