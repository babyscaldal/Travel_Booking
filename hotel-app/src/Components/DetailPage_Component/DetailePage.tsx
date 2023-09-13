import { IHotel } from "../../types/hotelType";
import { Container, Grid } from "@mui/material";
import { capitalizeFirstLetter } from "../../Ultiliti/CapitalizeFirstLetter";
import IntroDialog from "./IntroDialog";
import BedRoom from "./BedRoom";
import SpecialFeatures from "./SpecialFeatures";
import SpecialFeaturesDialog from "./SpecialFeaturesDialog";
import detailMap from "../../../public/detail_image/detail-map.png";
import PlaceRules from "./PlaceRules";
import { HotelInfoPage } from "./HotelInfoPage";
import { useSelector } from "react-redux";
import { RootState } from "../../stores.ts/stores";

const hotel: IHotel = {
  provinceId: 1,
  location: "Hà Nội",
  type: "hotel",
  id: 1,
  name: "InterContinental Hanoi Westlake",
  address: "1A Nghi Tam, Tay Ho, Hanoi",
  rating: 4.3,
  price: 150,
  stars: 3,
  amenities: ["Swimming pool", "Spa", "Fitness center"],
  description:
    "InterContinental Hanoi Westlake is a luxurious 5-star hotel located on the peaceful waters of West Lake. It offers stunning lake views and top-notch amenities, including a swimming pool, spa, and fitness center.",
  image: [
    "https://a0.muscache.com/im/pictures/13ee20e4-8255-4e9b-9252-cf5146fc4599.jpg?im_w=960",
    "https://a0.muscache.com/im/pictures/29a0069a-28d9-4fa9-914c-0cffa6bca754.jpg?im_w=720",
    "https://a0.muscache.com/im/pictures/6c49f73e-284c-4e69-8012-9870e122f086.jpg?im_w=720",
    "https://a0.muscache.com/im/pictures/b2298cc1-2df3-4d26-ac9c-15391b17e5a1.jpg?im_w=720",
    "https://a0.muscache.com/im/pictures/0a6ed1ce-83ba-4ab2-bf94-70e911373ab8.jpg?im_w=720",
  ],
  numberOfRoom: 33,
};
export default function DetailPage() {
  const landlords: string[] = [
    " Văn Đỉnh",
    " Hải Sơn",
    "Trần Hải",
    " Trần Mạnh",
  ];
  const character: string[] = [
    "thân thiện",
    "hiếu khách",
    "vui tính",
    "tâm lí",
    "may mắn",
  ];
  const styleComponent = {
    borderTop: "0.5px solid black",
    padding: "16px 0",
  };

  const landlordsName: string =
    landlords[Math.floor(Math.random() * landlords.length)];

  const selectedHotel = useSelector(
    (state: RootState) => state.sortHotel.selectedHotel
  );
  return (
    <>
      <Container maxWidth="lg" sx={{ paddingTop: 12 }}>
        {/* Title */}
        <h3 style={{ textAlign: "center", paddingBottom: 20 }}>
          {capitalizeFirstLetter(selectedHotel.type)} {selectedHotel.name} tại{" "}
          {selectedHotel.address}
        </h3>

        {/* Image layout */}
        <Grid
          container
          spacing={2}
          sx={{
            justifyContent: {
              xs: "center",
              md: "space-between",
              paddingBottom: "20px",
            },
          }}
        >
          <Grid item xs={10} sm={6}>
            <div style={{ height: "365px" }}>
              <img
                src={hotel.image[0]}
                alt="Travel Dreaming"
                width={"100%"}
                height={"100%"}
                style={{ objectFit: "cover" }}
              />
            </div>
          </Grid>
          <Grid item marginBottom={"15px"} xs={10} sm={6}>
            <Grid container spacing={2}>
              {hotel.image.map(
                (item, index) =>
                  index > 0 && (
                    <Grid
                      key={index}
                      item
                      xs={12}
                      sm={6}
                      // sx={{ marginBottom: "15px" }}
                    >
                      <div style={{ height: "175px" }}>
                        <img
                          src={item}
                          alt="Travel Dreaming"
                          width={"100%"}
                          height={"100%"}
                          style={{ objectFit: "cover" }}
                        />
                      </div>
                    </Grid>
                  )
              )}
            </Grid>
          </Grid>
        </Grid>

        <Grid container spacing={2} justifyContent={"space-between"}>
          {/* left */}
          <Grid item xs={7}>
            {/* landlords */}
            <div>
              <h5>Chủ {selectedHotel.type}</h5>
              <p>
                Anh chủ {selectedHotel.type}{" "}
                {character[Math.floor(Math.random() * character.length)]} -{" "}
                <span style={{ fontWeight: "bold" }}>{landlordsName}</span>
              </p>
            </div>

            {/* Intro */}
            <div style={{ ...styleComponent }}>
              <p>
                Hãy tưởng tượng thức dậy với âm thanh của sóng vỗ vào bờ, ngâm
                mình trong hồ bơi riêng của bạn và được đi ngắm nhìn một trong
                số bãi biển đẹp nhất thế giới. Đây chính xác là những gì bạn có
                thể trải nghiệm tại đây, một khu nghỉ dưỡng {hotel.stars} nằm
                ngay trung tâm Việt Nam...
              </p>
              <IntroDialog />
            </div>

            {/* Sleeping place */}
            <div style={{ ...styleComponent }}>
              <h5>Nơi bạn sẽ ngủ</h5>
              <p>
                Chúng tôi cung cấp cho bạn 1 vài kiểu phòng ngủ, nếu bạn có yêu
                cầu hãy liên hệ với chúng tôi qua <a href="tel:113">hotline</a>{" "}
                hoặc{" "}
                <a href="mailto:anhdinh9596@gmail.com?subject=Special requests on reservations">
                  email
                </a>
              </p>
              <BedRoom />
            </div>

            {/* Features */}
            <div style={{ ...styleComponent }}>
              <SpecialFeatures />
              <SpecialFeaturesDialog />
            </div>

            {/* Place map */}
            <div style={{ ...styleComponent }}>
              <h5>Nơi bạn sẽ đến</h5>
              <div>
                <img
                  src={detailMap}
                  alt=""
                  width={"100%"}
                  height={"100%"}
                  style={{ objectFit: "cover" }}
                />
                <p>{selectedHotel.address}</p>
              </div>
            </div>

            {/* place rule */}
            <div style={{ ...styleComponent }}>
              <PlaceRules />
            </div>
          </Grid>
          {/* right */}
          <Grid item xs={4.5}>
            <HotelInfoPage />
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
