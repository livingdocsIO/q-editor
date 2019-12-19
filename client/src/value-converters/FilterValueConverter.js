import { valueConverter } from "aurelia-framework";

@valueConverter("filter")
export class FilterValueConverter {
  toView(arr, config) {
    const stringsToRemove = config.remove.trim().split(',');
    return arr.filter(str => !stringsToRemove.includes(str));
  }
}
