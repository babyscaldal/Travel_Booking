interface IDownloadLinkProps {
  href: string;
  imgUrl: string;
}

const DownloadLink = ({ href, imgUrl }: IDownloadLinkProps) => {
  return (
    <a href={href} target={"_blank"}>
      <img src={imgUrl} alt="" />
    </a>
  );
};

export default DownloadLink;
