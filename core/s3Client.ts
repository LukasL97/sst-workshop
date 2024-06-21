import { GetObjectCommand, ListObjectsCommand, PutObjectCommand, S3Client } from '@aws-sdk/client-s3';

export const client = new S3Client({ region: 'eu-central-1' });

export class Client {
  async getObjectContent(key: string): Promise<string | undefined> {
    // const { Body } = await client.send(new GetObjectCommand({
    //   Bucket: '???', // TODO: Link bucket
    //   Key: key
    // }));
    // return await Body?.transformToString();
    return 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.';
  }

  async getObjectKeys(): Promise<string[]> {
    // const { Contents } = await client.send(new ListObjectsCommand({
    //   Bucket: '???' // TODO: Link bucket
    // }));
    // return Contents?.map(c => c.Key!) ?? [];
    return ['key1', 'key2', 'key3'];
  }

  async putObject(key: string, content: string) {
    // await client.send(new PutObjectCommand({
    //   Bucket: '???', // TODO: Link bucket
    //   Key: key,
    //   Body: content
    // }));
  }
}
