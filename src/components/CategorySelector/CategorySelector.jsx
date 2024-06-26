import * as S from "./CategorySelector.style";

const CategorySelector = ({
  categories,
  selectedCategory,
  onSelectCategory,
  className,
}) => {
  return (
    <S.CategorySelectorWrapper className={className}>
      {categories.map((category, index) => (
        <S.CategoryConatiner
          key={category.eng_category}
          onClick={() => onSelectCategory(index)}
          selected={category === selectedCategory}
        >
          {selectedCategory === index ? (
            <S.CateogoryIcon src={category.selectIcon} alt={category.name} />
          ) : (
            <S.CateogoryIcon src={category.unselectIcon} alt={category.name} />
          )}
          <S.CategoryText selected={selectedCategory === index}>
            {category.ko_category}
          </S.CategoryText>
        </S.CategoryConatiner>
      ))}
    </S.CategorySelectorWrapper>
  );
};

export default CategorySelector;
