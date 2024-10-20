import { Address } from "./address";

export interface Person{
    id: string;
    firstName: string;
    lastName: string;
    phoneNumber: string;
    address: Address;
}