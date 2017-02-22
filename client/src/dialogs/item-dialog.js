import { inject } from 'aurelia-framework';
import { DialogController } from 'aurelia-dialog';
import { DialogService } from 'aurelia-dialog';
import EmbedCodeGenerator from 'resources/EmbedCodeGenerator.js';

@inject(DialogController, DialogService, EmbedCodeGenerator)
export class ItemDialog {

  constructor(controller, dialogService, embedCodeGenerator) {
    this.controller = controller;

    this.dialogService = dialogService;
    this.embedCodeGenerator = embedCodeGenerator;

    controller.settings.lock = false;
    controller.settings.centerHorizontalOnly = true;
  }

  activate(config) {
    this.config = config;
    this.item = config.item;

    this.embedCodeGenerator.getEmbedCodeForItem(this.item)
      .then(embedCode => {
        this.embedCode = embedCode;
      })
  }

  activateItem() {
    this.item.activate();
  }

  deactivateItem() {
    this.item.deactivate();
  }
}
