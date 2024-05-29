import Message from "@/components/message/Message";
import MainLayout from "@/layouts/MainLayout";

const index = () => {
  return (
    <MainLayout>
      <Message />
    </MainLayout>
  );
};
export async function getStaticProps({ locale }) {
  return {
    props: {},
  };
}
export default index;
