import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as IoIcons from "react-icons/io";
import * as MdIcons from "react-icons/md";
import * as RiIcons from "react-icons/ri";
//import * as FiIcons from "react-icons/fi";

export const asideMenu = [
    {
        title: "Dashboard",
        path: "/dashboard",
        icon: <RiIcons.RiHome2Line />,
        active: false,
    },
    {
        title: "Registar Single",
        path: "/addsingle",
        icon: <RiIcons.RiHome2Line />,
        active: false,
    },
    {
        title: "Registar Albums",
        path: "/add-albums",
        icon: <RiIcons.RiHome2Line />,
        active: false,
    },
    {
        title: "Registrar compilações",
        path: "/add-compilation",
        icon: <RiIcons.RiHome2Line />,
        active: false,
    },
    {
        title: "Perfil de Artista",
        path: "/profile",
        icon: <RiIcons.RiHome2Line />,
        active: false,
    },
    {
        title: "Gerir",
        path: "/manage",
        icon: <RiIcons.RiHome2Line />,
        active: false,
    },
    {
        title: "Sair",
        path: "/out",
        icon: <RiIcons.RiHome2Line />,
        active: false,
    },
    
    {
        title: 'usuários',
        path: '/usuarios',
        icon: <RiIcons.RiHome2Line />,
        icon_closed: <RiIcons.RiArrowDownSFill />,
        icon_opend: <RiIcons.RiArrowDropUpFill />,
        sub_nav: [{
            title: 'cadastrar',
            path: '/cadastro_user',
            icon: <IoIcons.IoIosPersonAdd />,
        },
        {
            title: 'visualizar',
            path: '/cadastro_user',
            icon: <IoIcons.IoIosPersonAdd />,
        },
        {
            title: 'Actuazalizar/deletar',
            path: '/cadastro_user',
            icon: <IoIcons.IoIosPersonAdd />,
        }]
    },

]


