export interface IContract {
  id: string;
  customerName: string;
  projectId: string;
  address: string;
  rooms: {
    id: number;
    name: string;
  }[];
  updated_timestmp: number;
  totalProject: number;
  projectState: 'In progress' | 'Done' | 'Cancelled' | 'Negotiation';
}
