import { Purchase } from "./Purchase";

export class User {
    user_name: string;
    user_email: string;
    user_salt: string;
    user_hash: string;
    user_role: number;
    purchases_list:Array<Purchase>;
}