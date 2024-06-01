import ProfileHead from "./ProfileHead";

const ProfileLayout = ({ children }) => {
  return (
    <>
      <ProfileHead />
      {children}
    </>
  );
};

export default ProfileLayout;
