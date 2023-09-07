import Box from "@mui/joy/Box";
import PictureComponent from "./PictureComponent";
import { Stack } from "react-bootstrap";
import { Slider } from "@mui/joy";

const arrPictures = [
  "https://ik.imagekit.io/tvlk/mchitm/imageResource/template/304/vi_VN/2023/08/25/e75b05f4-bd30-3060-9e83-1a49acbfeed0?tr=w-256",
  "https://ik.imagekit.io/tvlk/mchitm/imageResource/template/304/vi_VN/2023/08/25/b648988c-2c66-302f-8898-035127da9201?tr=w-256",
  "https://ik.imagekit.io/tvlk/mchitm/imageResource/template/304/vi_VN/2023/08/25/296ff2d6-b6f1-3bb5-8966-6c95845ed061?tr=w-256",
  "https://ik.imagekit.io/tvlk/mchitm/imageResource/template/304/vi_VN/2023/08/25/3478502c-cd50-34b3-9eb8-cb9dea19db5a?tr=w-256",
  "https://ik.imagekit.io/tvlk/mchitm/imageResource/template/304/vi_VN/2023/08/25/1e97c709-2d40-3eb6-a387-c677e4c99ad4?tr=w-256",
  "https://ik.imagekit.io/tvlk/mchitm/imageResource/template/304/vi_VN/2023/08/25/1ef66987-a17b-3c70-915e-e95746e72a5a?tr=w-256",
  "https://ik.imagekit.io/tvlk/mchitm/imageResource/template/304/vi_VN/2023/08/25/6d07ea81-1ab2-34c6-b609-f4eb143a856e?tr=w-256",
  "https://ik.imagekit.io/tvlk/mchitm/imageResource/template/304/vi_VN/2023/08/25/5db9b026-ccf0-3f7d-bd49-762c3f0efc7d?tr=w-256",
  "https://ik.imagekit.io/tvlk/mchitm/imageResource/template/304/vi_VN/2023/08/25/be06e69e-a446-315b-b7a5-794bb2156935?tr=w-256",
  "https://ik.imagekit.io/tvlk/mchitm/imageResource/template/304/vi_VN/2023/08/25/23971605-bba5-3024-900f-05bd09cc549b?tr=w-256",
  "https://ik.imagekit.io/tvlk/mchitm/imageResource/template/304/vi_VN/2023/08/25/303debcb-1624-3639-bc4e-229d7551dad9?tr=w-256",
  "https://ik.imagekit.io/tvlk/mchitm/imageResource/template/304/vi_VN/2023/08/25/cf6ea694-c49a-3381-bed4-57cb38eeebf6?tr=w-256",
  "https://ik.imagekit.io/tvlk/mchitm/imageResource/template/304/vi_VN/2023/08/25/d498c9b9-9f08-32f1-b5c3-6bce6854ca6b?tr=w-256",
  "https://ik.imagekit.io/tvlk/mchitm/imageResource/template/304/vi_VN/2023/08/25/95e2905e-da63-3db4-a734-7095acd614b2?tr=w-256",
];
const MySlider: React.FC = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
  };
  return (
    <div>
      <Slider {...settings}>
        <div>
          <Stack>
            <Box component="ul" sx={{ display: "flex" }}>
              {arrPictures.map((url, index) => (
                <PictureComponent key={index} imgUrl={url} />
              ))}
            </Box>
          </Stack>
        </div>
      </Slider>
    </div>
  );
};
export default MySlider;
// export default function MediaCover() {
//   return (
//     <Stack>
//       <Box component="ul" sx={{ display: "flex" }}>
//         {arrPictures.map((url, index) => (
//           <PictureComponent key={index} imgUrl={url} />
//         ))}
//       </Box>
//     </Stack>
//   );
// }
