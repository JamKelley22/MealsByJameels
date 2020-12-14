import { ClothingItem } from "../../types";

enum HeadType {
  BaseballHat = "baseball_hat",
  Beanie = "beanie",
  Bandana = "bandana",
  Glasses = "glasses",
}

export interface IHead {
  type: HeadType;
}

export class Head extends ClothingItem implements IHead {
  type: HeadType;

  constructor(data: any) {
    super(data);
    this.type = data.type;
  }
}
