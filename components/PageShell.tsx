import { TopNav } from "./TopNav";
import { Sidebar, type SidebarItem } from "./Sidebar";

export function PageShell({
  tocItems,
  children,
}: {
  tocItems: SidebarItem[];
  children: React.ReactNode;
}) {
  return (
    <>
      <TopNav tocItems={tocItems} />
      <Sidebar title="On this page" items={tocItems} />
      <div className="pt-16 lg:pl-[calc(var(--vp-side-gap)+var(--vp-sidebar-width))] lg:pr-[var(--vp-side-gap)]">
        <div className="max-w-[1136px] mx-auto px-6 lg:px-12 xl:px-16">
          <main className="flex-1 min-w-0 max-w-[820px] py-8 vp-doc">
            {children}
          </main>
        </div>
      </div>
    </>
  );
}
