import { getGuestEntries } from "@/actions/guestbook";
import { GuestBookClient } from "@/components/guest/guestbook-client";
import { Metadata } from "next";

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

const GuestPage = async () => {
  const entries = await getGuestEntries();

  return <GuestBookClient initialEntries={entries} />;
};

export default GuestPage;
