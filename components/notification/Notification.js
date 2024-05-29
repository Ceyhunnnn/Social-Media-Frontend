import NotificationList from "./NotificationList";

const Notification = () => {
  return (
    <div className="w-full bg-white rounded-normal border border-gray-30 py-6 px-8">
      <h1 className="text-base text-black-90">Notifications</h1>
      <hr className="my-4" />
      <NotificationList />
    </div>
  );
};

export default Notification;
