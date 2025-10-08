import { TchatLink, TinspirationLink, Tinternship, TnavigationItem, Tproject, TskillBadgeIcon } from "@/lib/type";

export const navigationItems: TnavigationItem[] = [
    { name: "home", href: "/" },
    { name: "projects", href: "/project" },
    { name: "achievements", href: "/achievement" },
];

export const skillBadgeIcon: TskillBadgeIcon[] = [
    {
        name: "Typescript",
        icon: "simple-icons:typescript",
        link: "https://www.typescriptlang.org"
    },
    {
        name: "Node.js",
        icon: "simple-icons:nodedotjs",
        link: "https://nodejs.org/en"
    },
    {
        name: "Git",
        icon: "simple-icons:git",
        link: "https://git-scm.com/"
    },
    {
        name: "Vite",
        icon: "simple-icons:vite",
        link: "https://vite.dev"
    },
    {
        name: "Three.js",
        icon: "simple-icons:threedotjs",
        link: "https://threejs.org"
    },
    {
        name: "Tailwind CSS",
        icon: "simple-icons:tailwindcss",
        link: "https://tailwindcss.com"
    },
    {
        name: "Notion",
        icon: "simple-icons:notion",
        link: "https://www.notion.com"
    },
    {
        name: "Figma",
        icon: "simple-icons:figma",
        link: "https://www.figma.com"
    },
];

export type TAchievement = {
  title: string;
  issuer: string;
  date: string;
  image: string;
  link?: string;
  technologies?: TskillBadgeIcon[];
};

export const achievements: TAchievement[] = [
  {
    title: "Finalis Fitcom 2.0",
    issuer: "Universitas Dinamika",
    date: "2024",
    image: "/certificates/fitcom.jpg",
    link: "#",
  },
  {
    title: "Peserta Trilogy code SIdinus",
    issuer: "SI - Udinus",
    date: "2025",
    image: "/certificates/SIUdinus.jpg",
    link: "#",
  },
];

export const internships: Tinternship[] = [
    {
        company: "RSUD Simpang Lima Gumul",
        position: "Fullstack Website Developer",
        date: "Jul - Dec 2025",
        technologies: [
            {
                name: "Javascript",
                icon: "simple-icons:javascript"
            },
            {
                name: "React.js",
                icon: "simple-icons:react"
            },
            {
                name: "Three.js",
                icon: "simple-icons:threedotjs"
            },
            {
                name: "Tailwind CSS",
                icon: "simple-icons:tailwindcss"
            },
        ],
        link: "https://www.linkedin.com/company/RSUD-Simpang-Lima-Gumul/",
    },
];

export const projects: Tproject[] = [
    {
        image: "/project/loading.jpeg",
        name: "SimAntrian",
        description: "A Laravel-based integrated hospital queue system. This system supports queues for Registration, Polyclinics, and Pharmacy with separate dashboards, real-time displays, and role-based authentication for secure access.",
        github: "https://github.com/IT-RSUD-SLG/simantrian",
        status: "completed",
        technologies: [
            {
                name: "Javascript",
                icon: "simple-icons:javascript"
            },
            {
                name: "Laravel",
                icon: "simple-icons:laravel"
            },
            {
                name: "Pusher",
                icon: "simple-icons:pusher"
            },
        ],
    },
    {
        image: "/project/kinerjaku.PNG",
        name: "Kinerjaku",
        description: "It is a lite version of the Trello website created to make it easier to monitor employee work in hospitals, with kanban and staff point features, as well as push notification bot telegram for reminders.",
        github: "https://github.com/IT-RSUD-SLG/kinerjaku",
        status: "completed",
        technologies: [
            {
                name: "Javascript",
                icon: "simple-icons:javascript"
            },
            {
                name: "Laravel",
                icon: "simple-icons:laravel"
            },
        ],
    },
    {
        image: "/project/linkTree.PNG",
        name: "Link-Tree clone",
        description: "Just like link tree, but my own clone.",
        view: "https://akyas-bio.vercel.app/",
        github: "https://github.com/AkyasMahira/linkTreeLite",
        status: "completed",
        technologies: [
            {
                name: "Javascript",
                icon: "simple-icons:javascript"
            },
            {
                name: "HTML",
                icon: "simple-icons:html5"
            },
            {
                name: "CSS",
                icon: "simple-icons:css"
            },
        ],
    },
    // {
    //     image: "/project/geoporimg.webp",
    //     name: "Geoportal Laut Berkah",
    //     description: "an interactive 3D-based platform related to the licensing of marine space utilization in central kalimantan province. created during internship activities.",
    //     view: "https://web.geoportal-lautberkah.kalteng.go.id/",
    //     status: "completed",
    //     technologies: [
    //         {
    //             name: "Javascript",
    //             icon: "simple-icons:javascript"
    //         },
    //         {
    //             name: "React.js",
    //             icon: "simple-icons:react"
    //         },
    //         {
    //             name: "Three.js",
    //             icon: "simple-icons:threedotjs"
    //         },
    //         {
    //             name: "Tailwind CSS",
    //             icon: "simple-icons:tailwindcss"
    //         },
    //     ],
    // },
    // {
    //     image: "/project/zectimg.webp",
    //     name: "Zect Portfolio",
    //     description: "a small organization owned by al sakha, colored by the nord theme, and a layout style similar to the nord theme.",
    //     view: "https://zect.vercel.app/",
    //     github: "https://github.com/IRTIDEATH/Zect",
    //     status: "completed",
    //     technologies: [
    //         {
    //             name: "Javascript",
    //             icon: "simple-icons:javascript"
    //         },
    //         {
    //             name: "Next.js",
    //             icon: "simple-icons:nextdotjs"
    //         },
    //         {
    //             name: "Tailwind CSS",
    //             icon: "simple-icons:tailwindcss"
    //         },
    //         {
    //             name: "Shadcn/ui",
    //             icon: "simple-icons:shadcnui"
    //         },
    //     ],
    // },
    // {
    //     image: "/project/hadirinimg.webp",
    //     name: "Hadirin",
    //     description: "simple student attendance app for schools, created at the time of the exam. attendance recorded, learning monitored.",
    //     github: "https://github.com/IRTIDEATH/Absensi-Sederhana",
    //     status: "completed",
    //     technologies: [
    //         {
    //             name: "Typescript",
    //             icon: "simple-icons:typescript"
    //         },
    //         {
    //             name: "Next.js",
    //             icon: "simple-icons:nextdotjs"
    //         },
    //         {
    //             name: "Tanstack Query",
    //             icon: "simple-icons:reactquery"
    //         },
    //         {
    //             name: "Tailwind CSS",
    //             icon: "simple-icons:tailwindcss"
    //         },
    //         {
    //             name: "Shadcn/ui",
    //             icon: "simple-icons:shadcnui"
    //         },
    //         {
    //             name: "PostgreSQL",
    //             icon: "simple-icons:postgresql"
    //         },
    //         {
    //             name: "PrismaORM",
    //             icon: "simple-icons:prisma"
    //         },
    //     ],
    // },
]

export const techcollections: TskillBadgeIcon[] = [
    {
        name: "Typescript",
        icon: "simple-icons:typescript"
    },
    {
        name: "Next.js",
        icon: "simple-icons:nextdotjs"
    },
    {
        name: "Tailwind CSS",
        icon: "simple-icons:tailwindcss"
    },
    {
        name: "Shadcn/ui",
        icon: "simple-icons:shadcnui"
    },
    {
        name: "Laravel",
        icon: "simple-icons:laravel"
    },
    {
        name: "PHP",
        icon: "simple-icons:php"
    },
    {
        name: "React.js",
        icon: "simple-icons:react"
    },
]

export const chatLink: TchatLink[] = [
    {
        label: "Talk with me on Discord",
        icon: "simple-icons:discord",
        href: "https://discord.com/users/zayssme",
        title: "Discord",
    },
    {
        label: "Talk with me on Threads",
        icon: "simple-icons:threads",
        href: "https://www.threads.com/@zayssme",
        title: "Threads",
    },
    {
        label: "Talk with me on Linkedin",
        icon: "ion:social-linkedin",
        href: "https://www.linkedin.com/in/muhammad-akyas-24a228241/",
        title: "Linkedin",
    },
    {
        label: "Talk with me on Email",
        icon: "lucide:mail",
        href: "mailto:akyasmahira.business@gmail.com",
        title: "Email",
    }
]

export const inspirationLink: TinspirationLink[] = [
    {
        label: "Portfolio zect",
        href: "https://zect.vercel.app",
        title: "zect.portfolio",
    }
    // {
    //     label: "Portfolio byanrkh",
    //     href: "https://www.byanrkh.my.id",
    //     title: "byanrkh.my.id",
    // },
    // {
    //     label: "Portfolio edqe",
    //     href: "https://edqe.me",
    //     title: "edqe.me",
    // },
    // {
    //     label: "Zetamin art",
    //     href: "https://www.pixiv.net/en/artworks/112555482",
    //     title: "Zetamin",
    // },
    // {
    //     label: "Growtopia fandom wiki samille's soul",
    //     href: "https://growtopia.fandom.com/wiki/Samille%27s_Soul_Abductor",
    //     title: "Samille's Soul",
    // },
    // {
    //     label: "Zeta my cat kkkk81115",
    //     href: "https://x.com/kkkk8115/status/1891482869987475896?s=19",
    //     title: "@kkkk8115",
    // }
]

export const ongithub: TskillBadgeIcon[] = [
    {
        name: "Git",
        icon: "simple-icons:git"
    },
    {
        name: "Gitlab",
        icon: "simple-icons:gitlab"
    },
    {
        name: "Github Actions",
        icon: "simple-icons:githubactions"
    },
    {
        name: "Markdown",
        icon: "simple-icons:markdown"
    },
]