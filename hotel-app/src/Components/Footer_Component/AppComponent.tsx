interface DownloadLinkProps {
  href: string;
  imgUrl: string;
}

const DownloadLink = ({ href, imgUrl }: DownloadLinkProps) => {
  return (
    <a href={href} target={"_blank"} rel="noreferrer">
      <img src={imgUrl} alt="" />
    </a>
  );
};

export default DownloadLink;
