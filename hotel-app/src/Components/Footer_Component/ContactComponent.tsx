interface ContactProps {
  title: string;
  arrContent: string[];
}

const ContactComponent = ({ title, arrContent }: ContactProps) => {
  return (
    <>
      <div
        style={{
          marginBottom: "32px",
        }}
      >
        <div>
          <h4
            style={{
              color: "rgba(255,255,255,1.00)",
              marginBottom: "12px",
              marginTop: "0px",
            }}
          >
            {title}
          </h4>
        </div>
        <ul
          style={{
            listStyle: "none",
            backgroundColor: "rgba(0,0,0,0.00)",
            color: "inherit",
            font: "inherit",
            textAlign: "inherit",
            textDecoration: "none",
            padding: "0px",
            margin: "0px",
          }}
        >
          {arrContent.map((content, index) => (
            <li
              key={index}
              style={{
                marginBottom: "12px",
              }}
            >
              <a
                href=" "
                style={{
                  display: "inline-flex",
                  opacity: "0.65",
                  color: "rgba(205,208,209,1.00)",
                  textDecoration: "none",
                  lineHeight: "20px",
                  fontWeight: "500",
                  fontSize: "14px",
                  fontFamily:
                    "Godwit,MuseoSans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol",
                }}
              >
                {content}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default ContactComponent;
