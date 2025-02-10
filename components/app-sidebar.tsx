import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '@/components/ui/sidebar';
import { ChevronDown } from 'lucide-react';
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from './ui/collapsible';
import Link from 'next/link';

export function AppSidebar() {
  const reactProjects = [
    {
      name: 'React 19 변경점',
      url: '/study/react-19',
    },
  ];
  const javascriptProjects = [
    {
      name: 'intersection Observer',
      url: '/study/intersection-observer',
    },
  ];

  return (
    <Sidebar>
      <SidebarHeader>
        <div className='flex items-center'>
          <Link href={'/study'}>DGlog</Link>
        </div>
      </SidebarHeader>
      <SidebarContent>
        <Collapsible className='group/collapsible'>
          <SidebarGroup />
          <SidebarGroupLabel asChild>
            <CollapsibleTrigger className='flex justify-between items-center w-full'>
              리액트
              <ChevronDown className='ml-auto transition-transform group-data-[state=open]/collapsible:rotate-180' />
            </CollapsibleTrigger>
          </SidebarGroupLabel>
          <CollapsibleContent>
            <SidebarGroupContent>
              <SidebarMenu>
                {reactProjects.map((project) => (
                  <SidebarMenuItem key={project.name}>
                    <SidebarMenuButton asChild>
                      <Link href={project.url} className='flex justify-end'>
                        <span>{project.name}</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </CollapsibleContent>
          <SidebarGroup />
        </Collapsible>
        <Collapsible className='group/collapsible'>
          <SidebarGroup />
          <SidebarGroupLabel asChild>
            <CollapsibleTrigger className='flex justify-between items-center w-full'>
              자바스크립트
              <ChevronDown className='ml-auto transition-transform group-data-[state=open]/collapsible:rotate-180' />
            </CollapsibleTrigger>
          </SidebarGroupLabel>
          <CollapsibleContent>
            <SidebarGroupContent>
              <SidebarMenu>
                {javascriptProjects.map((project) => (
                  <SidebarMenuItem key={project.name}>
                    <SidebarMenuButton asChild>
                      <Link href={project.url} className='flex justify-end'>
                        <span>{project.name}</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </CollapsibleContent>
          <SidebarGroup />
        </Collapsible>
      </SidebarContent>

      <SidebarFooter />
    </Sidebar>
  );
}
