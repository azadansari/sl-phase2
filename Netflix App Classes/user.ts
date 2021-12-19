import { UserPackage } from "./package";
import { UserProfile } from "./profile";
import { CurrentStatus } from "./userstatus";

export class User{
    id: number;
    name: string;
    profile: UserProfile;
    package: UserPackage;
    userstatus: CurrentStatus;
}