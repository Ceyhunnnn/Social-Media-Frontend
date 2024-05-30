import Profile from "../icons/Profile";
import Send from "../icons/Send";
import Input from "../input/Input";
const MessageBoxInput = () => {
  return (
    <div className="absolute bottom-0 w-full">
      <div className="flex gap-x-6   items-center px-10 py-6 h-16">
        <Profile width={48} height={48} />
        <div className="w-full">
          <Input
            placeholder="Message ..."
            name="message"
            type="text"
            suffixIcon={<Send />}
          />
        </div>
      </div>
    </div>
  );
};

export default MessageBoxInput;
