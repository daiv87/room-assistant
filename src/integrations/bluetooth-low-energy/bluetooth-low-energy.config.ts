export class BluetoothLowEnergyConfig {
  whitelist: string[] = [];
  whitelistRegex = false;
  processIBeacon = true;
  onlyIBeacon = false;
  majorMask = 0xffff;
  minorMask = 0xffff;
  tagOverrides: { [key: string]: TagOverride } = {};

  timeout = 5;
}

class TagOverride {
  name?: string;
  measuredPower?: number;
}
