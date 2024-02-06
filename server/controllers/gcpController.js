//const monitoring = require('@google-cloud/monitoring');
import monitoring from '@google-cloud/monitoring';

// eslint-disable-next-line no-undef, no-unused-vars
const GOOGLE_APPLICATION_CREDENTIALS =
  //'dazzling-tiger-413503-f8b58bd9df86.json';
  {
    type: 'service_account',
    project_id: 'dazzling-tiger-413503',
    private_key_id: 'f8b58bd9df8604d135173aa3e20439fb142a6ebc',
    private_key:
      '-----BEGIN PRIVATE KEY-----\nMIIEvAIBADANBgkqhkiG9w0BAQEFAASCBKYwggSiAgEAAoIBAQCxC/D60gJ6VdXL\nc1q4pnyQpBzd3iee2eN6sSqx56YsZg68jUeiPqRSe5JJnJtTOchwx26CdtdeY18U\ne/VP1g+eCNLkepHdZXXYDbKU+uLhDI+Ab4eWPHLBqek6CDjdtduTIoy0tZnVB9Kn\nDgzQC7YXG3oY0Xnq7hXBpFYkkfC08XSeuNABHIajL+Hk2OIYq52pNiHyJ5PRXhaR\naLA857wSJb4mUDxueNZjpS/n5EgrVPdit0O9y4w+eu8RKfBn2e2qLQC47zyhRdn1\nJCAVF6B+un03E734G8FvOmD5jTN9uUPO+qZ4q4hdcEXOib08nqteUd8Qb0P6qiE0\npSkIEMRfAgMBAAECgf8+mKmmCwK40qz1X9uFtk3lv8f86P8JWMdfLLy0X5ybmsKO\nb54FTu3802s5KcVI+EMgjPcFhUF0BiNA3TDpn17TOiJZZpeKymxTRJ3RCGTZoc6P\nzpl4mUvZ+ompLxxBTZe1BxtsqWZ8rcdjAHOEGAg4AIO9ureXpegnwvqfDLTQmYUH\nTqzuOy0/JX88UnMmAT/ca27HmHVgggTfXa1Dq/CpcXBZw+J7niu9lRPMSK60bjLj\niuxvL2pyB07yJHecuDc/ZA3A/XHUM2YjhcTsps6YoOvkLD3ZG02dMEbgm1sQNPv9\n4m8O7zwOlKk8E8eaZ2iWLDCPsgq2QaPEfSZZAykCgYEA612D2xgbjD8w1vqmbyKF\nKPscArv5/IJ34BATl2Q4rhJ/NmMqaCHgWFYiKX0+ADemM25PUgSdUEEfuLkkK9AF\nL9U98l3P4plIofw3fErvS7f2zQYrN+M4PuCTHCmL2DjZ6cbw2LJhF1htx5L/oSKm\nm/EUnhSGp37KBp89iu9bnKcCgYEAwJGJLW7CNN7vg2r/MGMDMrukqmOUHfWNZZBA\n4Th0nh8TPcdRyeP1CzCEQYWUWo9gTGaexaKGh2jH/yijcNIjnldhyCDlPuNwGYYg\nhqk+lSmSZ3iFHvZqZ/05/OMnpenWyMUa6iHi0J0gufDAl+GUwX/ZD7MHOMap8mU0\nI1npeYkCgYEAtr3Q1peNLAMUJJZQCxG+Wec+BFF28ztJX8qbq3vBFkZ+RvgPwPIs\ngem+dIAtV3XdsSkApSm4CsvFmWMGVo4YuN7UTg3Qjpt87WgqnHKCAURAd0dG3wmo\nbglnrwIC9kqNxxkTfuxgvgOGmOHlYHLK8WDpJSPCuOGUcjfJTMozUxkCgYA3i8Nd\n74zlY0kDR2HEu0q435dn7sFSwvm+ShXs4TQCSERslYnqCm8sgxojLDzWwnSslQ1H\nRNI5TOgjmb1LVdIgYmQ6LgLyWPiE5EONlFQRAqTQY9tCSyH2TPzlDUDqgsEJuJFC\n5/Nc6XX/LIrhRJh8GDysYp+6qNNsr/SSHeVSwQKBgQDDNMgToMBXVr5s0sJnoNYw\n2Y8qf7ayuYMlQ8DwoM5u5FEtLai+i+5ajBXv4WOOhW6RUaOVE/cp1OKa5X4lsZm3\nHr4wtwWVF7W2QlO5N6C37msXFrhdFp8XR66biPB4wMjaxw+a+F0G15ZmrFZiYfq7\n+CsmmYjgTkbSGiphv5JJWQ==\n-----END PRIVATE KEY-----\n',
    client_email:
      'monitorning-test@dazzling-tiger-413503.iam.gserviceaccount.com',
    client_id: '101504143511847150701',
    auth_uri: 'https://accounts.google.com/o/oauth2/auth',
    token_uri: 'https://oauth2.googleapis.com/token',
    auth_provider_x509_cert_url: 'https://www.googleapis.com/oauth2/v1/certs',
    client_x509_cert_url:
      'https://www.googleapis.com/robot/v1/metadata/x509/monitorning-test%40dazzling-tiger-413503.iam.gserviceaccount.com',
    universe_domain: 'googleapis.com',
  };

// eslint-disable-next-line no-unused-vars
const GOOGLE_CLOUD_PROJECT = 'dazzling-tiger-413503';

//console.log(monitoring);
const testerClient = new monitoring.MetricServiceClient();
//console.log(testerClient);
// console.log(
//   testerClient.listMonitoredResourceDescriptors({
//     name: `projects/hello-world-app`,
//     filter: `metric.type="compute.googleapis.com/instance/cpu/utilization"`,
//     interval: {
//       startTime: {
//         // Start time (e.g., 1 hour ago)
//         seconds: Date.now() / 1000 - 3600,
//       },
//       endTime: {
//         // End time (now)
//         seconds: Date.now() / 1000,
//       },
//     },
//     view: 'FULL',
//     resourceTypes: ['gce_instance'],
//   })
// );
// console.log(
//   testerClient.listTimeSeries({
//     name: `projects/hello-world-app`,
//     filter: `metric.type="compute.googleapis.com/instance/cpu/utilization"`,
//     interval: {
//       startTime: {
//         // Start time (e.g., 1 hour ago)
//         seconds: Date.now() / 1000 - 3600,
//       },
//       endTime: {
//         // End time (now)
//         seconds: Date.now() / 1000,
//       },
//     },
//     view: 'FULL',
//     resourceTypes: ['gce_instance'],
//   })
// );

const gcpController = {};

gcpController.getMonitorData = async (req, res, next) => {
  const client = new monitoring.MetricServiceClient();
  const request = {
    name: `projects/hello-world-app`,
    filter: `metric.type="compute.googleapis.com/instance/cpu/utilization"`,
    interval: {
      startTime: {
        // Start time (e.g., 1 hour ago)
        seconds: Date.now() / 1000 - 3600,
      },
      endTime: {
        // End time (now)
        seconds: Date.now() / 1000,
      },
    },
    view: 'FULL',
    resourceTypes: ['gce_instance'],
  };

  const [timeSeries] = await client.listTimeSeries(request);
  timeSeries.forEach((series) => {
    console.log(series);
    res.locals.monitorData = series;
  });
  return next();
};

// gcpController.getMonitorData = apiController.getTeamData = (req, res, next) => {
//   fetch(
//     `https://api.sportmonks.com/v3/football/teams/seasons/21646?api_token=a23xE23gCHXFnIKUieFnt6P2WAeoHEWMhhAT9vzMcGG6ACs59EnikhZ3NFZR&select=name`
//   )
//     .then((data) => data.json())
//     .then((data) => {
//       //console.log(data);
//       res.locals.teamData = data;
//       return next();
//     })
//     .catch((err) => {
//       return next({
//         log: `apiController.getTeamData: ERROR ${err}`,
//         status: 500,
//         message: {
//           err: 'Error occured in apiController.getTeamData. Check server logs.',
//         },
//       });
//     });
// };

export default gcpController;
