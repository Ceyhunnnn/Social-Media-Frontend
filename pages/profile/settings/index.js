import Settings from "@/components/profile/settings/Settings";
import MainLayout from "@/layouts/mainLayout/MainLayout";
import ProfileLayout from "@/layouts/profileLayout/ProfileLayout";

const index = () => {
  return (
    <MainLayout>
      <ProfileLayout>
        <Settings />
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
