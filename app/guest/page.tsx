import { getGuestEntries } from '@/actions/guestbook';
import { GuestBookClient } from '@/components/guest/guestbook-client';

const GuestPage = async () => {
  const entries = await getGuestEntries();

  return <GuestBookClient initialEntries={entries} />;
};

export default GuestPage;
