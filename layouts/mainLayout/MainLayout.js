import LeftMenu from "@/components/leftMenu/LeftMenu";
import Header from "@/components/header/Header";
import { useRouter } from "next/router";
import SuggesstedFriends from "@/components/suggesstedFriends/SuggesstedFriends";
import { useEffect } from "react";
import { getUserDataFromDb } from "@/store/globalActions";
import { useSelector } from "react-redux";

const MainLayout = ({ children }) => {
  const { user } = useSelector((state) => state.globalState);
  const { pathname } = useRouter();

  useEffect(() => {
    if (!user) {
      getUserDataFromDb();
    }
  }, []);
  return (
    <>
      {user && (
        <>
          <Header />
          <div className="flex justify-center  px-2 bg-white-10 min-h-screen ">
            <div className="max-w-7xl w-full flex gap-x-8 mt-12">
              <LeftMenu />
              <div
                className={`${
                  !(pathname === "/feed" || pathname === "/notification") &&
                  "w-full"
                }`}
              >
                {children}
              </div>
              {(pathname === "/feed" || pathname === "/notification") && (
                <div className="flex-1 h-fit">
                  <SuggesstedFriends />
                </div>
              )}
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default MainLayout;
