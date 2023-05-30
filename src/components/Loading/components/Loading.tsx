import ContentSection from "../../../styles/ContentSectionStyle";
import ContentBox from "../../Products/styles/ContentBox";
import LoadingIconSVG from "../styles/LoadingIconSVG";

const LoadingBox = () => {
  return (
    <ContentSection>
      <ContentBox
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "90vh",
        }}
      >
        <LoadingIconSVG />
      </ContentBox>
    </ContentSection>
  );
};

export default LoadingBox;
