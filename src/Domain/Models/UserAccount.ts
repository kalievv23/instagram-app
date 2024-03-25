import type { SummaryOfAccount } from "../Responses/SummaryOfAccount";
import type { Content } from "./Content";

export interface UserAccount {
  id: string;
  fullName: string;
  userName: string;
  profileImageUrl?: string;
  summaryOfAccount: SummaryOfAccount;
  contents?: Content[];
}
