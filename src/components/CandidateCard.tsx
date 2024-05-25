export default function CandidateCard(props: {
    id: number,
    image: string,
    name: string,
    jiko: string
}){
    return <div className="flex flex-col items-center justify-center w-80 bg-[#f5eff3] p-4 rounded-3xl gap-4">
        <div className="bg-red-600 w-12 h-12 font-poppins rounded-full flex justify-center items-center text-xl cursor-pointer">{props.candidate.id}</div>
        <img src={props.candidate.image} className="w-56 rounded-xl" />
        <div className="font-lilita text-xl text-black">{props.candidate.name}</div>
        <button className="bg-red-600 w-48 h-8 rounded-lg font-poppins text-sm">Lihat Selengkapnya</button>
    </div>
}