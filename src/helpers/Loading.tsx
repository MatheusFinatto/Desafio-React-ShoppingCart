import { styled } from "styled-components";
import ContentSection from "../styles/Content/ContentSectionStyle";
import ContentBox from "../styles/Products/ContentBox";

const LoadingIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlSpace="preserve"
    width={50}
    height={50}
    viewBox="0 0 399.389 399.389"
  >
    <path d="M340.896 58.49C303.18 20.773 253.031.001 199.693.001c-53.34 0-103.487 20.771-141.204 58.489C20.772 96.208 0 146.355 0 199.694c0 53.34 20.772 103.489 58.49 141.206 37.717 37.717 87.864 58.488 141.204 58.488 53.339 0 103.486-20.771 141.205-58.488 37.717-37.717 58.49-87.865 58.49-141.206-.002-53.339-20.776-103.486-58.493-141.204zM321.93 199.694c0 67.401-54.836 122.236-122.237 122.236S77.457 267.096 77.457 199.694 132.292 77.458 199.693 77.458 321.93 132.293 321.93 199.694zm6.131-128.367a184.927 184.927 0 0 1 9.607 10.379l-29.262 29.262c-25.766-31.512-64.928-51.664-108.713-51.664-4.593 0-9.134.229-13.615.662V18.655c4.508-.332 9.049-.5 13.615-.5 48.491 0 94.078 18.883 128.368 53.172z" />
  </svg>
);

export const LoadingSpinner = styled(LoadingIcon)`
  animation: rotation 1s infinite linear;

  @keyframes rotation {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(359deg);
    }
  }
`;

const LoadingBox = (isLoading: boolean) => {
  if (isLoading) {
    return (
      <ContentSection>
        <ContentBox
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <LoadingSpinner />
        </ContentBox>
      </ContentSection>
    );
  }
};

export default LoadingBox;
