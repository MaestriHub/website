import Link from "next/link"
import React, { Suspense } from "react"
import Image from "next/image"
import logo from "@/public/images/logo.svg"
import TextFabric from "@/components/TextFabric"
import MainPhoneBlock from "@/public/images/MainPhoneBLock2.svg"
import SecondaryPhoneBlock from "@/public/images/SecondaryPhoneBlock2.svg"
import SecondaryPhoneBlock2 from "@/public/images/SecondaryPhoneBlock2_2.svg"
import ThemeSwitcher from "@/components/ThemeSwitcher"
import AppleButton from "@/components/AppleButton"
import InviteButton from "@/components/invite/InviteButton"

const ClientInvite = () => {
  return (
    <div>
      <header
        id="logo"
        className="h-[7vh] fixed z-[1000] bg-white w-full justify-between px-[3.5%] flex items-center dark:bg-dark-bg"
      >
        <Link href={"/"}>
          <Image src={logo} alt={"logo"} className="w-[7vw] dark:invert" />
        </Link>
        <ThemeSwitcher></ThemeSwitcher>
      </header>
      <main className="h-screen flex h-full py-[30vh] items-center flex px-[7%]">
        <div className="w-1/2 h-full flex flex-col justify-between">
          <div className="w-full flex flex-col gap-2">
            <TextFabric
              text={"you have been invited to join the salon as a client"}
              id={1}
            ></TextFabric>
            <TextFabric
              text={"*choose masters, sign up online"}
              id={2}
            ></TextFabric>
          </div>

          <div className="flex flex-col gap-2">
            <TextFabric
              text={
                "To continue, download the application and follow the link again"
              }
              id={2}
            ></TextFabric>
            <div className="flex items-center gap-4">
              <AppleButton />

              <Suspense fallback={<div>Loading...</div>}>
                <InviteButton />
              </Suspense>
            </div>
          </div>
        </div>

        <div className="w-[80%] xl:w-1/2 xl:h-full flex items-center justify-center relative">
          <Image
            src={MainPhoneBlock}
            alt={""}
            className="w-[40vw] xl:w-[16vw] z-[1000]"
          />
          <Image
            src={SecondaryPhoneBlock}
            alt=""
            className="w-[25vw] scale-125 xl:scale-100 xl:w-[12vw] absolute left-[5vw]"
          />
          <Image
            src={SecondaryPhoneBlock2}
            alt=""
            className="w-[25vw] scale-125 xl:scale-100 xl:w-[12vw] absolute right-[5vw]"
          />
        </div>
      </main>
    </div>
  )
}

export default ClientInvite
