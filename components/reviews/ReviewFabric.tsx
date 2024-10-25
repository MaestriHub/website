import React from "react"
import Image from "next/image"
import TextFabric from "../TextFabric"

import first from "@/public/images/1stPerson.svg"
import second from "@/public/images/2ndPerson.svg"
import third from "@/public/images/3rdPerson.svg"
import fourth from "@/public/images/4thPerson.svg"

interface ReviewDataProps {
  id: number
  title: string
  role: string
  description: string
}

interface PesronImageProps {
  id: number
}

const PersonImage = ({ id }: PesronImageProps) => {
  switch (id) {
    case 1:
      return (
        <div className="flex items-center justify-center relative w-[15vw] h-[15vw] xl:w-[5.7vw] xl:h-[5.7vw]">
          <Image
            src={first}
            alt={"1st person"}
            className="w-full h-full left-[-10%] absolute"
          ></Image>
        </div>
      )
    case 2:
      return (
        <div className="flex items-center justify-center relative w-[16vw] h-[16vw] xl:w-[7vw] xl:h-[7vw]">
          <Image
            src={second}
            alt={"2nd person"}
            className="w-full h-full absolute"
          ></Image>
        </div>
      )
    case 3:
      return (
        <div className="flex items-center justify-center relative w-[16vw] h-[16vw] xl:w-[7vw] xl:h-[7vw]">
          <Image
            src={third}
            alt={"3rd person"}
            className="w-full h-full absolute"
          ></Image>
        </div>
      )
    case 4:
      return (
        <div className="flex items-center justify-center relative  w-[17vw] h-[17vw] xl:w-[7.5vw] xl:h-[7.5vw]">
          <Image
            src={fourth}
            alt={"4th person"}
            className="w-full h-full absolute"
          ></Image>
        </div>
      )
  }
}

const Review = ({ id, title, role, description }: ReviewDataProps) => {
  return (
    <div className="w-full xl:w-1/4 p-6 border flex flex-col gap-y-6 rounded-[21px]">
      <div className="flex items-center max-h-[10vh] gap-x-2">
        <PersonImage id={id} />

        <div>
          <TextFabric text={title} id={4}></TextFabric>
          <TextFabric text={role} id={5}></TextFabric>
        </div>
      </div>
      <TextFabric text={description} id={2}></TextFabric>
    </div>
  )
}

export default Review
