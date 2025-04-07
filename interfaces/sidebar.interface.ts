import { LucideIcon } from "lucide-react";
import { SidebarAction } from '../constants/sidebarActions'
export interface SidebarMenuItemInterface {
  title: string;
  url: string;
  icon: LucideIcon;
  action?: SidebarAction; 
}
