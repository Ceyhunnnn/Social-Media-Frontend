import Notification from "@/components/notification/Notification";
import MainLayout from "@/layouts/mainLayout/MainLayout";

const index = () => {
  return (
    <MainLayout>
      <Notification />
    </MainLayout>
  );
};
export async function getStaticProps({ locale }) {
  return {
    props: {},
  };
}
export default index;
