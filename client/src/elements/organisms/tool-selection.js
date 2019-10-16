import { inject } from "aurelia-framework";
import ToolsInfo from "resources/ToolsInfo";
import User from "resources/User.js";

@inject(ToolsInfo, User)
export class ToolSelection {
  constructor(toolsInfo, user) {
    this.showAllTools = true
    this.toolsInfo = toolsInfo;
    this.user = user;
  }

  async attached() {
    this.visibleTools = await this.toolsInfo.getAvailableTools();
  }
}
