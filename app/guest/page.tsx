import { getGuestEntries } from '@/actions/guestbook';
import { GuestBookClient } from '@/components/guest/guestbook-client';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

const GuestPage = async () => {
  const entries = await getGuestEntries();

  return <GuestBookClient initialEntries={entries} />;
};

export default GuestPage;
