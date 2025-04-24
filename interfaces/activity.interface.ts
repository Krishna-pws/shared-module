export interface Activity {
  id: string;
  title: string;
  description: string;
  type: "login" | "logout" | "create" | "update" | "delete" | string;
  details: Record<string, string>;
  isRead: boolean;
  createdAt: string;
  userId?: string;
}

export interface ActivityFilters {
  type?: string;
}

export interface ActivityState {
  activities: Activity[];
  loading: boolean;
  error: string | null;
  unreadCount: number;
}
