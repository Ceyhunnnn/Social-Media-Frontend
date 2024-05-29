import SuggesstedFriendsCard from "./SuggesstedFriendsCard";

const SuggesstedFriendsList = () => {
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
    <div className="flex flex-col gap-y-3">
      {suggesstedList.map((sug) => (
        <SuggesstedFriendsCard key={sug.id} name={sug.name} job={sug.job} />
      ))}
    </div>
  );
};

export default SuggesstedFriendsList;
