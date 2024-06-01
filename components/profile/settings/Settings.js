import { useState } from "react";
import General from "./tabbars/General";
import Account from "./tabbars/Account";

const Settings = () => {
  const [selectedMenu, setSelectedMenu] = useState("general");
  const selectedItem = {
    general: <General />,
    account: <Account />,
  };
  return (
    <div className="flex flex-col rounded-normal border border-gray-30 bg-white">
      <h1 className="text-sm text-black-90 p-8">Settings</h1>
      <hr />
      <div className="flex gap-x-8">
        <div className="flex flex-col border-r border-gray-30  gap-y-2 w-[250px] pt-5">
          <button
            className={`${
              selectedMenu === "general" && "bg-gray-30"
            }  text-sm h-10 flex justify-center items-center`}
            onClick={() => setSelectedMenu("general")}
          >
            General
          </button>
          <button
            className={`${
              selectedMenu === "account" && "bg-gray-30"
            }  text-sm h-10 flex justify-center items-center`}
            onClick={() => setSelectedMenu("account")}
          >
            Account
          </button>
          <button
            className=" text-sm h-10 flex justify-center items-center"
            onClick={() => null}
          >
            Logout
          </button>
        </div>
        <div className="py-5 flex-1">{selectedItem[selectedMenu]}</div>
      </div>
    </div>
  );
};

export default Settings;
