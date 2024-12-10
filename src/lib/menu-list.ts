import {
  Tag,
  Users,
  Settings,
  Bookmark,
  SquarePen,
  LayoutGrid,
  LucideIcon
} from "lucide-react";

type Submenu = {
  href: string;
  label: string;
  active?: boolean;
};

type Menu = {
  href: string;
  label: string;
  active?: boolean;
  icon: LucideIcon;
  submenus?: Submenu[];
};

type Group = {
  groupLabel: string;
  menus: Menu[];
};

export function getMenuList(pathname: string): Group[] {
  return [
    {
      groupLabel: "",
      menus: [
        {
          href: "/dashboard",
          label: "Dashboard",
          icon: LayoutGrid,
          submenus: []
        }
      ]
    },
    {
      groupLabel: "Contents",
      menus: [
        {
          href: "",
          label: "About CSE",
          icon: SquarePen,
          submenus: [
            {
              href: "/courses",
              label: "Courses"
            },
            {
              href: "/faculty",
              label: "Faculty"
            }
          ]
        },
        {
          href: "/categories",
          label: "Capstone Project Offered Intakes",
          icon: Bookmark
        },
        {
          href: "/tags",
          label: "About CSE",
          icon: Tag
        },
        {
          href: "/tags",
          label: "Academic calenders",
          icon: Tag
        },
        {
          href: "/tags",
          label: "Achivement Publications",
          icon: Tag
        },
        {
          href: "/tags",
          label: "Add Gallary Content",
          icon: Tag
        },
        {
          href: "/tags",
          label: "Admin staffs",
          icon: Tag
        },
        {
          href: "/tags",
          label: "Admission informations",
          icon: Tag
        },
        {
          href: "/tags",
          label: "Admission requirments",
          icon: Tag
        },
        {
          href: "/tags",
          label: "Alumni About",
          icon: Tag
        },
        {
          href: "/tags",
          label: "Alumni Activities",
          icon: Tag
        },
        {
          href: "/tags",
          label: "Alumni commitees",
          icon: Tag
        },
        {
          href: "/tags",
          label: "Alumni designations",
          icon: Tag
        },
        {
          href: "/tags",
          label: "CSE Communication Categories",
          icon: Tag
        },
        {
          href: "/tags",
          label: "CSE Office of Communications News",
          icon: Tag
        },
        {
          href: "/tags",
          label: "Cafaterias",
          icon: Tag
        },
        {
          href: "/tags",
          label: "Capstone Projects",
          icon: Tag
        },
        {
          href: "/tags",
          label: "Capstone Projects Students Info",
          icon: Tag
        },
        {
          href: "/tags",
          label: "Chairman Message",
          icon: Tag
        },
        {
          href: "/tags",
          label: "Class routines",
          icon: Tag
        },
        {
          href: "/tags",
          label: "Counsilings",
          icon: Tag
        },
        {
          href: "/tags",
          label: "Course outlines",
          icon: Tag
        },
        {
          href: "/tags",
          label: "Courses",
          icon: Tag
        },
        {
          href: "/tags",
          label: "Chairman Message",
          icon: Tag
        },
        {
          href: "/tags",
          label: "Class routines",
          icon: Tag
        },
        {
          href: "/tags",
          label: "Counsilings",
          icon: Tag
        },
        {
          href: "/tags",
          label: "Cultural clubs",
          icon: Tag
        },
        {
          href: "/tags",
          label: "Debating clubs",
          icon: Tag
        },
        {
          href: "/tags",
          label: "Exam routines",
          icon: Tag
        },
        {
          href: "/tags",
          label: "Faculty Members",
          icon: Tag
        },
        {
          href: "/tags",
          label: "Faculty designations",
          icon: Tag
        },
        {
          href: "/tags",
          label: "Goals and Objectives",
          icon: Tag
        },
        {
          href: "/tags",
          label: "Home page Our Achivement",
          icon: Tag
        },
        {
          href: "/tags",
          label: "Home sliders",
          icon: Tag
        },
        {
          href: "/tags",
          label: "IEEECS Committee designations",
          icon: Tag
        },
        {
          href: "/tags",
          label: "Ieeecs abouts",
          icon: Tag
        },
        {
          href: "/tags",
          label: "Ieeecs committees",
          icon: Tag
        },
        {
          href: "/tags",
          label: "Ieeecs newss",
          icon: Tag
        },
        {
          href: "/tags",
          label: "Industry visits",
          icon: Tag
        },
        {
          href: "/tags",
          label: "Intakes",
          icon: Tag
        },
        {
          href: "/tags",
          label: "It clubs",
          icon: Tag
        },
        {
          href: "/tags",
          label: "It officers",
          icon: Tag
        },
        {
          href: "/tags",
          label: "It services",
          icon: Tag
        },
        {
          href: "/tags",
          label: "Lab Categories",
          icon: Tag
        },
        {
          href: "/tags",
          label: "Lab Details",
          icon: Tag
        },
        {
          href: "/tags",
          label: "Lab assistants",
          icon: Tag
        },
        {
          href: "/tags",
          label: "Librarys",
          icon: Tag
        },
        {
          href: "/tags",
          label: "Mapping PEOs",
          icon: Tag
        },
        {
          href: "/tags",
          label: "Medical facilities",
          icon: Tag
        },
        {
          href: "/tags",
          label: "Mission of Department",
          icon: Tag
        },
        {
          href: "/tags",
          label: "New Semester Start Date",
          icon: Tag
        },
        {
          href: "/tags",
          label: "OBE Categories",
          icon: Tag
        },
        {
          href: "/tags",
          label: "Object Based Educations",
          icon: Tag
        },
        {
          href: "/tags",
          label: "Program Educational Objectives",
          icon: Tag
        },
        {
          href: "/tags",
          label: "Program Outcome",
          icon: Tag
        },
        {
          href: "/tags",
          label: "Project Status",
          icon: Tag
        },
        {
          href: "/tags",
          label: "Published Articles",
          icon: Tag
        },
        {
          href: "/tags",
          label: "Research Topics",
          icon: Tag
        },
        {
          href: "/tags",
          label: "Resultss",
          icon: Tag
        },
        {
          href: "/tags",
          label: "Rover clubs",
          icon: Tag
        },
        {
          href: "/tags",
          label: "Section",
          icon: Tag
        },
        {
          href: "/tags",
          label: "Semester",
          icon: Tag
        },
        {
          href: "/tags",
          label: "Social welfare clubs",
          icon: Tag
        },
        {
          href: "/tags",
          label: "Sports clubs",
          icon: Tag
        },
        {
          href: "/tags",
          label: "Study tours",
          icon: Tag
        },
        {
          href: "/tags",
          label: "Undergraduate Categories",
          icon: Tag
        },
        {
          href: "/tags",
          label: "Undergraduate Programs",
          icon: Tag
        },
        {
          href: "/tags",
          label: "Vision of Department",
          icon: Tag
        },
        {
          href: "/tags",
          label: "Why CSE at BUBT",
          icon: Tag
        },
        {
          href: "/tags",
          label: "Workshops",
          icon: Tag
        },
        {
          href: "/tags",
          label: "Authentication and Authorization",
          icon: Tag
        },
        {
          href: "/tags",
          label: "Groups",
          icon: Tag
        },
        {
          href: "/tags",
          label: "Users",
          icon: Tag
        },
        {
          href: "/tags",
          label: "User visit log",
          icon: Tag
        },
        {
          href: "/tags",
          label: "User visits",
          icon: Tag
        }
      ]
    },
    {
      groupLabel: "Settings",
      menus: [
        {
          href: "/users",
          label: "Users",
          icon: Users
        },
        {
          href: "/account",
          label: "Account",
          icon: Settings
        }
      ]
    }
  ];
}
