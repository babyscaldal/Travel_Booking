interface PictureComponentProps {
  imgUrl: string;
}

const PictureComponent = ({ imgUrl }: PictureComponentProps) => {
  return (
    <div>
      <img
        style={{
          borderRadius: "10px",
          margin: "10px",
          objectFit: "cover",
          objectPosition: "50% 50%",
        }}
        src={imgUrl}
        alt=""
      />
    </div>
  );
};

export default PictureComponent;
