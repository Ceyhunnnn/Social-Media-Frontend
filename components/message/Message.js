import MessageBoxEmpty from "./MessageBox/MessageBoxEmpty";
import { useState } from "react";
import MessageList from "./MessageList/MessageList";
import MessageBox from "./MessageBox/MessageBox";

const Message = () => {
  const [selectedMessage, setSelectedMessage] = useState(null);

  return (
    <div className="w-full flex flex-col bg-white border border-gray-30 rounded-normal pt-6">
      <h1 className="text-base text-black-90 pb-4 border-b border-gray-30 px-8">
        Messages
      </h1>
      <div className="flex">
        <MessageList
          selectedMessage={selectedMessage}
          setSelectedMessage={setSelectedMessage}
        />
        <div className="flex-1">
          {selectedMessage ? <MessageBox /> : <MessageBoxEmpty />}
        </div>
      </div>
    </div>
  );
};

export default Message;
