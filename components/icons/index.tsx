import {
  Electron,
  NextJs,
  NodeJs,
  Notion,
  Prisma,
  React,
  ReactQuery,
  ReactRouter,
  ShadcnUI,
  Supabase,
  TailwindCSS,
  TypeScript,
  Zod,
} from "developer-icons";
import ZustandIcon from "./zustand";

interface IconProps {
  className?: string;
}

export const STACK_ICONS: { [key: string]: React.ComponentType<IconProps> } = {
  react: React,
  next: NextJs,
  typescript: TypeScript,
  react_query: ReactQuery,
  tailwind: TailwindCSS,
  notion: Notion,
  zustand: ZustandIcon,
  supabase: Supabase,
  prisma: Prisma,
  zod: Zod,
  shadcn: ShadcnUI,
  react_router: ReactRouter,
  electron: Electron,
  node: NodeJs,
};
