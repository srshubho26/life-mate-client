import Title from "../../../components/reusuable/Title";
import PremiumMemberCard from "../../../components/reusuable/PremiumMemberCard";

const users = [
    {
        name: "Sima",
        age: "20",
        occupation: "Student",
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
        division: "Rajhshahi"
    },
    {
        name: "Mina",
        age: "20",
        occupation: "Student",
        img: "https://sadtalkerai.com/wp-content/uploads/2024/04/sadtalker-ai-1.webp",
        id: "7",
        gender: "F",
        division: "Rajhshahi"
    },
    {
        name: "Sarmin",
        age: "20",
        occupation: "Student",
        img: "https://sadtalkerai.com/wp-content/uploads/2024/04/sadtalker-ai-1.webp",
        id: "9",
        gender: "F",
        division: "Rajhshahi"
    },
    {
        name: "Ety",
        age: "20",
        occupation: "Student",
        img: "https://sadtalkerai.com/wp-content/uploads/2024/04/sadtalker-ai-1.webp",
        id: "11",
        gender: "F",
        division: "Rajhshahi"
    },
    {
        name: "Jhuma",
        age: "20",
        occupation: "Student",
        img: "https://sadtalkerai.com/wp-content/uploads/2024/04/sadtalker-ai-1.webp",
        id: "14",
        gender: "F",
        division: "Rajhshahi"
    }
]

const PremiumMembers = () => {
    return (<section className="px-2 py-20 bg-lite">
        <div className="max-w-screen-xl mx-auto">
            <Title title="Our Premium Members" />


            <div className="max-w-60 mx-auto sm:max-w-full grid sm:grid-cols-3 mt-10 gap-4 text-center lg:text-left">
                {users.map(member => (<PremiumMemberCard key={member.id} member={member} />))}

            </div>
        </div>
    </section>);
};

export default PremiumMembers;