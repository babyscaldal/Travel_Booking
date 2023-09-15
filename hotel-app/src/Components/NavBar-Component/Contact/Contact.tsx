import { Container } from "@mui/system";
import introImg from "../../../../public/contact_image/intro img.png";
import PhoneInTalkIcon from "@mui/icons-material/PhoneInTalk";
import EmailIcon from "@mui/icons-material/Email";
import { Grid } from "@mui/material";

export default function Contact() {
  return (
    <Container>
      <Container sx={{ margin: " auto" }}>
        <h1
          style={{
            paddingTop: "100px",
            marginBottom: "30px",
            textAlign: "center",
            textTransform: "uppercase",
          }}
        >
          Welcome to Travel Dream
        </h1>
        <div style={{ marginBottom: "20px" }}>
          <img
            src={introImg}
            alt="Travel Dream"
            style={{
              objectFit: "cover",
              width: "100%",
              height: "100%",
            }}
          />
        </div>
        <div>
          <h2
            style={{
              textAlign: "center",
              textTransform: "uppercase",
              margin: "30px 0px 20px 0px",
            }}
          >
            Giới thiệu
          </h2>
          <p style={{ textAlign: "justify" }}>
            Travel Dream là một công ty hàng đầu trong lĩnh vực du lịch và trải
            nghiệm số tại khu vực Đông Nam Á. Chúng tôi tận tâm giúp bạn khám
            phá và trải nghiệm đa dạng các dịch vụ du lịch, giúp bạn tạo nên
            những ước mơ du lịch tuyệt vời. Travel Dream tự hào với danh mục sản
            phẩm đa dạng, bao gồm đặt vé máy bay, thuê xe, đặt phòng khách sạn
            và các hoạt động thú vị. Với Travel Dream, bạn có thể dễ dàng lựa
            chọn và đặt vé máy bay đến hàng trăm điểm đến trên khắp thế giới.
            Chúng tôi cung cấp các tùy chọn linh hoạt với nhiều hãng hàng không
            hàng đầu, đảm bảo bạn có một hành trình thoải mái và tiện lợi. Ngoài
            ra, chúng tôi cũng cung cấp dịch vụ thuê xe để bạn khám phá địa điểm
            du lịch một cách tự do và thuận tiện.
          </p>
          <p style={{ textAlign: "justify" }}>
            Travel Dream cũng là địa chỉ đáng tin cậy để bạn tìm kiếm và đặt
            phòng khách sạn. Chúng tôi liên kết với hàng ngàn khách sạn chất
            lượng trên khắp Đông Nam Á, đảm bảo rằng bạn sẽ tìm thấy nơi lưu trú
            lý tưởng cho chuyến đi của mình. Bất kể bạn tìm kiếm khu nghỉ dưỡng
            sang trọng, khách sạn tiết kiệm chi phí hoặc chỗ ở độc đáo, chúng
            tôi có đủ lựa chọn cho mọi phong cách và ngân sách.
          </p>
          <p style={{ textAlign: "justify" }}>
            Ngoài ra, Travel Dream còn cung cấp một loạt các hoạt động thú vị và
            trải nghiệm độc đáo. Bạn có thể tham gia các tour du lịch đặc sắc,
            tham quan các danh lam thắng cảnh nổi tiếng hoặc thưởng thức các
            dịch vụ spa và chăm sóc sức khỏe. Chúng tôi cam kết đem đến cho bạn
            những trải nghiệm đáng nhớ và giúp bạn tạo dựng những kỷ niệm đáng
            chờ đợi.
          </p>
          <p style={{ textAlign: "justify" }}>
            Travel Dream luôn đặt lợi ích của khách hàng lên hàng đầu. Với dịch
            vụ chăm sóc khách hàng 24/7, chúng tôi luôn sẵn lòng hỗ trợ và giải
            đáp mọi thắc mắc của bạn. Đồng thời, chúng tôi cung cấp hơn 30
            phương thức thanh toán địa phương khác nhau để đáp ứng nhu cầu của
            mọi khách hàng.Với uy tín và kinh nghiệm lâu năm, Travel Dream đã
            trở thành một đối tác đáng tin cậy cho những ai yêu thích du lịch và
            muốn khám phá thế giới. Hãy để Travel Dream đồng hành cùng bạn trên
            con đường chinh phục thiên nhiên kỳ vỹ.
          </p>
        </div>
      </Container>
      <div>
        <Container
          sx={{
            padding: "20px",
            marginTop: "50px",
          }}
        >
          <div style={{ textAlign: "center" }}>
            <h4 style={{ fontWeight: "bold" }}> Liên hệ chúng tôi </h4>
            <p>
              Hãy liên hệ với chúng tôi, đội ngũ chuyên gia của chúng tôi luôn
              sẵn sàng trợ giúp.
            </p>
          </div>
          <Grid
            container
            rowSpacing={1}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          >
            <Grid item xs={6}>
              <div style={{ marginBottom: "20px" }}>
                <h5 style={{ fontWeight: "bold" }}>Đối tác</h5>
                <div>
                  <PhoneInTalkIcon /> <span>1900 123 456</span>
                </div>
                <div>
                  <EmailIcon /> <span>partnership@traveldream.com</span>
                </div>
              </div>
            </Grid>
            <Grid item xs={6}>
              <div style={{ marginBottom: "20px" }}>
                <h5 style={{ fontWeight: "bold" }}>Quảng cáo</h5>
                <div>
                  <PhoneInTalkIcon /> <span>1900 456 789</span>
                </div>
                <div>
                  <EmailIcon /> <span>advertisement@traveldream.com</span>
                </div>
              </div>
            </Grid>
            <Grid item xs={6}>
              <div style={{ marginBottom: "20px" }}>
                <h5 style={{ fontWeight: "bold" }}>Ấn phẩm & Truyền thông</h5>
                <div>
                  <PhoneInTalkIcon /> <span>1900 987 654</span>
                </div>
                <div>
                  <EmailIcon /> <span>digitalmarketing@traveldream.com</span>
                </div>
              </div>
            </Grid>
            <Grid item xs={6}>
              <div style={{ marginBottom: "20px" }}>
                <h5 style={{ fontWeight: "bold" }}>Chăm sóc khách hàng</h5>
                <div>
                  <PhoneInTalkIcon /> <span>1900 654 321</span>
                </div>
                <div>
                  <EmailIcon /> <span>customercare@traveldream.com</span>
                </div>
              </div>
            </Grid>
          </Grid>
        </Container>
      </div>
    </Container>
  );
}
