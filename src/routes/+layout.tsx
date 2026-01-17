import { Outlet } from "react-router";

export function RootLayout() {
  return (
    <div>
      <header>My App</header>
      <Outlet /> {/* Renders child routes */}
    </div>
  );
}
