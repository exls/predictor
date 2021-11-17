import { values, has } from "lodash";
import { IPredictions } from "./contracts/IPredictions";
import { IPrediction } from "./contracts/IPrediction";

export default class implements IPrediction {
  constructor(public readonly sources: string[]) {}

  get path(): string {
    return "";
  }

  get depends(): IPredictions {
    return {};
  }

  isComputable(inputs: any): boolean {
    return values(this.depends).every(
      ({ prediction }) =>
        has(inputs, prediction.path) && prediction.isComputable(inputs)
    );
  }
}
