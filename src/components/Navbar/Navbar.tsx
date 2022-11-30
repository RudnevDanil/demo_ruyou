import {Outlet} from "react-router-dom"
import {NavItem, TNavItem} from "./NavItem/NavItem";

const navConfig: TNavItem[] = [
    {label: "Форма", src: "form"},
    {label: "Палитра", src: "palette"},
]

export const Navbar = () => {
    return (
        <>
            <div className="pb-2 d-flex">
                {navConfig.map(el => <NavItem {...el} key={el.src}/>)}
            </div>
            <Outlet/>
        </>
    )
}