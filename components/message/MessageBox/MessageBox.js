import MessageContent from "../MessageContent/MessageContent";
import MessageBoxInput from "./MessageBoxInput";

const MessageBox = () => {
  return (
    <div className="h-[500px] relative bg-white py-6 w-full">
      <MessageContent />
      <MessageBoxInput />
    </div>
  );
};

export default MessageBox;
