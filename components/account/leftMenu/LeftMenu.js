import Cover from "@/components/icons/Cover";
import Feed from "@/components/icons/Feed";
import Message from "@/components/icons/Message";
import Notification from "@/components/icons/Notification";
import Profile from "@/components/icons/Profile";
import ProfileMenu from "@/components/icons/ProfileMenu";
import routes from "@/routes/routes";
import Link from "next/link";
import { useRouter } from "next/router";

const LeftMenu = () => {
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
      url: routes.messages,
      icon: (
        <Message
          className={`fill-white  ${
            pathname === routes.messages ? "stroke-black-90" : "stroke-black-60"
          }`}
        />
      ),
    },
    {
      id: 3,
      title: "Notifications",
      url: routes.notifications,
      icon: (
        <Notification
          className={`fill-white  ${
            pathname === routes.notifications
              ? "stroke-black-90"
              : "stroke-black-60"
          }`}
        />
      ),
    },
  ];
  return (
    <div className="w-[290px] rounded-normal border h-fit">
      <Cover />
      <div className="-mt-5 px-8">
        <Profile />
      </div>
      <div className="my-6 px-8">
        <h1 className="text-black-90 text-sm">Robert Fox</h1>
        <h2 className="text-black-80 text-xs ">Software Engineer</h2>
        <div className="mt-10 mb-8">
          <ul className="flex flex-col gap-y-6">
            {leftMenuItems.map((left) => (
              <Link
                key={left.id}
                href={left.url}
                className="flex gap-x-4 items-center"
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
