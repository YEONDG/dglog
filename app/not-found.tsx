import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 px-4 dark:from-gray-900 dark:to-gray-800">
      <div className="mx-auto max-w-2xl text-center">
        {/* 404 숫자 애니메이션 */}
        <div className="relative mb-8">
          <h1 className="animate-pulse bg-gradient-to-r from-orange-400 to-pink-600 bg-clip-text text-9xl font-black text-transparent md:text-[12rem]">
            404
          </h1>
          <div className="absolute inset-0 -z-10 text-9xl font-black text-gray-200 blur-sm dark:text-gray-700 md:text-[12rem]">
            404
          </div>
        </div>

        {/* 메시지 영역 */}
        <div className="mb-12 space-y-6">
          <h2 className="text-3xl font-bold text-gray-800 dark:text-white md:text-4xl">
            길을 잃으셨나요? 🧭
          </h2>
          <p className="text-lg leading-relaxed text-gray-600 dark:text-gray-300">
            찾으시는 페이지가 존재하지 않아요.
            <br />
            아마도 주소가 변경되었거나 잘못된 주소입니다.
          </p>
        </div>

        {/* 액션 버튼들 */}
        <div className="mb-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href="/"
            className="group relative transform rounded-full bg-gradient-to-r from-orange-500 to-pink-600 px-8 py-4 font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
          >
            <span className="relative z-10">🏠 홈으로 돌아가기</span>
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-orange-600 to-pink-700 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
          </Link>

          <Link
            href="/posts"
            className="rounded-full border-2 border-gray-300 px-8 py-4 font-semibold text-gray-700 transition-all duration-300 hover:border-orange-500 hover:text-orange-500 dark:border-gray-600 dark:text-gray-300"
          >
            📚 블로그 글 보기
          </Link>
        </div>
      </div>
    </div>
  );
}
