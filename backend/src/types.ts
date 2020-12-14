import { ErrorCode } from "./constants";
import { MysqlError } from "mysql";
import moment from "moment";

export class Error {
  error: boolean;
  mySQLError: MysqlError | undefined;
  code: ErrorCode | undefined;
  message: string | undefined;

  constructor(data: any) {
    this.error = data.error;
    this.mySQLError = data.mySQLError;
    this.code = data.code;
    this.message = data.message;
  }
}

export interface IConvertMoment {
  getObjectWithTransformedMoments: (
    momentKeys: string[]
  ) => Record<string, unknown>;
}

export class Entity implements IConvertMoment {
  id: number;
  uri_image: string;
  name: string;
  description: string;
  datetime_added: moment.Moment | undefined;
  datetime_last_modified: moment.Moment | undefined;
  rating: number;

  constructor(data: any) {
    this.id = data.id;
    this.uri_image = data.uri_image;
    this.name = data.name;
    this.description = data.description;
    this.datetime_added = data.datetime_added
      ? moment(data.datetime_added)
      : undefined;
    this.datetime_last_modified = data.datetime_last_modified
      ? moment(data.datetime_last_modified)
      : undefined;
    this.rating = data.rating;
  }

  getObjectWithTransformedMoments(momentKeys?: string[]): Record<string, any> {
    // eslint-disable-next-line @typescript-eslint/no-this-alias
    const _this: any = this;

    const entityMomentKeys = ["datetime_added", "datetime_last_modified"];
    const allMomentKeys = [...entityMomentKeys, ...(momentKeys || [])];

    return Object.keys(this).reduce((obj, key) => {
      return {
        ...obj,
        [key]:
          allMomentKeys.includes(key) && _this[key]
            ? moment(_this[key]).format()
            : _this[key],
      };
    }, {});
  }
}

export class ClothingItem extends Entity {
  code: string;
  size: string;
  brand: string;
  datetime_purchased: moment.Moment | undefined;
  item_condition: number;
  status: Status;
  number_of_wears: number;
  wears_before_dirty: number;
  wears_left_before_dirty: number;
  primary_color: string;
  secondary_color: string;
  accent_color: string;
  pattern: string;

  constructor(data: any) {
    super(data);
    this.code = data.code;
    this.size = data.size;
    this.brand = data.brand;

    this.datetime_purchased = data.datetime_purchased
      ? moment(data.datetime_purchased)
      : undefined;

    this.item_condition = data.item_condition;
    this.status = data.status;
    this.number_of_wears = data.number_of_wears;
    this.wears_before_dirty = data.wears_before_dirty;
    this.wears_left_before_dirty = data.wears_left_before_dirty;
    this.primary_color = data.primary_color;
    this.secondary_color = data.secondary_color;
    this.accent_color = data.accent_color;
    this.pattern = data.patten;
  }

  getObjectWithTransformedMoments(momentKeys?: string[]): Record<string, any> {
    const clothingItemMomentKeys = ["datetime_purchased"];
    return super.getObjectWithTransformedMoments(clothingItemMomentKeys);
  }
}

export enum Status {
  Clean = "clean",
  Dirty = "dirty",
  Worn = "worn",
  Ok = "ok",
}
