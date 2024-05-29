import { FlexWrapper } from "../../../components/FlexWrapper";
import { Photo } from "../../../components/photo/Photo";
import photo from "../../../assets/images/map.png"
import { Contact } from "./contact/Contact";


export const Contacts = () => {
    return (
        <FlexWrapper justify={'space-between'}>
            <Contact />
            <Photo src={photo} />
        </FlexWrapper>
    );
};
