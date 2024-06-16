"use client"

import {usePathname, useRouter, useSearchParams} from "next/navigation";
import clsx from "clsx";

export type ItemsType = {
    value: string
    label: string
}

interface ListProps {
    items: ItemsType[]
}

export const List = ({items}: ListProps) => {

    const router = useRouter()
    const pathname = usePathname()

    const handlerOnClick = (value:string) => {
        router.push(value)
    }

    return (
        <div className={"size-full flex flex-row items-center gap-1.5"}>
            {items.map((value) => {
                return (
                    <div className={"flex h-8 rounded-3xl bg-white items-center px-2"} key={value.value} >
                        <div className={"size-1 rounded-full bg-amber-500"}/>
                        <div className={clsx("px-2 truncate flex items-center font-mono text-gray-900", value.value === pathname && "font-bold")}
                             onClick={() => handlerOnClick(value.value)}>{value.label}</div>
                    </div>
                )
            })}
        </div>
    )
}