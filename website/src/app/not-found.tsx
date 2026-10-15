import Link from 'next/link';
import { SITE_BASE_PATH } from '@/config/site';

export default function NotFound() {
  return (
    <div className="flex flex-1 flex-col items-center justify-center gap-4 py-32 text-center">
      <h1 className="text-4xl font-bold">404</h1>
      <p className="text-fd-muted-foreground">This page could not be found.</p>
      <Link href={`${SITE_BASE_PATH}/`} className="text-fd-primary underline">
        Back to home
      </Link>
    </div>
  );
}
