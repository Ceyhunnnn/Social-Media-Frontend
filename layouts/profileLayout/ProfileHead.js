import Profile from "@/components/icons/Profile";
import routes from "@/routes/routes";
import Link from "next/link";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";

const ProfileHead = () => {
  const { user } = useSelector((state) => state.globalState);

  const { pathname } = useRouter();
  const contentPageList = [
    {
      id: 0,
      title: "My Posts",
      url: routes.profile,
    },
    {
      id: 1,
      title: "Saved Posts",
      url: routes.savedPosts,
    },
    {
      id: 2,
      title: "Settings",
      url: routes.settings,
    },
  ];
  return (
    <div className="w-full bg-white border border-gray-30 rounded-normal mb-8">
      <div className="p-8 flex justify-between items-center">
        <div className="flex items-center gap-x-6">
          <Profile />
          <div className="flex flex-col gap-y-1">
            <h1 className="text-black-80 font-semibold">
              {user?.firstName} {user?.lastName}{" "}
              <span className="text-xs text-gray-50"> / {user?.email}</span>
            </h1>
            <h2 className="text-xs text-black-60">{user?.title}</h2>
          </div>
        </div>
        <div className="flex items-center gap-x-6">
          <span className="flex flex-col justify-center items-center">
            <h1 className="text-base text-black-80 font-bold">12</h1>
            <p className="text-black-60 text-xs">Posts</p>
          </span>
          <span className="flex flex-col justify-center items-center">
            <h1 className="text-base text-black-80 font-bold">207</h1>
            <p className="text-black-60 text-xs">Followers</p>
          </span>
          <span className="flex flex-col justify-center items-center">
            <h1 className="text-base text-black-80 font-bold">64</h1>
            <p className="text-black-60 text-xs">Following</p>
          </span>
        </div>
      </div>
      <hr />
      <div className="px-8 flex gap-x-8 py-5">
        {contentPageList.map((page) => {
          return (
            <Link
              key={page.id}
              href={page.url}
              className={`${
                pathname === page.url ? "text-black-90" : "text-gray-50"
              }  text-sm`}
            >
              {page.title}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default ProfileHead;
