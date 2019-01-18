import { Image } from "./Image";

export class Product{
    public prod_name:String;
    public prod_desc:String;
    public prod_code:String;
    public prod_stock:Number;
    public prod_brand:String;
    public prod_price:Number;
    public prod_discount:Number;
    public prod_status:String;
    public image_list:Array<Image>;
    
}