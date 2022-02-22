import { EggAppConfig, EggAppInfo, PowerPartial } from 'egg';

/* eslint-disable-next-line*/
const path = require('path')
export default (appInfo: EggAppInfo) => {
  const config = {} as PowerPartial<EggAppConfig>;

  // override config from framework / plugin
  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1645512750188_2163';

  // add your egg config in here
  config.middleware = [];

  // add your special config in here
  const bizConfig = {
    sourceUrl: `https://github.com/eggjs/examples/tree/master/${appInfo.name}`,
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

  // the return config will combines to EggAppConfig
  return {
    ...config,
    ...bizConfig,
  };
};
