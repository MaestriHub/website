"use client"

import React from "react"
import Image from "next/image"
import VitaliyBG from "@/public/images/vitaliyBG.svg"
import TextFabric from "../TextFabric"

import Vitalik from "@/public/images/Vitalik.svg"
import { useRouter } from "next/navigation"

const Vitaliy = () => {
  const router = useRouter()
  return (
    <>
      <div className="w-full p-7 z-[1000] flex flex-col gap-y-4">
        <TextFabric id={2} text={"Any question?"}></TextFabric>
        <div className="flex items-center gap-x-3">
          <Image src={Vitalik} alt={""} className="xl:w-[6vw] w-[17vw]"></Image>
          <div className="flex flex-col ">
            <TextFabric id={4} text={"Support team"}></TextFabric>
            <TextFabric id={2} text={"Maestri"}></TextFabric>
          </div>
        </div>
        <button
          onClick={() => router.push("https://t.me/maestri_app")}
          className="p-[5%] bg-white dark:active:bg-lightText/40 active:bg-dark-bg/10 transition-all duration-100 dark:bg-dark-bg rounded-[15px] min-h-[45px] flex w-full items-center mt-[2%] justify-center"
        >
          <TextFabric id={5} text={"ask questions"}></TextFabric>
        </button>
      </div>
      <Image
        src={VitaliyBG}
        layout="fill"
        objectFit="cover"
        className="rounded-[20px] dark:opacity-25"
        alt={""}
      ></Image>
    </>
  )
}

export default Vitaliy
