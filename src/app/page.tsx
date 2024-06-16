import {MainBoard} from "@/app/_components/MainBoard";
import Item from "@/assets/img/three-logo.png"
import {MainBoardItemList} from "@/app/_components/MainBoardItemList";
import {BoardList} from "@/app/_components/BoardList";

export default function Home() {
    return (
        <>
            <MainBoard title={"오늘의 핫딜"} className={"mt-5 mx-5 bg-white rounded-xl pt-2.5 pb-1.5 pl-1.5"}>
                <MainBoardItemList items={[{value: "1", img: Item}, {value: "2", img: Item}, {value: "3", img: Item}, {
                    value: "4",
                    img: Item
                }]}/>
            </MainBoard>
            <MainBoard title={"추천 제품"} className={"mt-5 mx-5 bg-white rounded-xl pt-2.5 pb-1.5 pl-1.5"}>
                <MainBoardItemList items={[{value: "1", img: Item}, {value: "2", img: Item}, {value: "3", img: Item}, {
                    value: "4",
                    img: Item
                }]}/>
            </MainBoard>
            <MainBoard className={"mt-5 mx-5 bg-white rounded-xl pt-3 pb-2.5 pl-2.5 pr-2.5"}>
                <BoardList
                    items={[{
                        src: Item,
                        value: "0",
                        alt: "",
                        category: "미팅/모임",
                        title: "오늘 끝나고 모이실분?",
                        name: "aliir1",
                        description: "오늘 을지로 3가 근처에서 일 끝나고 시간되시는 분들 계신가요?"
                    },
                        {
                            src: Item,
                            value: "1",
                            alt: "",
                            category: "잡담",
                            title: "치킨 값이 또 올랐어?",
                            name: "a51541f",
                            description: "황올이 2.3만원 이네 !"
                        },
                        {
                            src: Item,
                            value: "2",
                            alt: "",
                            category: "썸/연애",
                            title: "언제쯤 괜찮아질까요?",
                            name: "iiliil",
                            description: "너무 힘드네요ㅡㅜㅜ"
                        }
                    ]}
                />
            </MainBoard>
        </>
    )
}
