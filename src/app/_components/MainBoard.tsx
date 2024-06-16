interface BoardProps {
    title: string
    className?: string
    children: React.ReactNode
}
export const Board = ({title,className,children}: BoardProps) => {

    return (
        <div className={className}>
            <div className={"ml-2 bg-gray-200 h-10 rounded-xl py-1 px-2.5 w-fit flex items-center"}>{title}</div>
            {children}
        </div>
    )
}