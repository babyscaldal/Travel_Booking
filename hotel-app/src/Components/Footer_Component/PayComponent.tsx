interface PayComponentProps {
  imgUrl: string;
}

const PayComponent = ({ imgUrl }: PayComponentProps) => {
  return (
    <div
      style={{
        width: "64px",
        height: "48px",
        minHeight: "0px",
        minWidth: "0px",
        backgroundColor: "rgba(255,255,255,1.00)",
        marginBottom: "8px",
        marginRight: "8px",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: "6px",
        display: "flex",
        flexBasis: "auto",
        flexDirection: "column",
        flexShrink: "0",
        padding: "0px",
        position: "relative",
      }}
    >
      <img
        src={imgUrl}
        alt=""
        style={{
          objectFit: "contain",
          objectPosition: "center",
          width: "60%",
          // height: "50%",
        }}
      />
    </div>
  );
};

export default PayComponent;
