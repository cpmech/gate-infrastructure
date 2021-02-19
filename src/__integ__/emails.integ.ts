import AWS from 'aws-sdk';
import { v4 } from 'uuid';
import { sendEmail, receiveEmail, deleteEmail, extractCodeFromEmail } from '@cpmech/az-senqs';
import { initEnvars } from '@cpmech/envars';

jest.setTimeout(100000);

const envars = {
  GATE_DOMAIN: '',
  GATE_EMAIL_SENDER: '',
  GATE_RECV_DOMAIN: '',
  GATE_RECV_QUEUE_URL: '',
};

initEnvars(envars);

AWS.config.update({
  region: 'us-east-1',
});

describe('sendEmail, receiveEmail and deleteEmail', () => {
  test('works', async () => {
    const receiver = `tester+${v4()}@${envars.GATE_RECV_DOMAIN}`;

    console.log('1: sending email');
    await sendEmail(envars.GATE_EMAIL_SENDER, [receiver], 'CODE', 'Key = 123-456');

    console.log('2: receiving email');
    const res = await receiveEmail(receiver, envars.GATE_RECV_QUEUE_URL, 20, 2000);

    console.log('3: extracting code from email');
    const code = await extractCodeFromEmail(res.content, ['Key = '], 7);

    expect(code).toBe('123-456');

    console.log('4: deleting email');
    await deleteEmail(res.receiptHandle, envars.GATE_RECV_QUEUE_URL);
  });
});
