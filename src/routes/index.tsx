import { createFileRoute, Navigate, redirect } from "@tanstack/react-router";

const Index = () => <Navigate to="/home" />;

export const Route = createFileRoute("/")({
	component: Index,
	beforeLoad: ({ context }) => {
		if (!context.session) {
			throw redirect({
				to: "/auth/register",
			});
		}
	},
});
