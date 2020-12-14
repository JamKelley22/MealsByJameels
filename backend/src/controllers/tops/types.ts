import { ClothingItem } from "../../types";

enum TopType {
  Tee = "tee",
  Sweat = "sweat",
  Dress = "dress",
  Flannel = "flannel",
  Under = "under",
  Sleep = "sleep",
  Casual = "casual",
  Workout = "workout",
}

export interface ITop {
  type: TopType;
}

export class Top extends ClothingItem implements ITop {
  type: TopType;

  constructor(data: any) {
    super(data);
    this.type = data.type;
  }
}
