'use client';

import '../backBtn/backBtn.scss';

import { useRouter } from 'next/navigation';

export default function BackBtn() {
  const router = useRouter();

  return (
    <button type="button" onClick={() => router.push('/#cards')}>
      На главную
    </button>
  );
}
