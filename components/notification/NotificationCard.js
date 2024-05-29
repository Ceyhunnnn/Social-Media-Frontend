import Profile from "../icons/Profile";

const NotificationCard = ({ title, createdAt, content }) => {
  return (
    <div className="flex justify-between items-center border-b border-gray-30 pb-3">
      <div className="flex gap-x-3 items-center bg-red-500 ">
        <Profile width={40} height={40} />
        <h1 className="text-sm text-black-90">{title}</h1>
        <h2 className="text-xs text-black-60">{content}</h2>
      </div>
      <p className="text-sm text-black-40">{createdAt}</p>
    </div>
  );
};

export default NotificationCard;
