import MessageCard from "./MessageCard";

const MessageList = ({ selectedMessage, setSelectedMessage }) => {
  const messageList = [
    {
      id: 1,
      name: "Bessie Cooper",
      message: "Hi, Robert. I'm facing some chall somerr chall",
    },
    {
      id: 2,
      name: "Bessie Cooper",
      message: "Hi, Robert. I'm facing some chall somerr chall",
    },
  ];

  return (
    <div className="w-[317px] border-r border-gray-30 ">
      {messageList.map((msg) => {
        return (
          <MessageCard
            selectedMessage={selectedMessage}
            setSelectedMessage={setSelectedMessage}
            name={msg.name}
            message={msg.message}
            key={msg.id}
            id={msg.id}
          />
        );
      })}
    </div>
  );
};

export default MessageList;
