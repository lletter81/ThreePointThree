interface BoardProps {
    title?: string
    className?: string
    children: React.ReactNode
}
export const MainBoard = ({title,className,children}: BoardProps) => {

    return (
        <div className={className}>
            {title &&
                <div className={"ml-1.5 bg-gray-200 h-10 rounded-xl px-2.5 w-fit flex items-center font-mono text-blue-600 font-bold"}>{title}</div>}
            {children}
        </div>
    )
}