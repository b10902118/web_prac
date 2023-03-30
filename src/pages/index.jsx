import { Link, Outlet } from "react-router-dom";

export default function RootLayout() {
  return (
    <div>
      <Link to="/">Home</Link> | <Link to="/about">About</Link> | <Link to="/app">App</Link> 
      <div>
        <Outlet />
      </div>
    </div>
  );
}

export function RootIndex() {
  return <h1> Hi, I am b10902118 崔俊威. I am new to web programming. </h1>;
}
