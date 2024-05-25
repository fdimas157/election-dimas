import CandidateCard from "./components/CandidateCard";
import SideBar from "./components/SideBar";

export default function App() {
  interface Oshi {
    id: number,
    image: string,
    name: string,
    jiko: string
  }

  const sunsekyou: Oshi[] = [
    {
      id: 1,
      image: "/zee.jpg",
      name: "Azizi Shafaa Asadel",
      jiko: "Si gadis tomboy yang semangatnya meletup-letup"
    },
    {
      id: 2,
      image: "/freya.jpg",
      name: "Freyanashifa Jayawardana",
      jiko: "Gadis koleris yang suka berimajinasi, terangi harimu dengan senyum karamelku"
    },
    {
      id: 3,
      image: "/reva.jpg",
      name: "Reva Fidela",
      jiko: "Bagai kucing yang kalem, yang selalu memikat hati"
    },
  ]

  return <div className="flex flex-row">
    <SideBar />
    <div className="flex flex-col bg-red-600 w-4/5 h-screen text-white">
        <div className="p-4 font-bungee text-xl">KANDIDAT</div>
        <div className="w-full bg-white h-screen rounded-ss-3xl p-4 flex flex-row gap-4 justify-center">
          {sunsekyou.map((s) => (
           <CandidateCard key={s.id} candidate={s} />
          ))}
        </div>
    </div>
  </div>
}

