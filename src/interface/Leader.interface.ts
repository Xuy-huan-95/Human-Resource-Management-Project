export interface ILeader {
  id: number;
  leaderName: string;
  leaderPosition: number;
  activeStatus: number;
  userId: number;
}
export interface ILeaderRes {
  code: number;
  message: string;
  data: ILeader[];
}
