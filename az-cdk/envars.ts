import { initEnvars } from '@cpmech/envars';

const envars = {
  // stage
  STAGE: '',

  // website
  GATE_DOMAIN: '',
  GATE_HOSTED_ZONE_ID: '',
  GATE_CERTIFICATE_ARN: '',
  GATE_CLOUDFRONT_ID_DEV: '',
  GATE_CLOUDFRONT_ID_PROD: '',
  GATE_EMAIL_SENDER: '',
  GATE_NOTIFY_EMAILS: '',

  // receiving emails => integration tests
  GATE_RECV_DOMAIN: '',
  GATE_RECV_HOSTED_ZONE_ID: '',
  GATE_RECV_CERT_ARN: '',

  // infrastructure
  GATE_TABLE_USERS: '',
  GATE_BUCKET_DOCS: '',

  // cognito
  GATE_DEFAULT_USER_GROUP: '',
  GATE_FACEBOOK_CLIENT_ID: '',
  GATE_FACEBOOK_CLIENT_SECRET: '',
  GATE_GOOGLE_CLIENT_ID: '',
  GATE_GOOGLE_CLIENT_SECRET: '',
};

initEnvars(envars);

export const cfg = {
  // my app key
  KEY: 'gate',
  GITHUB_USER: 'cpmech',
  GITHUB_REPO_WEBSITE: 'gate',

  // group and stage => enforce prod for the website
  STAGE: envars.STAGE,

  // website
  DOMAIN: envars.GATE_DOMAIN,
  HOSTED_ZONE_ID: envars.GATE_HOSTED_ZONE_ID,
  CERTIFICATE_ARN: envars.GATE_CERTIFICATE_ARN,
  CLOUDFRONT_ID_DEV: envars.GATE_CLOUDFRONT_ID_DEV,
  CLOUDFRONT_ID_PROD: envars.GATE_CLOUDFRONT_ID_PROD,
  EMAIL_SENDER: envars.GATE_EMAIL_SENDER,
  NOTIFY_EMAILS: envars.GATE_NOTIFY_EMAILS,

  // receiving emails => integration tests
  RECV_DOMAIN: envars.GATE_RECV_DOMAIN,
  RECV_HOSTED_ZONE_ID: envars.GATE_RECV_HOSTED_ZONE_ID,
  RECV_CERT_ARN: envars.GATE_RECV_CERT_ARN,

  // infrastructure
  TABLE_USERS: envars.GATE_TABLE_USERS,
  BUCKET_DOCS: envars.GATE_BUCKET_DOCS,

  // cognito
  DEFAULT_USER_GROUP: envars.GATE_DEFAULT_USER_GROUP,
  FACEBOOK_CLIENT_ID: envars.GATE_FACEBOOK_CLIENT_ID,
  FACEBOOK_CLIENT_SECRET: envars.GATE_FACEBOOK_CLIENT_SECRET,
  GOOGLE_CLIENT_ID: envars.GATE_GOOGLE_CLIENT_ID,
  GOOGLE_CLIENT_SECRET: envars.GATE_GOOGLE_CLIENT_SECRET,

  // cognito-messages
  EMAIL_SUBJECT: 'gate: Confirmation code',
  EMAIL_MSG: `<p>Hello,<p/>
<p>Thank you for registering an account with us!</p>
<p>Your confirmation code is <b>{####}<b></p>
<p>Cheers!</p>`,
  SMS_MSG: 'From gate. Your confirmation code is {####}',
};
