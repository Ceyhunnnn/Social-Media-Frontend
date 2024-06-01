import SavedPosts from "@/components/profile/savedPosts/SavedPosts";
import MainLayout from "@/layouts/mainLayout/MainLayout";
import ProfileLayout from "@/layouts/profileLayout/ProfileLayout";

const index = () => {
  return (
    <MainLayout>
      <ProfileLayout>
        <SavedPosts />
      </ProfileLayout>
    </MainLayout>
  );
};
export async function getStaticProps({ locale }) {
  return {
    props: {},
  };
}
export default index;
