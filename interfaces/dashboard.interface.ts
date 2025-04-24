export interface Stat {
    id: string;
    title: string;
    value: number;
    change: number;
    trend: 'up' | 'down';
    icon: string;
  }
  
  export interface ChartItem {
    id: string;
    date: string;
    value: number;
    category: string;
  }
  
  export interface ChartCardProps {
    title: string;
    data: ChartItem[];
  }
  
  export interface StatCardProps {
    title: string;
    value: number;
  }
  
  