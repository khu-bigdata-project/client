import styled from "styled-components";
import LectureInfo from "../../componenets/LectureInfo/LectureInfo";
import LectureAnalsys from "../../componenets/LectureAnalysis/LectureAnalysis";
import Lecture from "../../componenets/Lecture/Lecture";

export const LectureLayout = styled.div`
  display: flex;
  flex-direction: column;
`;

export const LectureHeader = styled.header``;

export const LectureMain = styled.main`
  padding: 3rem;
`;

export const LectureTitle = styled.h2`
  font-size: 3rem;
  font-weight: bold;
  color: #000000;
  margin-bottom: 3rem;
`;

export const LectureInfoDetail = styled(LectureInfo)`
  margin-bottom: 3rem;
`;

export const LectureAnalysisDetail = styled(LectureAnalsys)`
  margin-bottom: 3rem;
`;

export const LectureReccomendationDetailContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 2rem;
`;

export const LectureReccomendationDetailItem = styled(Lecture)``;
