import NotificationCard from "./NotificationCard";

const NotificationList = () => {
  const NotificationList = [
    {
      id: 0,
      title: "test",
      createdAt: "10 minutes ago",
      content: "test2",
    },
    {
      id: 1,
      title: "test2",
      createdAt: "5 minutes ago",
      content: "test3",
    },
  ];

  return (
    <div className="flex flex-col gap-y-3">
      {NotificationList.map((not) => (
        <NotificationCard
          title={not.title}
          content={not.content}
          createdAt={not.createdAt}
          key={not.id}
        />
      ))}
    </div>
  );
};

export default NotificationList;
