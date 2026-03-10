import { createFileRoute } from "@tanstack/react-router";
import { Chip } from "@heroui/react";

export const Route = createFileRoute("/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="flex items-center justify-center w-screen h-screen">
      <Chip color="success" variant="secondary">
        <Chip.Label>Hello</Chip.Label>
      </Chip>
    </div>
  );
}
