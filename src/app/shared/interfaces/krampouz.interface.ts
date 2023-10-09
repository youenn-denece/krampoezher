import { Ingredient } from "./ingredient.interface";

export interface Krampouz {
    name: string;
    img: string;
    description: string;
    ingredients?: Ingredient[];
}
