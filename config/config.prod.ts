import { EggAppConfig, PowerPartial, EggAppInfo } from 'egg';

export default (appInfo: EggAppInfo) => {

  const config: PowerPartial<EggAppConfig> = {
    logger: {
      level: 'DEBUG',
      appLogName: `${appInfo.name}-web.log`,
      coreLogName: 'egg-web.log',
      agentLogName: 'egg-agent.log',
      errorLogName: 'common-error.log',
      dir: `${appInfo.root}/logs`,
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
