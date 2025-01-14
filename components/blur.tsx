"use client"
import { useEffect, useState } from "react";

export default function Blur() {
    const [blur, setBlur] = useState(true)
    useEffect(() => {
        setTimeout(() => {
            setBlur(false)
        }, 500)
    }, [])
  return (
    <div className={`h-screen w-screen absolute  inset-0 ${blur ? "backdrop-blur" : "z-[-1]"}`}>
    </div>
  );
}
