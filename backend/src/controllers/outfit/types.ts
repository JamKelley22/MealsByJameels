import { Entity } from "../../types";

enum OutfitOccasion {
  Formal = "formal",
  Casual = "casual",
  Buisness = "buisness",
  BuisnessCasual = "buisness-casual",
  Sport = "sport",
  Sleep = "sleep",
}

export interface IOutfit {
  occasion: OutfitOccasion;
  top_id: number;
  bottom_id: number;
  head_id: number;
  feet_id: number;
  wrist_id: number;
  rating: number;
}

export class Outfit extends Entity implements IOutfit {
  occasion: OutfitOccasion;
  top_id: number;
  bottom_id: number;
  head_id: number;
  feet_id: number;
  wrist_id: number;
  rating: number;

  constructor(data: any) {
    super(data);
    this.occasion = data.occasion;
    this.top_id = data.top_id;
    this.bottom_id = data.bottom_id;
    this.head_id = data.head_id;
    this.feet_id = data.feet_id;
    this.wrist_id = data.wrist_id;
    this.rating = data.rating;
  }
}
