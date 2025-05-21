import { render, screen, within } from "@testing-library/react";
import { NavBar } from "@/components/nav-bar";

// ThemeToggle 컴포넌트 모킹
jest.mock("@/components/theme-toggle", () => {
  return {
    ThemeToggle: () => <div data-testid="theme-toggle">Theme Toggle</div>,
  };
});

describe("NavBar", () => {
  it("renders navigation links correctly", () => {
    render(<NavBar />);

    // 메인 로고 확인 (데스크톱 버전)
    expect(
      screen.getByText("DGlog", { selector: "a.text-3xl" }),
    ).toBeInTheDocument();

    // 데스크톱 메뉴 컨테이너 찾기
    const desktopMenu = screen.getByTestId("desktop-menu");
    expect(desktopMenu).toBeInTheDocument();

    // 데스크톱 메뉴의 링크들 확인
    const links = ["Home", "Projects", "Posts", "Guest"];
    links.forEach((link) => {
      const linkElement = within(desktopMenu).getByRole("link", { name: link });
      expect(linkElement).toHaveAttribute(
        "href",
        link === "Home" ? "/" : `/${link.toLowerCase()}`,
      );
    });

    // 데스크톱 메뉴의 테마 토글 버튼 확인
    expect(within(desktopMenu).getByTestId("theme-toggle")).toBeInTheDocument();
  });
});
