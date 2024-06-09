import * as S from "./Home.style.js";
import Loading from "../Loading/Loading.jsx";
import Navbar from "../../components/Navbar/Navbar.jsx";
import LectureList from "../../components/LectureList/LectureList.jsx";
import { useEffect, useState } from "react";
import useFetch from "../../hooks/useFetch.js";
import { ENDPOINTS } from "../../api/endpoints.js";

const Home = () => {
  const categories = [
    {
      name: "프로그래밍 언어",
      unselectIcon: require("../../assets/icons/programming_language_unselect.png"),
      selectIcon: require("../../assets/icons/programming_language_select.png"),
    },
    {
      name: "웹 개발",
      unselectIcon: require("../../assets/icons/web_development_unselect.png"),
      selectIcon: require("../../assets/icons/web_development_select.png"),
    },
    {
      name: "게임 개발",
      unselectIcon: require("../../assets/icons/game_development_unselect.png"),
      selectIcon: require("../../assets/icons/game_development_select.png"),
    },
    {
      name: "모바일 앱 개발",
      unselectIcon: require("../../assets/icons/app_development_unselect.png"),
      selectIcon: require("../../assets/icons/app_development_select.png"),
    },
    {
      name: "데이터 사이언스",
      unselectIcon: require("../../assets/icons/data_science_unselect.png"),
      selectIcon: require("../../assets/icons/data_science_select.png"),
    },
    {
      name: "인공지능",
      unselectIcon: require("../../assets/icons/ai_unselect.png"),
      selectIcon: require("../../assets/icons/ai_select.png"),
    },
  ];
  const [selectedCategory, setSelectedCategory] = useState(0);
  const {
    data: topLanguages,
    loading: topLanguagesLoading,
    error: topLanguagesError,
  } = useFetch(ENDPOINTS.TOP_LANGUAGES, { method: "get" });
  const {
    data: lectures,
    loading: lecturesLoading,
    error: lecturesError,
    fetchData: fetchLectures,
  } = useFetch(ENDPOINTS.LECTURES, {
    method: "get",
    params: { category: categories[selectedCategory].name },
  });
  useEffect(() => {
    fetchLectures();
  }, [selectedCategory]);
  if (topLanguagesLoading || lecturesLoading) return <Loading />;
  if (topLanguagesError || lecturesError) alert("에러가 발생했습니다.");
  return (
    <S.HomeLayout>
      <S.HomeHeader>
        <Navbar topLanguages={topLanguages} />
      </S.HomeHeader>
      <S.HomeMain>
        <S.HomeCategorySelector
          categories={categories}
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
        />
        <LectureList lectures={lectures} />
      </S.HomeMain>
    </S.HomeLayout>
  );
};

export default Home;
