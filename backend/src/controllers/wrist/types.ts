import { ClothingItem } from "../../types";

enum WristType {
  Watch = "watch",
  Braclet = "braclet",
}

export interface IWrist {
  type: WristType;
}

export class Wrist extends ClothingItem implements IWrist {
  type: WristType;

  constructor(data: any) {
    super(data);
    this.type = data.type;
  }
}
