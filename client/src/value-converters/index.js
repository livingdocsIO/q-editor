export function configure(frameworkConfiguration) {
  frameworkConfiguration
    .globalResources("./FilterValueConverter.js")
    .globalResources("./ForceNumberValueConverter.js")
    .globalResources("./JsonValueConverter.js")
    .globalResources("./KeysValueConverter.js")
    .globalResources("./TimeAgoValueConverter.js")
    .globalResources("./ToolTValueConverter.js");
}
