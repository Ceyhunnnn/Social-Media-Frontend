import Profile from "@/components/icons/Profile";

const MessageBuyerCard = () => {
  return (
    <div className="flex gap-x-2">
      <Profile />
      <div className="flex flex-col p-3 w-2/3 bg-white-20 rounded-r-normal rounded-bl-normal">
        <div className="flex items-center gap-x-2">
          <h1 className="text-black-90 text-sm">Bessie</h1>
          <h6 className="text-gray-50 text-xs">Marketing Manger</h6>
        </div>
        <p className="text-sm text-black-80 my-2">
          Hi, Robert. I'm facing some challenges in optimizing my code for
          performance. Can you help?
        </p>
        <div className="flex justify-end">
          <span className="text-xs text-gray-50">12.45 PM</span>
        </div>
      </div>
    </div>
  );
};

export default MessageBuyerCard;
