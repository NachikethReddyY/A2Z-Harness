import { createFileRoute } from '@tanstack/react-router'
import { LiquidMultimodalInput } from '#/components/chat';
import CSidebar from '#/components/finalsidebar';

export const Route = createFileRoute('/')({ component: Home })

function Home() {
  return (
			<CSidebar>
				<main className="flex min-h-svh flex-1 items-center justify-center p-8">
					<LiquidMultimodalInput placeholder="Ask Wensity, or drop a file…" />
				</main>
			</CSidebar>
		);
}
