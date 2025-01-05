import Link from "next/link";
import MenuItem from "./menuItem";
import { AiFillHome } from 'react-icons/ai'
import { BsFillInfoCircleFill } from 'react-icons/bs'
import DarkModeSwitch from "./darkModeSwitch";

export default function Header() {
    return (
        <div className="flex justify-between item-center p-3 max-w-6xl mx-auto">
            <div className="flex gap-4">
                <MenuItem name='Home' address='/' Icon={AiFillHome} />
                <MenuItem name='About' address='/about' Icon={BsFillInfoCircleFill} />
            </div>
            <div className="flex items-center gap-4">
                <DarkModeSwitch />
                <Link href={'/'} className="flex items-center gap-1">
                    <span className="text-2xl font-bold bg-amber-500 px-2 py-1 rounded-lg">IMDb</span>
                    <span className="text-xl hidden sm:inline">clone</span>
                </Link>
            </div>
        </div>
    )
}