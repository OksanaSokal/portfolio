import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { S } from "./Slider_Styles";
import { FlexWrapper } from "../FlexWrapper";
import { Icon } from "../icon/Icon";
import avatar from "../../assets/images/avatar.webp";
import avatart from "../../assets/images/avatar2.jpg";
import "./../../styles/slider.css";

type SlidePropsType = {
  avatar: string;
  name: string;
  text: string;
};

const Slide = (props: SlidePropsType) => {
  return (
    <FlexWrapper direction={"column"}>
      <S.Image src={props.avatar} />
      <S.Name>{props.name}</S.Name>
      <span>Happy Client</span>
      <S.Text>{props.text}</S.Text>
      <S.StarWrapper>
        <Icon
          iconId={"star"}
          width={"26px"}
          height={"26px"}
          viewBox={"0 0 26 26"}
        />
        <Icon
          iconId={"star"}
          width={"26px"}
          height={"26px"}
          viewBox={"0 0 26 26"}
        />
        <Icon
          iconId={"star"}
          width={"26px"}
          height={"26px"}
          viewBox={"0 0 26 26"}
        />
        <Icon
          iconId={"star"}
          width={"26px"}
          height={"26px"}
          viewBox={"0 0 26 26"}
        />
        <Icon
          iconId={"star"}
          width={"26px"}
          height={"26px"}
          viewBox={"0 0 26 26"}
        />
      </S.StarWrapper>
    </FlexWrapper>
  );
};

const items = [
  <Slide
    avatar={avatar}
    name={"Adams Ademola"}
    text={`“Everyone working in the office is very knowledgeable about all types of
dental work and options for your individual needs.”`}
  />,
  <Slide
    avatar={avatart}
    name={"Mary Marinya"}
    text={`“Everyone working in the office is very knowledgeable about all types of
dental work and options for your individual needs.”`}
  />,
  <Slide
    avatar={avatart}
    name={"Mary Marinya"}
    text={`“Everyone working in the office is very knowledgeable about all types of
dental work and options for your individual needs.”`}
  />,
];

export const Slider = () => (
  <S.Slider>
    <S.Slide>
      <FlexWrapper direction={"column"}>
        <S.IconWrap>
          <Icon
            iconId={"quote"}
            width={"110px"}
            height={"86px"}
            viewBox={"0 0 110 86"}
          />
        </S.IconWrap>
        <AliceCarousel mouseTracking items={items} />
      </FlexWrapper>
    </S.Slide>
  </S.Slider>
);

// import { Icon } from "../icon/Icon";
// import avatar from "../../assets/images/avatar.webp"
// import { FlexWrapper } from "../FlexWrapper";
// import { S } from '../../components/slider/Slider_Styles'
// import React from "react";

// export const Slider: React.FC = () => {
//     return (
//         <S.Slider>
//             <S.Slide>
//                 <FlexWrapper direction={'column'}>
//                     <S.IconWrap>
//                         <Icon iconId={'quote'} width={'110px'} height={'86px'} viewBox={'0 0 110 86'}/>
//                     </S.IconWrap>
//                     <S.Image src={avatar} />
//                     <S.Name>Adams Ademola</S.Name>
//                     <span>Happy Client</span>
//                     <S.Text>“Everyone working in the office is very knowledgeable about all types of dental work and options for your individual needs.”</S.Text>
//                     <S.StarWrapper>
//                         <Icon iconId={'star'} width={'26px'} height={'26px'} viewBox={'0 0 26 26'} />
//                         <Icon iconId= {'star'} width={'26px'} height={'26px'} viewBox={'0 0 26 26'}/>
//                         <Icon iconId= {'star'} width={'26px'} height={'26px'} viewBox={'0 0 26 26'}/>
//                         <Icon iconId= {'star'} width={'26px'} height={'26px'} viewBox={'0 0 26 26'}/>
//                         <Icon iconId= {'star'} width={'26px'} height={'26px'} viewBox={'0 0 26 26'}/>
//                     </S.StarWrapper>
//                 </FlexWrapper>
//             </S.Slide>
//             <S.Pagination>
//                     <span className={'active'}></span>
//                     <span></span>
//                     <span></span>
//                 </S.Pagination>
//         </S.Slider>
//     );
// };
