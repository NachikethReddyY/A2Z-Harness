import { createFileRoute } from '@tanstack/react-router'
import CSidebar from '#/components/finalsidebar';

export const Route = createFileRoute('/')({ component: Home })

function Home() {
  return (
			<div className="p-8">
				<CSidebar />
			</div>
		);
}
