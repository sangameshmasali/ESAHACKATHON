import { Menu } from "./menu.model";
import { BaseResponse } from "./base-response.model";
export class LoginResponse extends BaseResponse {
    userDetail : UserData;
}


export class UserData{
    id : boolean;
    firstName : string;
    lastName : string;
    username : string;
    token : string;
    role : string;
    menuPermissions : Menu [];
    tokenGenerationUTCTime : Date;
    expirsInMilisecond : number;
}