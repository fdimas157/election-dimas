import { MdHowToVote, MdHome, MdPoll } from "react-icons/md";
import { FaUserTie } from "react-icons/fa";

export default function SideBar(){
    return <div className="flex flex-col gap-4 p-4 pt-8 w-1/5 bg-red-600 text-white">
        <div className="flex flex-row items-center gap-4">
            <MdHowToVote size={48}/>
            <div className="font-bungee text-xl">Pilih OSHI</div>
        </div>
        <div className="flex flex-col gap-2">
            <div className="w-full flex flex-row items-center gap-4 p-4 rounded-xl hover:bg-[#f5eff3] hover:text-red-600 cursor-pointer">
                <MdHome size={28}/>
                <div className="font-bungee text-xs">Beranda</div>
            </div>
            <div className="w-full flex flex-row items-center gap-4 p-4 rounded-xl hover:bg-[#f5eff3] hover:text-red-600 cursor-pointer">
                <FaUserTie size={28}/>
                <div className="font-bungee text-xs">Kandidat</div>
            </div>
            <div className="w-full flex flex-row items-center gap-4 p-4 rounded-xl hover:bg-[#f5eff3] hover:text-red-600 cursor-pointer">
                <MdPoll size={28}/>
                <div className="font-bungee text-xs">Pemilih</div>
            </div>
        </div>
    </div>
}