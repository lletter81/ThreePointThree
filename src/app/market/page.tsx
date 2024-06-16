import {MainBoardItemList} from "@/app/_components/MainBoardItemList";
import Item from "@/assets/img/three-logo.png";
import {MainBoard} from "@/app/_components/MainBoard";

export default function Page() {
    return (
        <>
            <MainBoard title={"금주의 잇템!"} className={"mt-5 mx-5 bg-white rounded-xl pt-2.5 pb-1.5 pl-1.5"}>
                <MainBoardItemList items={[{value: "1", img: Item}, {value: "2", img: Item}, {value: "3", img: Item}, {
                    value: "4",
                    img: Item
                }]}/>
            </MainBoard>
            <MainBoard className={"mt-5 mx-5 bg-white rounded-xl pt-2.5 pb-1.5 pl-1.5"}>
                <MainBoardItemList
                    itemWrapperCls={"flex flex-row"}
                    className={"!flex-col pl-1.5"}
                    divide
                    items={[
                        {value: "1", img: Item, title: "유행하는 아이템1", description: "유행하는 아이템1"},
                        {value: "2", img: Item, title: "유행하는 아이템2", description: "유행하는 아이템2"},
                        {value: "3", img: Item, title: "유행하는 아이템3", description: "유행하는 아이템3"},
                    ]}/>
            </MainBoard>
        </>
    )
}