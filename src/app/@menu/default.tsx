"use client"

import {List} from "@/app/_components/List";
import Image from "next/image";
import Three from "@/assets/img/three-logo.png"
import {useRouter} from "next/navigation";

export default function Default() {

    const router = useRouter()

    const handleOnClick = () => {
        router.push("/")
    }

    return (
        <>
            <div className={"relative h-10 w-14 mt-5 ml-6"}>
                <Image src={Three} alt={""} onClick={handleOnClick}/>
            </div>
        <div className={"pt-2.5 pl-5 flex items-center"}>
            <List items={[{value: "/market", label: "삼쩜삼 마켓"}, {value: "/story", label: "이야기"}]} />
        </div>
        </>
    )
}