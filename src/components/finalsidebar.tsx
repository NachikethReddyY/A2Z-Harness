import {
	Sidebar,
	SidebarContent,
	SidebarFooter,
	SidebarHeader,
	SidebarMenu,
	SidebarMenuButton,
	SidebarMenuItem,
	SidebarProvider,
} from "#/components/shadcn/sidebar";

export default function CSidebar({ children }: { children?: React.ReactNode }) {

	return (
		// Wraps the sidebat Component
		<SidebarProvider>
			{/* the side bar itself */}
			<Sidebar>
				{/* Sidebar header, this is a sticky component */}
				<SidebarHeader>
					<SidebarMenu>
						<SidebarMenuItem>
							<div>
								<div className="bg-blue-600 w-10 h-10 place-content-center ">
									<p className="text-white font-bold">A2Z</p>
								</div>
							</div>
						</SidebarMenuItem>
					</SidebarMenu>
				</SidebarHeader>

				{/* Sidebar content - wrapps the entire contnent */}
				<SidebarContent>
					<p>Test Component</p>
					{/* {children} */}
				</SidebarContent>

				<SidebarFooter>
					<SidebarMenu>
						<SidebarMenuItem>
							<SidebarMenuButton>Username</SidebarMenuButton>
						</SidebarMenuItem>
							</SidebarMenu>
						</SidebarFooter>
					</Sidebar>
					{children}
				</SidebarProvider>
	);
}
