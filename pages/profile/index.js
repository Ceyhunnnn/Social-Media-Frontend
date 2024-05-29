import Profile from "@/components/profile/Profile";
import MainLayout from "@/layouts/MainLayout";

const index = () => {
  return (
    <MainLayout>
      <Profile />
    </MainLayout>
  );
};
export async function getStaticProps({ locale }) {
  return {
    props: {},
  };
}
export default index;
