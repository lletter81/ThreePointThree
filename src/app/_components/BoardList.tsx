import Image, {StaticImageData} from "next/image";

type BoardContentType = {
    src: string | StaticImageData
    alt: string
    category: string
    name: string
    title: string
    description: string
    value: string
}

interface BoardListProps {
    items: BoardContentType[]
}

export const BoardList = ({items}: BoardListProps) => {
    return (
        <div className={"flex flex-col gap-2.5"}>
            {items.map((value) => (
                <div className={"rounded-xl bg-gray-200 mr-1 py-1 px-1"} key={value.value}>
                    <div className={"flex flex-row gap-2.5 pl-1.5 items-center"}>
                        <div className={"size-5 rounded-full relative bg-white"}>
                            <Image src={value.src} alt={value.alt} fill/>
                        </div>
                        <div className={"flex flex-col gap-1"}>
                            <div className={"font-sans text-xs font-bold"}>{value.category}</div>
                            <div className={"font-sans text-xs"}>{value.name}</div>
                        </div>
                    </div>
                    <div className={"font-sans text-base font-bold pl-1 pt-1.5 truncate"}>
                        {value.title}
                    </div>
                    <div className={"font-sans text-sm pl-1 pt-0.5 truncate"}>
                        {value.description}
                    </div>
                </div>
            ))}
        </div>
    )
}