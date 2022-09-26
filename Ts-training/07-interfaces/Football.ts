import { Coach } from "./Coach";

export class Football implements Coach{
    getTraining(): string {
        return "football training";
    }

}