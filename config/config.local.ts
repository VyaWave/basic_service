import { EggAppConfig, PowerPartial, EggAppInfo } from 'egg';

/* eslint-disable-next-line*/
const path = require('path')

export default (appInfo: EggAppInfo) => {
  const config: PowerPartial<EggAppConfig> = {
    logger: {
      level: 'DEBUG',
      appLogName: `${appInfo.name}-web.log`,
      coreLogName: 'egg-web.log',
      agentLogName: 'egg-agent.log',
      dir: path.join(appInfo.baseDir, 'logs'),
      outputJSON: true,
    },
    security: {
      csrf: {
        enable: false,
      },
    },
  };

  config.keys = appInfo.name + '_1645512750188_2163';

  return config;
};
