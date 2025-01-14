import { FaAngleRight } from "react-icons/fa";
import PremiumMemberCard from "../../components/reusuable/PremiumMemberCard";
import Filter from "./parts/Filter";
import { useState } from "react";

const users = [
    {
        name: "Sima",
        age: "20",
        occupation: "Teacher",
        img: "https://sadtalkerai.com/wp-content/uploads/2024/04/sadtalker-ai-1.webp",
        id: "3",
        gender: "F",
        division: "Rajhshahi"
    },
    {
        name: "Bristy",
        age: "20",
        occupation: "Student",
        img: "https://sadtalkerai.com/wp-content/uploads/2024/04/sadtalker-ai-1.webp",
        id: "5",
        gender: "F",
        division: "Mymensingh"
    },
    {
        name: "Mina",
        age: "20",
        occupation: "Govt. Job",
        img: "https://sadtalkerai.com/wp-content/uploads/2024/04/sadtalker-ai-1.webp",
        id: "7",
        gender: "F",
        division: "Chattagram"
    },
    {
        name: "Sarmin",
        age: "20",
        occupation: "Student",
        img: "https://sadtalkerai.com/wp-content/uploads/2024/04/sadtalker-ai-1.webp",
        id: "9",
        gender: "F",
        division: "Rangpur"
    },
    {
        name: "Ety",
        age: "20",
        occupation: "Housewife",
        img: "https://sadtalkerai.com/wp-content/uploads/2024/04/sadtalker-ai-1.webp",
        id: "11",
        gender: "F",
        division: "Sylhet"
    },
    {
        name: "Jhuma",
        age: "20",
        occupation: "Engineer",
        img: "https://sadtalkerai.com/wp-content/uploads/2024/04/sadtalker-ai-1.webp",
        id: "14",
        gender: "F",
        division: "Barisal"
    },
    {
        name: "Jhuma",
        age: "20",
        occupation: "Engineer",
        img: "https://sadtalkerai.com/wp-content/uploads/2024/04/sadtalker-ai-1.webp",
        id: "15",
        gender: "F",
        division: "Barisal"
    },
    {
        name: "Jhuma",
        age: "20",
        occupation: "Engineer",
        img: "https://sadtalkerai.com/wp-content/uploads/2024/04/sadtalker-ai-1.webp",
        id: "16",
        gender: "F",
        division: "Barisal"
    },
    {
        name: "Jhuma",
        age: "20",
        occupation: "Engineer",
        img: "https://sadtalkerai.com/wp-content/uploads/2024/04/sadtalker-ai-1.webp",
        id: "17",
        gender: "F",
        division: "Barisal"
    },
    {
        name: "Jhuma",
        age: "20",
        occupation: "Engineer",
        img: "https://sadtalkerai.com/wp-content/uploads/2024/04/sadtalker-ai-1.webp",
        id: "18",
        gender: "F",
        division: "Barisal"
    },
    {
        name: "Jhuma",
        age: "20",
        occupation: "Engineer",
        img: "https://sadtalkerai.com/wp-content/uploads/2024/04/sadtalker-ai-1.webp",
        id: "19",
        gender: "F",
        division: "Barisal"
    },
    {
        name: "Jhuma",
        age: "20",
        occupation: "Engineer",
        img: "https://sadtalkerai.com/wp-content/uploads/2024/04/sadtalker-ai-1.webp",
        id: "20",
        gender: "F",
        division: "Barisal"
    },
    {
        name: "Jhuma",
        age: "20",
        occupation: "Engineer",
        img: "https://sadtalkerai.com/wp-content/uploads/2024/04/sadtalker-ai-1.webp",
        id: "23",
        gender: "F",
        division: "Barisal"
    },
    {
        name: "Jhuma",
        age: "20",
        occupation: "Engineer",
        img: "https://sadtalkerai.com/wp-content/uploads/2024/04/sadtalker-ai-1.webp",
        id: "21",
        gender: "F",
        division: "Barisal"
    },
    {
        name: "Jhuma",
        age: "20",
        occupation: "Engineer",
        img: "https://sadtalkerai.com/wp-content/uploads/2024/04/sadtalker-ai-1.webp",
        id: "22",
        gender: "F",
        division: "Barisal"
    }
]

const Biodatas = () => {
    const [open, setOpen] = useState(false);

    return (<section className="px-2 bg-lite biodatas">
        <div className="max-w-screen-xl mx-auto flex">
            <div className={(open ? 'left-0' : '-left-72') + " fixed top-0 h-screen lg:h-auto z-40 lg:z-0 w-full max-w-72 bg-white border-r border-clear-dark lg:border-none dark:bg-background-dark lg:static transition-all"}>
            <Filter/>
                <button 
                onClick={()=>setOpen(!open)}
                className="absolute top-40 -right-7 rounded-md border border-clear-dark bg-white text-accent py-5 text-3xl z-40 lg:hidden">
                    <FaAngleRight />
                </button>
            </div>

            <div className="max-w-sm mx-auto sm:max-w-full grow grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 text-center gap-3 p-3">
{users.map(user=>(<PremiumMemberCard key={user.id} isLessSpace={true} member={user}/>))}
            </div>
        </div>
    </section>);
};

export default Biodatas;