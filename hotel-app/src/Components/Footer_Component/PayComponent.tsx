interface PayComponentProps {
  imgUrl: string;
}

const PayComponent = ({ imgUrl }: PayComponentProps) => {
  return (
    <div
      style={{
        backgroundColor: "rgba(255,255,255,1.00)",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: "6px",
        display: "flex",
        width: "100%",
        height: "48px",
        marginBottom: "10px",
      }}
    >
      <img src={imgUrl} alt="đối tác" />
    </div>
  );
};

export default PayComponent;
