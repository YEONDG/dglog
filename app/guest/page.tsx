import { getGuestEntries } from '@/actions/guestbook';
import { GuestBookClient } from '@/components/guest/guestbook-client';

export default async function GuestPage() {
  const entries = await getGuestEntries();

  return <GuestBookClient initialEntries={entries} />;
}
