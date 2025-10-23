import { role } from '@/constants/role';
import type { TRole } from './../types/index';
import { adminSidebarItems } from "@/routes/adminSidebarItems";
import { userSidebarItem } from "@/routes/userSidebarItems";


export const getSidebarItems = (userRole:TRole) => {
  if (userRole===role.admin) {
    return [...adminSidebarItems];
  }
  if (userRole===role.superAdmin) {
    return [...adminSidebarItems];
  }
  if (userRole===role.user) {
    return [...userSidebarItem];
  } else {
    return [];
  }
};
