"use client"
import React from "react"
import Image from "next/image"
import { useRouter } from "next/navigation"

import appstore from "@/public/images/appstore.svg"

const AppleButton = () => {
  const router = useRouter()

  return (
    <button
      onClick={() =>
        router.push("https://apps.apple.com/ru/app/maestri/id6469101735")
      }
      className="mt-[7%] active:scale-105 xl:hover:scale-105 transition-all"
    >
      <Image src={appstore} alt={""}></Image>
    </button>
  )
}

export default AppleButton
