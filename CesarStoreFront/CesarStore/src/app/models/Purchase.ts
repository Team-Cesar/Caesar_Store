import { Send } from "./Send";
import { Product } from "./Product";

export class Purchase {
    purchase_date: Date;
    send_details?:Send;
    prod_details:Array<Product>;
}   