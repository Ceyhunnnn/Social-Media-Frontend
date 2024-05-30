import MessageBox from "@/components/icons/MessageBox";

const MessageBoxEmpty = () => {
  return (
    <div className="w-full h-[500px] flex flex-col gap-y-3 justify-center items-center">
      <MessageBox />
      <h1 className="text-sm text-black-90">Your messages</h1>
      <h6 className="text-xs text-gray-50">
        Select a person to display their chat or start a new conversation.
      </h6>
    </div>
  );
};

export default MessageBoxEmpty;
