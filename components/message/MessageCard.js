import Profile from "../icons/Profile";

const MessageCard = ({
  name,
  message,
  id,
  selectedMessage,
  setSelectedMessage,
}) => {
  return (
    <div
      className={`w-full px-8 py-4 flex items-center hover:cursor-pointer transition-colors duration-300 ${
        selectedMessage === id && "bg-white-20"
      }`}
      onClick={() => setSelectedMessage(id)}
    >
      <div className="flex items-center gap-x-2">
        <Profile />
        <div className="flex flex-col gap-y-1">
          <h1 className="text-sm text-black-90">{name}</h1>
          <h2 className="text-ellipsis line-clamp-1 text-xs text-black-80">
            {message}
          </h2>
        </div>
      </div>
    </div>
  );
};

export default MessageCard;
