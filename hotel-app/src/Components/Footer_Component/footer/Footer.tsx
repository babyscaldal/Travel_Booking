import { Box, Container, Grid, Stack } from "@mui/material";
import myImgs from "./imgs/travel-dream-logo - ver2.png";
import PayComponent from "../PayComponent";
import ContactComponent from "../ContactComponent";
import DownloadLink from "../AppComponent";

const arrContact = [
  "Cách đặt chỗ",
  "Liên hệ chúng tôi",
  "Trợ giúp",
  "Tuyển dụng",
  "Về chúng tôi",
];
const arrProduct = [
  "Vé máy bay",
  "Khách sạn",
  "Combo tiết kiệm",
  "Xperience",
  "Car Rental",
  "Biệt thự",
  "Căn hộ",
  "Đưa đón sân bay",
];
const arrOther = [
  "Travel Dream Affiliate",
  "Travel Dream Blog",
  "Chính sách quyền riêng tư",
  "Điều khoản & Điều kiện",
  "Quy chế hoạt động",
  "Đăng ký nơi nghỉ của bạn",
  "Đăng ký doanh nghiệp hoạt động du lịch của bạn",
  "Khu vực báo chí",
];

const arrImgs = [
  "https://ik.imagekit.io/tvlk/image/imageResource/2019/05/20/1558339548088-c536c896b175cb38f99a31f5dd2a989a.png?tr=h-19,q-75,w-51",
  "https://ik.imagekit.io/tvlk/image/imageResource/2019/05/20/1558339578215-99466ea3d377ada2939bf2117df21b11.png?tr=h-19,q-75,w-51",
  "https://ik.imagekit.io/tvlk/image/imageResource/2022/07/08/1657286372391-45dab552eed9b787bfc93547e26c6d87.png?tr=h-19,q-75,w-51",
  "https://ik.imagekit.io/tvlk/image/imageResource/2019/05/20/1558339553631-9cebb9f6a7a3b0e427b7a2d9da2fd8c0.png?tr=h-19,q-75,w-51",
];

const arrImgs_2 = [
  "https://ik.imagekit.io/tvlk/image/imageResource/2019/05/20/1558339557703-5697f31b3e12a942eabc0f613bff8fb9.png?tr=h-19,q-75,w-51",
  "https://ik.imagekit.io/tvlk/image/imageResource/2019/05/20/1558339567663-c7c5e25757f0d69375aa6de6ad57958f.png?tr=h-19,q-75,w-51",
  "https://ik.imagekit.io/tvlk/image/imageResource/2019/05/20/1558339666745-2be0cc98504595cda91d0a2a5342a20b.png?tr=h-19,q-75,w-51",
  "https://ik.imagekit.io/tvlk/image/imageResource/2023/08/15/1692094839134-e4b4b67ef82e8c19bb19e63d27b0f3ad.png?tr=h-19,q-75,w-51",
];

const arrImgs_3 = [
  "https://ik.imagekit.io/tvlk/image/imageResource/2021/04/07/1617781273499-667dfd2c1d23335dac1689bdd1b3e187.png?tr=h-19,q-75,w-51",
  "https://ik.imagekit.io/tvlk/image/imageResource/2021/04/07/1617781296885-a206730836975c02b8ce75a732f00caf.png?tr=h-19,q-75,w-51",
  "https://ik.imagekit.io/tvlk/image/imageResource/2021/04/07/1617781283882-14484fab2f2d958a1b2917dd450d31ac.png?tr=h-19,q-75,w-51",
  "https://ik.imagekit.io/tvlk/image/imageResource/2019/05/20/1558339648624-307f4a5f54e873a6c9f272673f193062.png?tr=h-19,q-75,w-51",
];

const MockComponent = () => {
  return (
    <Box
      sx={{
        backgroundColor: "rgba(27,27,27,1.00)",
        paddingBottom: "80px",
        paddingTop: "56px",
      }}
    >
      <Container maxWidth="lg">
        <Grid
          container
          spacing={2}
          style={{
            marginLeft: "auto",
            marginRight: "auto",
            marginBottom: "100px",
          }}
        >
          <Grid
            item
            xs={4}
            style={{
              paddingLeft: "12px",
              paddingRight: "12px",
            }}
          >
            <Grid container>
              <Grid item xs={12} sx={{ backgroundColor: "black" }}>
                <img
                  src="../../../../public/logo-white.png"
                  alt=""
                  style={{
                    objectFit: "fill",
                    objectPosition: "50% 50%",
                    width: "80%",
                    height: "80%",
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <img
                  src="https://ik.imagekit.io/tvlk/image/imageResource/2017/12/13/1513150321127-5096be77d2a19401b476853e54ba2cc6.svg?tr=h-35,q-75,w-54 1x, https://ik.imagekit.io/tvlk/image/imageResource/2017/12/13/1513150321127-5096be77d2a19401b476853e54ba2cc6.svg?tr=dpr-2,h-35,q-75,w-54 2x, https://ik.imagekit.io/tvlk/image/imageResource/2017/12/13/1513150321127-5096be77d2a19401b476853e54ba2cc6.svg?tr=dpr-3,h-35,q-75,w-54 3x"
                  alt=""
                  style={{
                    margin: "0px 16px 16px 0px",
                  }}
                />
                <img
                  src="https://ik.imagekit.io/tvlk/image/imageResource/2021/05/10/1620638808154-e6c02ed786235ab59252628a9aa9b715.png?tr=h-35,q-75,w-44"
                  alt=""
                  style={{
                    margin: "0px 16px 16px 0px",
                  }}
                />
                <img
                  src="https://ik.imagekit.io/tvlk/image/imageResource/2019/09/23/1569229181629-eeb038ad844874f951326d0a8534bf48.png?tr=q-75,w-100"
                  alt=""
                  style={{
                    margin: "0px 16px 16px 0px",
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <div
                  style={{
                    display: "inline-flex",
                    padding: "16px",
                    border: "2px solid rgba(255,255,255,1.00)",
                    borderRadius: "10px",
                  }}
                >
                  <img
                    src="https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/e/e9e503dec5eb7237230c5dcc89ee43f4.svg"
                    alt=""
                    style={{
                      marginRight: "16px",
                      width: "36px",
                      height: "36px",
                    }}
                  />
                  <div
                    style={{
                      color: "rgba(255,255,255,1.00)",
                      display: "grid",
                      placeItems: "center",
                      margin: "0px",
                      lineHeight: "24px",
                      fontWeight: "500",
                      fontSize: "16px",
                      fontFamily:
                        "Godwit,MuseoSans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol",
                    }}
                  >
                    Hợp tác với Travel Dream
                  </div>
                </div>
              </Grid>
            </Grid>
            <h4
              style={{
                color: "rgba(255,255,255,1.00)",
                margin: "16px 0px 8px 0px",
                lineHeight: "20px",
                fontWeight: "500",
                fontSize: "16px",
                fontFamily:
                  "Godwit,MuseoSans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol",
              }}
            >
              Đối tác thanh toán
            </h4>
            <Stack>
              <Box sx={{ display: "flex" }}>
                {arrImgs.map((url, index) => (
                  <PayComponent key={index} imgUrl={url} />
                ))}
              </Box>
              <Box sx={{ display: "flex" }}>
                {arrImgs_2.map((url, index) => (
                  <PayComponent key={index} imgUrl={url} />
                ))}
              </Box>
              <Box sx={{ display: "flex" }}>
                {arrImgs_3.map((url, index) => (
                  <PayComponent key={index} imgUrl={url} />
                ))}
              </Box>
            </Stack>
          </Grid>
          <Grid item xs={8}>
            <Grid container spacing={2}>
              <Grid
                item
                xs={4}
                style={{
                  paddingLeft: "12px",
                  paddingRight: "12px",
                }}
              >
                <div>
                  <ContactComponent
                    title="Về Travel Dream"
                    arrContent={arrContact}
                  />
                  <h4
                    style={{
                      color: "rgba(255,255,255,1.00)",
                      marginBottom: "12px",
                      marginTop: "0px",
                    }}
                  >
                    Theo dõi chúng tôi trên
                  </h4>
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
                    <li
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
                        <img
                          src="https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/6/6904cd2e74ef73120833cff12185a320.svg"
                          width="36"
                          height="24"
                          style={{
                            filter: "grayscale(1)",
                            marginRight: "12px",
                            objectFit: "fill",
                            objectPosition: "50% 50%",
                          }}
                        />
                        Facebook
                      </a>
                    </li>
                    <li
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
                        <img
                          src="https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/6/62a2fc240d7e00b05d0d6f6b4e785110.svg"
                          width="36"
                          height="24"
                          style={{
                            filter: "grayscale(1)",
                            marginRight: "12px",
                            objectFit: "fill",
                            objectPosition: "50% 50%",
                          }}
                        />
                        Instagram
                      </a>
                    </li>
                    <li
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
                        <img
                          src="https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/b/b593add66303beb2a0cae9e96963e68b.svg"
                          width="36"
                          height="24"
                          style={{
                            filter: "grayscale(1)",
                            marginRight: "12px",
                            objectFit: "fill",
                            objectPosition: "50% 50%",
                          }}
                        />
                        Youtube
                      </a>
                    </li>
                    <li
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
                        <img
                          src="https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/4/471f17c1510d49a98bec08a48b84c607.svg"
                          width="36"
                          height="24"
                          style={{
                            filter: "grayscale(1)",
                            marginRight: "12px",
                            objectFit: "fill",
                            objectPosition: "50% 50%",
                          }}
                        />
                        Tiktok
                      </a>
                    </li>
                  </ul>
                </div>
              </Grid>
              <Grid
                item
                xs={4}
                style={{
                  paddingLeft: "12px",
                  paddingRight: "12px",
                }}
              >
                <ContactComponent title="Sản phẩm" arrContent={arrProduct} />
              </Grid>
              <Grid
                item
                xs={4}
                style={{
                  paddingLeft: "12px",
                  paddingRight: "12px",
                }}
              >
                <div>
                  <ContactComponent title="Khác" arrContent={arrOther} />
                  <div>
                    <h4
                      style={{
                        marginBottom: "12px",
                        color: "rgba(255,255,255,1.00)",
                      }}
                    >
                      Tải ứng dụng
                    </h4>
                    <div>
                      <DownloadLink
                        href={"https://app.adjust.com/ie88tj"}
                        imgUrl={
                          "https://ik.imagekit.io/tvlk/image/imageResource/2021/05/21/1621579427565-4b746b647c0424ee0409b835fd35b175.svg?tr=q-75,w-123"
                        }
                      />
                      <br />
                      <DownloadLink
                        href={"https://app.adjust.com/hc9if0"}
                        imgUrl={
                          "https://ik.imagekit.io/tvlk/image/imageResource/2021/05/21/1621579433637-f60b505ed1f8f78c11172d55430a1819.svg?tr=q-75,w-123"
                        }
                      />
                    </div>
                  </div>
                </div>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <hr style={{ marginBottom: "24px", opacity: "0.15" }} />
        <div
          style={{
            textAlign: "center",
            opacity: "0.65",
            color: "rgba(205,208,209,1.00)",
            textDecoration: "none",
            margin: "0px 24px 12px 24px",
            lineHeight: "16px",
            fontWeight: "500",
            fontSize: "12px",
            fontFamily:
              "Godwit,MuseoSans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol",
          }}
        >
          Công ty TNHH 4 Thành Viên - Travel Dream Việt Nam. Tòa nhà Hải Sơn,
          Phường Trần Hải, Quận Văn Đỉnh, TP. Văn Mạnh
        </div>
        <div
          style={{
            color: "rgba(255,255,255,1.00)",
            textAlign: "center",
            lineHeight: "16px",
            fontWeight: "500",
            fontSize: "14px",
            fontFamily:
              "Godwit,MuseoSans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol",
          }}
        >
          Design by © 2023 Travel Dreaming Team
        </div>
      </Container>
    </Box>
  );
};

export default MockComponent;
