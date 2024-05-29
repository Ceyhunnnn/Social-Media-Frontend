import Logo from "../icons/Logo";
import Person from "../icons/Person";
import Search from "../icons/Search";
import Input from "../input/Input";

const Header = () => {
  return (
    <header className="bg-white h-20 w-full flex justify-center items-center px-2 sticky top-0 shadow">
      <div className="max-w-7xl flex justify-between w-full py-5">
        <div className="flex gap-x-4 items-center">
          <Logo />
          <p className="text-lg font-semibold">Social</p>
        </div>
        <div className="max-w-[582px] w-full mr-16">
          <Input type="text" icon={<Search />} placeholder="Search" />
        </div>
        <div className="flex gap-x-4 text-sm text-black-80 items-center">
          <p>Logout</p>
          <Person />
        </div>
      </div>
    </header>
  );
};

export default Header;
