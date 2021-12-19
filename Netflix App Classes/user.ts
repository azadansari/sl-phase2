import { BaseModel } from "./basemodel";
import { UserPackage } from "./package";
import { UserProfile } from "./profile";
import { CurrentStatus } from "./userstatus";

export class User extends BaseModel{
    name: string;
    profile: UserProfile;
    package: UserPackage;
    userstatus: CurrentStatus;
}