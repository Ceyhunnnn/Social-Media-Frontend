import SuggesstedFriendsCard from "./SuggesstedFriendsCard";

const SuggesstedFriends = () => {
  const suggesstedList = [
    {
      id: 0,
      name: "Olivia Anderson",
      job: "Financial Analyst",
    },
    {
      id: 1,
      name: "Thomas Baker",
      job: "Computer Engineer",
    },
    {
      id: 2,
      name: "Lily Lee",
      job: "Graphic Designer",
    },
    {
      id: 3,
      name: "Andrew Harris",
      job: "Data Scientist",
    },
  ];
  return (
    <div className="border border-gray-30 flex flex-col gap-y-3 rounded-normal px-8 py-6 bg-white">
      <h5 className="text-black-90 text-base">Suggessted Friends</h5>
      <hr />
      <div className="flex flex-col gap-y-3">
        {suggesstedList.map((sug) => (
          <SuggesstedFriendsCard key={sug.id} name={sug.name} job={sug.job} />
        ))}
      </div>
    </div>
  );
};

export default SuggesstedFriends;
