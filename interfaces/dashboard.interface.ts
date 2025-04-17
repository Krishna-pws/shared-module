export interface Stat {
    title: string;
    value: number;
  }
  
  export interface ChartItem {
    name: string;
    value: number;
  }
  
  export interface ChartCardProps {
    title: string;
    data: ChartItem[];
  }
  
  export interface StatCardProps {
    title: string;
    value: number;
  }
  
  