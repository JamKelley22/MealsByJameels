import { ClothingItem } from "../../types";

enum BottomType {
  Sweat = "sweat",
  Dress = "dress",
  Under = "under",
  Sleep = "sleep",
  Workout = "workout",
  Jeans = "jeans",
  Kakis = "kakis",
}

export interface IBottom {
  type: BottomType;
}

export class Bottom extends ClothingItem implements IBottom {
  type: BottomType;

  constructor(data: any) {
    super(data);
    this.type = data.type;
  }
}
