import ProductCard from '../product-card/product-card.component';

import {
  CategoryPreviewContainer,
  CategoryTitle,
  PreviewContainer,
} from './category-preview.styles';

const CategoryPreview = ({ title, products }) => {
  return (
    <div>
      <CategoryPreviewContainer>
        <h2>
          <CategoryTitle to={title}>{title.toUpperCase()}</CategoryTitle>
        </h2>
        <PreviewContainer>
          {products
            .filter((_, idx) => idx < 4)
            .map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
        </PreviewContainer>
      </CategoryPreviewContainer>
    </div>
  );
};

export default CategoryPreview;
