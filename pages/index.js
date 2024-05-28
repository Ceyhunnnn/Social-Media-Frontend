import Authentication from "@/components/auth";

const index = () => {
  return <Authentication />;
};

export async function getStaticProps({ locale }) {
  return {
    props: {},
  };
}

export default index;
