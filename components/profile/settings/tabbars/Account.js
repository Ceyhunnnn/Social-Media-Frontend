const Account = () => {
  return (
    <div className="flex flex-col gap-y-5 px-20">
      <h1 className="text-sm text-black-90">Delete Account</h1>
      <h2 className="text-xs text-black-80">
        This action is irreversible and will permanently delete all your data
        associated with the account.
      </h2>
      <button className="p-2 flex text-sm justify-center items-center border rounded-normal border-red-500 text-red-500 hover:bg-red-500 hover:text-white transition-all duration-300">
        Delete My Account
      </button>
    </div>
  );
};

export default Account;
