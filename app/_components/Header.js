import Navigation from "@/app/_components/Navigation";
import Logo from "@/app/_components/Logo";

function Header() {
  return (
    <header className="border-b border-primary-900 px-4 sm:px-8 py-4 sm:py-5">
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center max-w-7xl mx-auto gap-4 sm:gap-0">
        <Logo />
        <Navigation />
      </div>
    </header>
  );
}

export default Header;
