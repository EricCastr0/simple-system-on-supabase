import React from 'react'
import { AiOutlineHome, AiOutlineInbox, AiOutlineUser } from "react-icons/ai"

export const  SidebarData = [
    {
        title:"Inicio",
        icon: <AiOutlineHome/>,
        link: "/"
    },
    {
        title:"Produtos",
        icon: <AiOutlineInbox/>,
        link: "/produtos"
    },
    {
        title:"Usuários",
        icon: <AiOutlineUser/>,
        link: "/usuarios"
    }
]