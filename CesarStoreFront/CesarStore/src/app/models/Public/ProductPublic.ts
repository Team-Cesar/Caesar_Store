import { ImageProductPublic } from "./ImageProductPublic";

export class ProductPublic{
    pro_id: number;
    pro_nam: string;
    pro_des: string;
    pro_pri: number;
    pro_sto: number;
    pro_sta: string;
    pro_bra: string;
    pro_cat: string;
    image_list: ImageProductPublic[];
}