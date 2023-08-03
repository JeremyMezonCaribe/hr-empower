export const MENUITEMS = [
    {
      menutitle: "Main",
      Items: [
        {
          title: "Dashboards",
          icon: (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="side-menu__icon"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path d="M3 13h1v7c0 1.103.897 2 2 2h12c1.103 0 2-.897 2-2v-7h1a1 1 0 0 0 .707-1.707l-9-9a.999.999 0 0 0-1.414 0l-9 9A1 1 0 0 0 3 13zm7 7v-5h4v5h-4zm2-15.586 6 6V15l.001 5H16v-5c0-1.103-.897-2-2-2h-4c-1.103 0-2 .897-2 2v5H6v-9.586l6-6z" />
            </svg>
          ),
          type: "sub",
          selected:false,
          active:false,
          children: [
            {
              path: `/components/dashboards/dashboard1`,
              type: "link",
              active:false,
              selected:false,
              title: "Dashboard-1",
            },
          ],
        },
      ],
    },
    {
      menutitle: "COMPONENTS",
      Items: [
        {
          path: `/components/widgets`,
          icon: (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="side-menu__icon"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path d="M10 3H4a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1zM9 9H5V5h4v4zm11 4h-6a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-6a1 1 0 0 0-1-1zm-1 6h-4v-4h4v4zM17 3c-2.206 0-4 1.794-4 4s1.794 4 4 4 4-1.794 4-4-1.794-4-4-4zm0 6c-1.103 0-2-.897-2-2s.897-2 2-2 2 .897 2 2-.897 2-2 2zM7 13c-2.206 0-4 1.794-4 4s1.794 4 4 4 4-1.794 4-4-1.794-4-4-4zm0 6c-1.103 0-2-.897-2-2s.897-2 2-2 2 .897 2 2-.897 2-2 2z" />
            </svg>
          ),
          type: "link",
          selected:false,
          active:false,
          title: "Widgets",
        },
      
      ],
    },
  ];
  