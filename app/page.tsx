'use server';

import Link from 'next/link';
import { Client } from '@/core/s3Client';

export default async function Home() {

  const files = await new Client().getObjectKeys();

  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <h1>S3 files</h1>
      <ul>
        {files.map(file => (<Link
          key={file}
          href={`/file/${file}`}>
          <li className="rounded bg-gray-800 m-3 p-3">{file}</li>
        </Link>))}
      </ul>
    </main>
  );
}
