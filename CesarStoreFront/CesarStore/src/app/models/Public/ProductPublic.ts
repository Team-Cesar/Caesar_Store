import { ImageProductPublic } from "./ImageProductPublic";

export class ProductPublic{
    prod_id: number;
    prod_nam: string;
    prod_des: string;
    prod_pri: number;
    prod_sto: number;
    prod_sta: string;
    prod_bra: string;
    prod_cat: string;
    image_list: ImageProductPublic[];
}