import MessageBuyerCard from "./MessageBuyerCard";
import MessageSenderCard from "./MessageSenderCard";

const MessageContent = () => {
  const messages = [
    {
      id: 3311,
      isSender: false,
      name: "Bessie",
      title: "Marketing Manger",
      content:
        "Hi, Robert. I'm facing some challenges in optimizing my code for performance. Can you help?",
      date: "12.45 PM",
    },
    {
      id: 2211,
      isSender: true,
      name: "Bessie",
      title: "Marketing Manger",
      content:
        "Hi, Robert. I'm facing some challenges in optimizing my code for performance. Can you help?",
      date: "12.45 PM",
    },
  ];
  return (
    <div className="flex flex-col px-10 gap-y-6 ">
      {messages.map((message) => {
        return message.isSender ? (
          <MessageSenderCard key={message.id} />
        ) : (
          <MessageBuyerCard key={message.id} />
        );
      })}
    </div>
  );
};

export default MessageContent;
