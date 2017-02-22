import { bindable, useShadowDOM } from 'aurelia-framework'

export class ConfirmButton {

  @bindable icon;
  @bindable iconSvg;
  @bindable action;
  @bindable state = 'init';
  @bindable size;

  toggle(event) {
    event.stopPropagation();
    if (this.state === 'question') {
      this.state = 'init';
    } else {
      this.state = 'question';
    }
  }

  proceed(event) {
    event.stopPropagation();
    this.action();
    this.state = 'init';
  }

  abort(event) {
    event.stopPropagation();
    this.state = 'init';
  }
}
