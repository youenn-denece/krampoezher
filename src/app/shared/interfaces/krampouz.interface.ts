import { Ingredient } from "./ingredient.interface";

export interface Krampouz {
    _id?: string;
    name: string;
    img: string;
    description: string;
    ingredients: Ingredient[];
}
