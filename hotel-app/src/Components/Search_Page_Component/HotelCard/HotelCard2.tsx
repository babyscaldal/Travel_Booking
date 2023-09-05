import Card from "react-bootstrap/Card";
import hotel from "../../assets/travel-themes.jpg";

function HotelCard2() {
  return (
    <Card
      style={{
        border: "1px solid gray",
        width: "18rem",
        borderRadius: "5px",
        cursor: "pointer",
      }}
    >
      <Card.Img
        variant="top"
        src={hotel}
        width={"288px"}
        height={"180px"}
        style={{
          borderTopLeftRadius: "5px",
          borderTopRightRadius: "5px",
        }}
      />
      <Card.Body
        style={{
          padding: "10px",
          textAlign: "justify",
        }}
      >
        <Card.Title style={{ fontSize: "18px", fontWeight: "bold" }}>
          Card Title
        </Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        {/* <Card.Text>/Card.Text> */}
        <Card.Text>
          Price:{" "}
          <span
            style={{
              color: "red",
              fontWeight: "bold",
            }}
          >
            $50
          </span>
          /day
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default HotelCard2;
