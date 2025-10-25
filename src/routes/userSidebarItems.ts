import AddTour from "@/pages/Admin/AddTour";
import Analytics from "@/pages/Admin/Analytics";
import Bookings from "@/pages/User/Bookings";
import type { ISidebarItems } from "@/types";

export const userSidebarItem: ISidebarItems[] = [
  {
    title: "History",
    items: [
      {
        title: "Bookings",
        url: "/user/bookings",
        component: Bookings,
      },
    ],
  },
];
