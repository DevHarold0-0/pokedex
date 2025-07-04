import ThemeToggle from "./ThemeToggle";

export default function Header() {
  return (
    <>
      <nav className="flex flex-row">
        <div>Home</div>
        <div>Index</div>
        
        <div>
          <ThemeToggle />
          {/* Theme component goes here */}
        </div>
      </nav>
    </>
  );
}