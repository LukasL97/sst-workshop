import { SNSEvent } from 'aws-lambda';
import { randomUUID } from 'node:crypto';

export async function handler(event: SNSEvent) {
  const record = event.Records[0];

  const subject = record.Sns.Subject ?? randomUUID();

  console.log(`Subject: ${subject}`);
}
