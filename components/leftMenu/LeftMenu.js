import Cover from "@/components/icons/Cover";
import Feed from "@/components/icons/Feed";
import Message from "@/components/icons/Message";
import Notification from "@/components/icons/Notification";
import Profile from "@/components/icons/Profile";
import ProfileMenu from "@/components/icons/ProfileMenu";
import routes from "@/routes/routes";
import Link from "next/link";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";

const LeftMenu = () => {
  const { user } = useSelector((state) => state.globalState);
  const { pathname } = useRouter();
  const leftMenuItems = [
    {
      id: 0,
      title: "Feed",
      url: routes.feed,
      icon: (
        <Feed
          className={`fill-white  ${
            pathname === routes.feed ? "stroke-black-90" : "stroke-black-60"
          }`}
        />
      ),
    },
    {
      id: 1,
      title: "Profile",
      url: routes.profile,
      icon: (
        <ProfileMenu
          className={`fill-white  ${
            pathname === routes.profile ? "stroke-black-90" : "stroke-black-60"
          }`}
        />
      ),
    },
    {
      id: 2,
      title: "Message",
      url: routes.message,
      icon: (
        <Message
          className={`fill-white  ${
            pathname === routes.message ? "stroke-black-90" : "stroke-black-60"
          }`}
        />
      ),
    },
    {
      id: 3,
      title: "Notifications",
      url: routes.notification,
      icon: (
        <Notification
          className={`fill-white  ${
            pathname === routes.notification
              ? "stroke-black-90"
              : "stroke-black-60"
          }`}
        />
      ),
    },
  ];
  return (
    <div className="w-[292px] rounded-normal border h-fit bg-white">
      <Cover />
      <div className="-mt-7 px-8">
        <Profile />
      </div>
      <div className="my-6 px-8">
        <h1 className="text-black-90 text-sm">
          {user?.firstName} {user?.lastName}
        </h1>
        <h2 className="text-black-80 text-xs ">{user?.title}</h2>
        <div className="mt-10 mb-8">
          <ul className="flex flex-col gap-y-6">
            {leftMenuItems.map((left, index) => (
              <Link
                key={left.id}
                href={left.url}
                className={`flex gap-x-4 items-center ${
                  !(index >= 3) && "border-b border-white-30 pb-2"
                }`}
              >
                <div>{left.icon}</div>
                <p
                  className={`text-sm ${
                    pathname === left.url ? "text-black-90" : "text-black-60"
                  }`}
                >
                  {left.title}
                </p>
              </Link>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default LeftMenu;
