"use client"
import Link from "next/link";
import { FaLinkedinIn } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { useState } from "react";
import { ThemeToggle } from "@/components/themetoggle";
import Blur from "@/components/blur";
import { FaReact } from "react-icons/fa";
import Image from "next/image";

const startup = [
  {
    name: "Beatnik E-commrce",
    des: "ready to use changelog for your SaaS",
    link: "/"
  },
  {
    name: "Boost E-commrce",
    des: "ready to use changelog for your SaaS",
    link: "/"
  },
  {
    name: "Adbytehub",
    des: "ready to use changelog for your SaaS",
    link: "/"
  },
  {
    name: "Kaira E-commrce",
    des: "ready to use changelog for your SaaS",
    link: "/"
  }
]

const techstack = [
  {
    name: "Next.js",
    des: "/next.svg",
    link: "/"
  },
  {
    name: "Tailwind",
    des: "/tailwind.svg",
    link: "/"
  },
  {
    name: "Typescript",
    des: "/typescript.svg",
    link: "/"
  },
  {
    name: "MongoDB",
    des: "/mongo.svg",
    link: "/"
  },
  {
    name: "PostgreSQL",
    des: "/postgresql.svg",
    link: "/"
  }
]

export default function Home() {
  const [light, setLight] = useState(false);
  const handleclick = ()=>{
     setLight(!light);
  }
  return (
    <div className="max-w-screen-md font-sans bg-background text-foreground mx-auto flex items-center justify-center mt-20">
      <Blur/>
      <div className="flex flex-col gap-8 w-full">
          <div className="flex w-full justify-between items-center">
           <div>
              <h1 className="text-xl font-[600]">Hi, I am Antima Singh</h1>
              <Link href="/" className=" ">antima1574@gmail.com</Link>
           </div>
            <div className="flex gap-4 items-center">
              <ThemeToggle />
              <Link href="https://www.linkedin.com/in/antima-singh-65964b263/" target="_blank"><FaLinkedinIn/></Link>
              <Link href="https://x.com/antima_singh001" target="_blank"><BsTwitterX/></Link>
              <Link href="https://github.com/Antima1123" target="_blank"><FaGithub/></Link>
            </div>
          </div>

          <div className="leading-7 flex flex-col">
              <p>I am a full-stack developer from Milkyway</p>
              <p>Worked for new startsup, <Link href="/" className="hover:text-muted-foreground underline">Learn More</Link></p>
              <p>write technical blogs on Orionix Tech and Medium</p>
              <p>Let's talk how we can work together!</p>
          </div>

          <div>
            <h1 className="text-xl font-[600] pb-4">Start Up Project</h1>
            {startup.map((link,index)=>(
              <p className="leading-7" key={index}>{index+1}{". "}{link.name}{" "}<b className="font-[200] ">{link.des}</b></p>
            ))}
          </div>

          <div>
            <h1 className="text-xl font-[600] pb-4">Tech Stack</h1>
            {techstack.map((link,index)=>(
              <div className="flex items-center gap-2" key={index}>
                <Image className="" src={link.des} alt={link.name} width={20} height={20}/>
                <p className="leading-7" key={index}>{link.name}</p>

              </div>

            ))}
          </div>
        
      </div>
    </div>
  );
}
