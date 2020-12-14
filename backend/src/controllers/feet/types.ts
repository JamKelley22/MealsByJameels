import { ClothingItem } from "../../types";

enum FeetType {
  DressShoe = "dress_shoe",
  TennisShoe = "tennis_shoe",
  CasualShoe = "casual_shoe",
  HeelShoe = "heel_shoe",
  FlipFlopShoe = "flip_flop_shoe",
  SandelShoe = "sandel_shoe",
  DressSock = "dress_sock",
  CasualSock = "casual_sock",
}

export interface IFeet {
  type: FeetType;
}

export class Feet extends ClothingItem implements IFeet {
  type: FeetType;

  constructor(data: any) {
    super(data);
    this.type = data.type;
  }
}
