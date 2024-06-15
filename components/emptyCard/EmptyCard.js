import EmptyIcon from "../icons/EmptyIcon";

const EmptyCard = ({ desc, button, buttonTitle }) => {
  return (
    <div className="flex justify-center items-center">
      <div className="w-full flex justify-center border rounded-md  my-2 border-app-gray p-10 bg-white">
        <div className="flex flex-col gap-y-4 items-center ">
          <EmptyIcon />
          <p className="text-sm">{desc}</p>
          {button && <button onClick={button}>{buttonTitle}</button>}
        </div>
      </div>
    </div>
  );
};

export default EmptyCard;
