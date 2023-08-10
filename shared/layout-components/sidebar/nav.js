import PersonIcon from '@mui/icons-material/Person';
import GroupIcon from '@mui/icons-material/Group';
import EventIcon from '@mui/icons-material/Event';
import HomeIcon from '@mui/icons-material/Home';

export const MENUITEMS = [
    {
      menutitle: "Main",
      Items: [
        {
          title: "Dashboard",
          path: `/dashboard`,
          icon: (
            <HomeIcon className='pe-2' />
          ),
          type: "link",
          selected:false,
          active:false,
          title: "Dashboard",
        },
        {
          title: "Empleados",
          path: `/empleados`,
          icon: (
            <GroupIcon className='pe-2' />
          ),
          type: "link",
          selected:false,
          active:false,
          title: "Empleados",
        },
        {
          title: "Calendario",
          path: "/calendario",
          icon: (
            <EventIcon className='pe-2' />
          ),
          
          type: "link",
          selected:false,
          active:false,
          title: "Calendario",
        },
        {
          title: "Usuarios",
          path: `/usuarios`,
          icon: (
            <PersonIcon className='pe-2' />
          ),
          type: "link",
          selected:false,
          active:false,
          title: "Usuarios",
        },
      ],
    },
    // {
    //   menutitle: "COMPONENTS",
    //   Items: [
    //     {
    //       path: `/components/widgets`,
    //       icon: (
    //         <svg
    //           xmlns="http://www.w3.org/2000/svg"
    //           className="side-menu__icon"
    //           width="24"
    //           height="24"
    //           viewBox="0 0 24 24"
    //         >
    //           <path d="M10 3H4a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1zM9 9H5V5h4v4zm11 4h-6a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-6a1 1 0 0 0-1-1zm-1 6h-4v-4h4v4zM17 3c-2.206 0-4 1.794-4 4s1.794 4 4 4 4-1.794 4-4-1.794-4-4-4zm0 6c-1.103 0-2-.897-2-2s.897-2 2-2 2 .897 2 2-.897 2-2 2zM7 13c-2.206 0-4 1.794-4 4s1.794 4 4 4 4-1.794 4-4-1.794-4-4-4zm0 6c-1.103 0-2-.897-2-2s.897-2 2-2 2 .897 2 2-.897 2-2 2z" />
    //         </svg>
    //       ),
    //       type: "link",
    //       selected:false,
    //       active:false,
    //       title: "Widgets",
    //     },
      
    //   ],
    // },
  ];
  