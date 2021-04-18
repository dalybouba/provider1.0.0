import { Contact } from "./contact.model";
import { DaysHours } from "./dayHours.model";
import { Rating } from "./rating.model";

export class Provider {
    public provider_id:string;
    public contacts:[Contact];
    public opening_days_hours:[DaysHours];
    public services:string;
    public is_auto_assignable:boolean;
    public rating:Rating
}