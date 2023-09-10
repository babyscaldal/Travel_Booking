import { Box, Container, Grid, Stack } from "@mui/material";
import PayComponent from "../PayComponent";
import ContactComponent from "../ContactComponent";
import DownloadLink from "../AppComponent";
import YouTubeIcon from "@mui/icons-material/YouTube";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";

export const arrContact = [
  "Cách đặt chỗ",
  "Liên hệ chúng tôi",
  "Trợ giúp",
  "Tuyển dụng",
  "Về chúng tôi",
];
export const arrProduct = [
  "Vé máy bay",
  "Khách sạn",
  "Combo tiết kiệm",
  "Xperience",
  "Car Rental",
  "Biệt thự",
  "Căn hộ",
  "Đưa đón sân bay",
];
export const arrOther = [
  "Travel Dream Affiliate",
  "Travel Dream Blog",
  "Chính sách quyền riêng tư",
  "Điều khoản & Điều kiện",
  "Quy chế hoạt động",
  "Đăng ký nơi nghỉ của bạn",
  "Đăng ký doanh nghiệp hoạt động du lịch của bạn",
  "Khu vực báo chí",
];

export const arrImgs = [
  "https://ik.imagekit.io/tvlk/image/imageResource/2019/05/20/1558339548088-c536c896b175cb38f99a31f5dd2a989a.png?tr=h-19,q-75,w-51",
  "https://ik.imagekit.io/tvlk/image/imageResource/2019/05/20/1558339578215-99466ea3d377ada2939bf2117df21b11.png?tr=h-19,q-75,w-51",
  "https://ik.imagekit.io/tvlk/image/imageResource/2022/07/08/1657286372391-45dab552eed9b787bfc93547e26c6d87.png?tr=h-19,q-75,w-51",
  "https://ik.imagekit.io/tvlk/image/imageResource/2019/05/20/1558339553631-9cebb9f6a7a3b0e427b7a2d9da2fd8c0.png?tr=h-19,q-75,w-51",
];

export const arrImgs_2 = [
  "https://ik.imagekit.io/tvlk/image/imageResource/2019/05/20/1558339557703-5697f31b3e12a942eabc0f613bff8fb9.png?tr=h-19,q-75,w-51",
  "https://ik.imagekit.io/tvlk/image/imageResource/2019/05/20/1558339567663-c7c5e25757f0d69375aa6de6ad57958f.png?tr=h-19,q-75,w-51",
  "https://ik.imagekit.io/tvlk/image/imageResource/2019/05/20/1558339666745-2be0cc98504595cda91d0a2a5342a20b.png?tr=h-19,q-75,w-51",
  "https://ik.imagekit.io/tvlk/image/imageResource/2023/08/15/1692094839134-e4b4b67ef82e8c19bb19e63d27b0f3ad.png?tr=h-19,q-75,w-51",
];

export const arrImgs_3 = [
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
        paddingBottom: "60px",
        paddingTop: "60px",
      }}
    >
      <Container maxWidth="lg">
        <Grid
          container
          spacing={4}
          sx={{
            justifyContent: { xs: "center", md: "start" },
          }}
        >
          <Grid
            item
            xs={12}
            md={4}
            sx={{
              textAlign: {
                xs: "center",
                md: "left",
              },
            }}
          >
            <Grid
              container
              justifyContent={"center"}
              gap={"15px"}
              alignItems="center"
            >
              <Grid
                item
                xs={12}
                sx={{
                  textAlign: {
                    xs: "center",
                    md: "left",
                  },
                  marginBottom: "24px",
                }}
              >
                <Box width={"100%"}>
                  <img
                    src="../../../../public/Untitled-removebg-preview.png"
                    alt="logo"
                    style={{
                      objectFit: "contain",
                      width: "100%",
                      height: "100%",
                    }}
                  />
                </Box>
              </Grid>
              <Grid
                item
                xs={12}
                sx={{
                  textAlign: {
                    xs: "center",
                    md: "left",
                  },
                  justifyContent: "center",
                  marginBottom: "10px",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    height: "38px",
                    gap: "16px",
                  }}
                >
                  <Box
                    sx={{
                      height: "35px",
                    }}
                  >
                    <img
                      src="https://ik.imagekit.io/tvlk/image/imageResource/2017/12/13/1513150321127-5096be77d2a19401b476853e54ba2cc6.svg?tr=h-35,q-75,w-54 1x, https://ik.imagekit.io/tvlk/image/imageResource/2017/12/13/1513150321127-5096be77d2a19401b476853e54ba2cc6.svg?tr=dpr-2,h-35,q-75,w-54 2x, https://ik.imagekit.io/tvlk/image/imageResource/2017/12/13/1513150321127-5096be77d2a19401b476853e54ba2cc6.svg?tr=dpr-3,h-35,q-75,w-54 3x"
                      width="100%"
                      height="100%"
                      style={{ objectFit: "cover" }}
                    />
                  </Box>
                  <Box
                    sx={{
                      height: "35px",
                    }}
                  >
                    <img
                      src="https://ik.imagekit.io/tvlk/image/imageResource/2021/05/10/1620638808154-e6c02ed786235ab59252628a9aa9b715.png?tr=h-35,q-75,w-44"
                      width="100%"
                      height="100%"
                      style={{ objectFit: "cover" }}
                    />
                  </Box>
                  <Box
                    sx={{
                      height: "38px",
                    }}
                  >
                    <img
                      src="https://ik.imagekit.io/tvlk/image/imageResource/2019/09/23/1569229181629-eeb038ad844874f951326d0a8534bf48.png?tr=q-75,w-100"
                      width="100%"
                      height="100%"
                      style={{ objectFit: "cover" }}
                    />
                  </Box>
                </Box>
              </Grid>
              <Grid
                item
                xs={12}
                sx={{
                  textAlign: {
                    xs: "center",
                    md: "left",
                  },
                  marginBottom: "15px",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    padding: "16px",
                    border: "2px solid rgba(255,255,255,1.00)",
                    borderRadius: "10px",
                    justifyContent: "center",
                    alignItems: "center",
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
                  <h4
                    style={{
                      color: "rgba(255,255,255,1.00)",
                      lineHeight: "20px",
                      fontWeight: "bold",
                      fontSize: "20px",
                      margin: "0px",
                    }}
                  >
                    Hợp tác với Travel Dream
                  </h4>
                </div>
              </Grid>
              <Grid
                item
                xs={12}
                md={12}
                sx={{
                  textAlign: {
                    xs: "center",
                  },
                }}
              >
                <h4
                  style={{
                    color: "rgba(255,255,255,1.00)",
                    lineHeight: "20px",
                    fontWeight: "bold",
                    fontSize: "20px",
                    padding: "0",
                  }}
                >
                  Đối tác thanh toán
                </h4>
              </Grid>

              {arrImgs.map((url, index) => (
                <Grid key={index} item xs={3}>
                  <PayComponent imgUrl={url} />
                </Grid>
              ))}
              {arrImgs_2.map((url, index) => (
                <Grid key={index} item xs={3}>
                  <PayComponent imgUrl={url} />
                </Grid>
              ))}
              {arrImgs_3.map((url, index) => (
                <Grid key={index} item xs={3}>
                  <PayComponent imgUrl={url} />
                </Grid>
              ))}
            </Grid>
          </Grid>
          <Grid
            item
            xs={6}
            md={8}
            sx={{
              textAlign: {
                xs: "center",
                md: "left",
              },
              marginBottom: "60px",
            }}
          >
            <Grid container spacing={2}>
              <Grid
                item
                xs={12}
                md={4}
                sx={{
                  textAlign: {
                    xs: "center",
                    md: "left",
                  },
                }}
              >
                <div>
                  <ContactComponent
                    title="Về Travel Dream"
                    arrContent={arrContact}
                  />
                </div>
              </Grid>
              <Grid
                textAlign={"center"}
                item
                xs={12}
                md={4}
                sx={{
                  paddingLeft: "12px",
                  paddingRight: "12px",
                  textAlign: {
                    xs: "center",
                    md: "left",
                  },
                }}
              >
                <ContactComponent title="Sản phẩm" arrContent={arrProduct} />
              </Grid>
              <Grid
                textAlign={"center"}
                item
                xs={12}
                md={4}
                sx={{
                  paddingLeft: "12px",
                  paddingRight: "12px",
                  textAlign: {
                    xs: "center",
                    md: "left",
                  },
                }}
              >
                <ContactComponent title="Khác" arrContent={arrOther} />
              </Grid>
              <Grid item xs={12} md={4}>
                <Box>
                  <h4
                    style={{
                      color: "rgba(255,255,255,1.00)",
                      marginBottom: "12px",
                      marginTop: "0px",
                    }}
                  >
                    Theo dõi chúng tôi
                  </h4>
                  <Grid
                    container
                    sx={{
                      display: {
                        xs: "flex-end",
                        md: "start",
                      },
                    }}
                  >
                    <Grid
                      item
                      xs={6}
                      md={12}
                      sx={{
                        textAlign: {
                          xs: "end",
                          md: "start",
                        },
                      }}
                    >
                      <div>
                        <a
                          href=" "
                          style={{
                            display: "inline-flex",
                            opacity: "0.65",
                            color: "rgba(205,208,209,1.00)",
                            textDecoration: "none",
                            lineHeight: "20px",
                            fontWeight: "bold",
                            fontSize: "14px",
                          }}
                        >
                          <FacebookIcon
                            sx={{ width: "36px", height: "24px" }}
                          />
                          Facebook
                        </a>
                      </div>
                    </Grid>
                    <Grid
                      item
                      xs={6}
                      md={12}
                      sx={{
                        textAlign: {
                          xs: "start",
                          md: "start",
                        },
                      }}
                    >
                      <div>
                        <a
                          href=" "
                          style={{
                            display: "inline-flex",
                            opacity: "0.65",
                            color: "rgba(205,208,209,1.00)",
                            textDecoration: "none",
                            lineHeight: "20px",
                            fontWeight: "bold",
                            fontSize: "14px",
                          }}
                        >
                          <TwitterIcon sx={{ width: "36px", height: "24px" }} />
                          Twitter
                        </a>
                      </div>
                    </Grid>
                    <Grid
                      item
                      xs={6}
                      md={12}
                      sx={{
                        textAlign: {
                          xs: "end",
                          md: "start",
                        },
                      }}
                    >
                      <div>
                        <a
                          href=" "
                          style={{
                            display: "inline-flex",
                            opacity: "0.65",
                            color: "rgba(205,208,209,1.00)",
                            textDecoration: "none",
                            lineHeight: "20px",
                            fontWeight: "bold",
                            fontSize: "14px",
                          }}
                        >
                          <YouTubeIcon sx={{ width: "36px", height: "24px" }} />
                          Youtube
                        </a>
                      </div>
                    </Grid>
                    <Grid
                      item
                      xs={6}
                      md={12}
                      sx={{
                        textAlign: {
                          xs: "start",
                        },
                      }}
                    >
                      <div>
                        <a
                          href=" "
                          style={{
                            display: "inline-flex",
                            opacity: "0.65",
                            color: "rgba(205,208,209,1.00)",
                            textDecoration: "none",
                            lineHeight: "20px",
                            fontWeight: "bold",
                            fontSize: "14px",
                          }}
                        >
                          <InstagramIcon
                            sx={{ width: "36px", height: "24px" }}
                          />
                          Instagram
                        </a>
                      </div>
                    </Grid>
                  </Grid>
                </Box>
              </Grid>
              <Grid item xs={12} md={4}></Grid>
              <Grid item xs={12} md={4}>
                <Box>
                  <div>
                    <h4
                      style={{
                        color: "rgba(255,255,255,1.00)",
                      }}
                    >
                      Tải ứng dụng
                    </h4>
                    <Stack spacing={1}>
                      <DownloadLink
                        href={"https://app.adjust.com/ie88tj"}
                        imgUrl={
                          "https://ik.imagekit.io/tvlk/image/imageResource/2021/05/21/1621579427565-4b746b647c0424ee0409b835fd35b175.svg?tr=q-75,w-123"
                        }
                      />
                      <DownloadLink
                        href={"https://app.adjust.com/hc9if0"}
                        imgUrl={
                          "https://ik.imagekit.io/tvlk/image/imageResource/2021/05/21/1621579433637-f60b505ed1f8f78c11172d55430a1819.svg?tr=q-75,w-123"
                        }
                      />
                    </Stack>
                  </div>
                </Box>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} textAlign={"center"}>
            <Box
              sx={{
                textAlign: { xs: "center", md: "center" },
                opacity: "0.65",
                color: "rgba(205,208,209,1.00)",
                textDecoration: "none",
                margin: "0px 24px 12px 24px",
                lineHeight: "16px",
                fontWeight: "bold",
                fontSize: "16px",
              }}
            >
              Công ty TNHH 4 Thành Viên - Travel Dream Việt Nam. Tòa nhà Hải
              Sơn, Phường Trần Hải, Quận Văn Đỉnh, TP. Văn Mạnh
            </Box>
            <Box
              style={{
                color: "rgba(255,255,255,1.00)",
                textAlign: "center",
                lineHeight: "16px",
                fontWeight: "bold",
                fontSize: "16px",
              }}
            >
              Design by © 2023 Travel Dreaming Team
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default MockComponent;
