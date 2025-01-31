import { webpack } from "replugged";
import { PluginInjector, SettingValues, USRDB } from "../index";
import { defaultSettings } from "../lib/consts";
import Modules from "../lib/requiredModules";
import Utils from "../lib/utils";

export default (): void => {
  const { DisplayProfileUtils } = Modules;
  const loader = webpack.getFunctionKeyBySource(DisplayProfileUtils, /\w+\)\(\[\w+\.default/);
  PluginInjector.after(DisplayProfileUtils, loader, ([userId], res) => {
    if (
      !res ||
      !USRDB.has(userId) ||
      (res?.banner && SettingValues.get("nitroBanner", defaultSettings.nitroBanner))
    )
      return res;
    res.banner ??= res.userId;
    res.getBannerURL = () => {
      return Utils.tryUSRDBStatic(userId);
    };
    return res;
  });
};
