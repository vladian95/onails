'use client';

import { useRouter } from 'next/navigation';

export default function BackBtn() {
  const router = useRouter();

  return (
    <button type="button" onClick={() => router.push('/')}>
      На главную
    </button>
  );
}
