import {
  DocumentCard,
  DocumentCardTitle,
  DocumentCardImage
} from '@fluentui/react/lib/DocumentCard';
import { Text } from '@fluentui/react/lib/Text';
import { ImageFit } from '@fluentui/react/lib/Image';
import ProductList from '../../data/ProductListData';

export function ProductListItem() {
  
  // eslint-disable-next-line no-extend-native
  String.prototype.truncate = function (length) {
    return this.length > length ? (this.substring(0, length) + '...') : this;
  }

  return (
    <div className="product-list">
      {ProductList.map((item ) => (
      <DocumentCard className="product-list-items">
        <DocumentCardImage imageFit={ImageFit.cover} imageSrc={item.path} className="product-list__image" alt={item.imageAlt}/>
        <div className="product-list__text" >
          <DocumentCardTitle title={item.title.truncate(50)} shouldTruncate className="product-list__title" />
          <Text className="product-list__price">{item.price}</Text>
        </div>
      </DocumentCard>
      ))}
    </div>
  )
}