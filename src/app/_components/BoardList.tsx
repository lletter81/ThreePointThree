import Image from "next/image";

interface BoardContentProps {
    src: string
    alt: string
    category: string
    name: string
    title: string
    description: string
}

export const Board = ({src, alt, category, name, title, description}:BoardContentProps) => {
    return (
        <div className={"flex size-full"}>
        <div className={"flex flex-fow"}>
            <div className={"size-6 rounded-full relative"}>
                <Image src={src} alt={alt} />
            </div>
            <div>{category}</div>
            <div>{name}</div>
        </div>
            <div>
                {title}
            </div>
            <div>
                {description}
            </div>
        </div>
    )
}