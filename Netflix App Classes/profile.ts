import { BaseModel } from "./basemodel";


export class UserProfile extends BaseModel{
    userID: number;
    phone: string;
    email: string;
    address: string;
}