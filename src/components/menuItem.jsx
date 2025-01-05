import Link from "next/link";

export default function MenuItem({ name, address, Icon }) {
    return (
        <Link href={address} className="hover:text-amber-500">
            <Icon className='sm:hidden text-2xl' />
            <span className="sm:inline hidden uppercase text-sm" >{name}</span>
        </Link>
    )
}