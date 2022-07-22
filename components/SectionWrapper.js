import styled from "styled-components";

export const SectionWrapper = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  padding: 10px;
  border-bottom: 1px solid black;

  @media (min-width: 1400px) {
    margin-left: 10%;
    width: 80%;
  }

  .title {
    font-size: 18px;
  }

  .video-row {
    display: flex;
    flex-direction: row;
  }

  .video-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px;
    flex: 1;

    iframe {
      border-radius: 10px;
    }
  }

  .video-rows {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px;
    flex-wrap: wrap;

    .video {
      margin: 10px;
      border-radius: 5px;

      :hover {
        opacity: 0.5;
        cursor: pointer;
      }
    }
  }
`;
