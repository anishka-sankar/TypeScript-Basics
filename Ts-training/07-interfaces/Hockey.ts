import { Coach } from "./Coach";

export class Hockey implements Coach{
    getTraining(): string {
        return "hockey training";
    }

}