import Logo from "../components/Logo";
import { IoMoon, IoSunny } from "react-icons/io5";
import useTheme from "../hooks/useTheme";

const Header = () => {
  const {dark, setDark} = useTheme();

  const handleDarkModeToggle = () => {
    setDark(!dark);
  };

  return (
    <header className="border-b">
      <div className="flex justify-between items-center p-3">
        <div className="logo">
          <Logo />
        </div>
        <div className="flex gap-2">
          <button onClick={handleDarkModeToggle} className="text-2xl mr-4"> {dark ? <IoMoon /> : <IoSunny />}</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
