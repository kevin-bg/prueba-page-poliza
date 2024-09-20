import { useState } from "react"


export const Menu = () => {
    const [openMenu, setOpenMenu] = useState(false)

    const handleClick = () => setOpenMenu(!openMenu)

    return (
        <>
            <header className="bg-[#160f41]">
                <div className="py-6 px-8 flex justify-between items-center">
                    <h2 className="text-2xl text-white font-bold">Bank</h2>
                    <button onClick={handleClick} className="md:hidden">
                        <MenuIcon />
                    </button>
                </div>
            </header>
        </>
    )
}

export const MenuIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-menu-2">
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M4 6l16 0" />
        <path d="M4 12l16 0" />
        <path d="M4 18l16 0" />
    </svg>
)
