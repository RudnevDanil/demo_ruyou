import {NavLink} from "react-router-dom";

export type TNavItem = {
    label: string,
    src: string,
}

export const NavItem = ({label, src}: TNavItem) => {
    return (
        <NavLink className="text-decoration-none px-2 text-white" to={src}>
            {label}
        </NavLink>
    )
}