import Image, {StaticImageData} from "next/image";
import clsx from "clsx";

type MainBoardItemType = {
    value: string
    img: string | StaticImageData
    title?: string
    description?: string
}

interface MainBoardItemList {
    items: MainBoardItemType[]
    className?: string
    itemWrapperCls?: string
    divide?:boolean
}

export const MainBoardItemList = ({items, className, itemWrapperCls, divide}: MainBoardItemList) => {

    const classes = clsx("flex flex-row overflow-x-auto", className, divide && "divide-dotted divide-y gap-1.5")
    const wrapperClasses = clsx("size-full", itemWrapperCls)

    return (
        <div className={classes}>
            {items.map((value) => (
                <div className={wrapperClasses} key={value.value}>
                    <div className={"relative size-36 p-5 bg-gray-200 mt-1.5 mr-1.5 rounded-xl"}>
                        <Image src={value.img} alt={""}/>
                    </div>
                    {value.title && value.description && (
                        <div className={"flex flex-col gap-1.5 pt-1.5"}>
                            <div className={"text-base"}>{value.title}</div>
                            <div className={"text-sm"}>{value.description}</div>
                        </div>)}
                </div>
            ))}
        </div>
    )
}