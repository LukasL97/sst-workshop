'use server';

import { Client } from '@/core/s3Client';

export default async function FilePage({ params: { file } }: { params: { file: string } }) {

  const content = await new Client().getObjectContent(file)

  return <main className="flex min-h-screen flex-col items-center p-24">
    <h1>{file}</h1>
    <p>{content}</p>
  </main>;
}