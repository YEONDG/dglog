import { Metadata } from "next";
import { getGuestEntries } from "@/actions/guestbook";

import { GuestBookClient } from "@/components/guest/guestbook-client";
import { Suspense } from "react";

export const dynamic = "force-dynamic";
export const revalidate = 0;

export const metadata: Metadata = {
  title: "방명록 | 프론트엔드 개발자 연동근의 포트폴리오",
  description:
    "방문자들의 메시지를 남기고 다른 사람들의 메시지를 확인할 수 있는 방명록 페이지입니다.",
  keywords: [
    "프론트엔드 개발자 방명록",
    "포트폴리오 방명록",
    "개발자 게스트북",
    "연동근 방명록",
    "웹 개발자 피드백",
  ],
  alternates: {
    canonical: "/guest",
  },
  openGraph: {
    title: "방명록 | 프론트엔드 개발자 연동근의 포트폴리오",
    description:
      "방문자들의 메시지를 남기고 다른 사람들의 메시지를 확인할 수 있는 방명록 페이지입니다.",
    type: "website",
  },
};

const GuestPage = () => {
  const entries = getGuestEntries();

  return (
    <section aria-labelledby="guestbook-heading">
      <h1 id="guestbook-heading" className="sr-only">
        방명록
      </h1>
      <Suspense fallback={<p>Loading...</p>}>
        <GuestBookClient initialEntries={entries} />
      </Suspense>
    </section>
  );
};

export default GuestPage;
