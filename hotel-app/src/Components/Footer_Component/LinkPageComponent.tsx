interface LinkPageProps {
  href: string;
  imgUrl: string;
}

const LinkPage = ({ href, imgUrl }: LinkPageProps) => {
  return (
    <a href={href} target={"_blank"} rel="noreferrer">
      <img src={imgUrl} alt="" />
    </a>
  );
};

export default LinkPage;
