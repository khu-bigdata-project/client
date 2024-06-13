import * as S from "./Other.style";
import { Link } from "react-router-dom";
import Loading from "../Loading/Loading";
import Navbar from "../../components/Navbar/Navbar";
import useFetch from "../../hooks/useFetch";
import { ENDPOINTS } from "../../api/endpoints";

const Other = () => {
  const {
    data: topLanguages,
    loading: topLanguagesLoading,
    error: topLanguagesError,
  } = useFetch(ENDPOINTS.TOP_LANGUAGES, { isMocked: true, method: "get" });

  const {
    data: others,
    loading: othersLoading,
    error: othersError,
  } = useFetch(ENDPOINTS.OTHERS, { isMocked: false, method: "get" });

  if (topLanguagesLoading || othersLoading) return <Loading />;
  if (topLanguagesError || othersError) alert("에러가 발생했습니다.");
  return (
    <S.OtherLayout>
      <S.OtherHeader>
        <Navbar topLanguages={topLanguages} />
      </S.OtherHeader>
      <S.OtherMain>
        <S.OtherTitle>다른 커리큘럼</S.OtherTitle>
        <S.OtherUserList>
          {others.studentList.length === 0 ? (
            <S.EmptyMessage>다른 사용자가 없습니다.</S.EmptyMessage>
          ) : (
            others.studentList.map((other) => (
              <Link
                to={`/other/${other.udemyUserId}`}
                key={other.udemyUserId}
                style={{ textDecoration: "none" }}
              >
                <S.OtherUserItem user={other} />
              </Link>
            ))
          )}
        </S.OtherUserList>
      </S.OtherMain>
    </S.OtherLayout>
  );
};

export default Other;
