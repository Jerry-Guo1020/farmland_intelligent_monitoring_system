import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Image from "next/image";
import Homepage from "@/components/home/homepage"
import IntroduceFunction from "@/components/home/IntroduceFunction"
import Function from "@/components/home/function"
import  Contact  from "@/components/home/contact";


export default function Home() {
  return (
    <main>
     <IntroduceFunction />
    <Homepage />
  <Function />
  <Contact />
    </main>
  

  );
}
