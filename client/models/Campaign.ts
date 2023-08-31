export interface Campaign {
  address: string;
  minimumContribution: number | bigint;
  balance: number | bigint;
  requestsCount: number | bigint;
  approversCount: number | bigint;
  manager: string;
}
