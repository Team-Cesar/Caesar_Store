import { Purchase } from "./Purchase";
export class User {
    user_id?:string;
    user_username:string;
    user_name: string;
    user_lastname: string;
    user_email: string;
    user_salt: string;
    user_hash: string;
    user_role: number;
    purchase:Purchase;
}