import get from "get-value";
import set from "set-value";
import jsonPointer from 'jsonpointer';

export default class CurrentItemProvider {
  setCurrentItem(item) {
    this.item = item;
  }

  getCurrentItem() {
    return this.item;
  }

  unsetCurrentItem() {
    this.item = undefined;
  }

  getCurrentItemByFields(fields) {
    const item = {};
    for (let field of fields) {
      set(item, field, get(this.item.conf, field));
    }
    return item;
  }

  getDataByPointer(pointer) {
    const ptr = jsonPointer.compile(pointer);
    return ptr.get(this.item.conf);
  }
}
