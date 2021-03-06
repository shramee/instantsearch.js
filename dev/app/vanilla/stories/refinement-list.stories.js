import { storiesOf } from 'dev-novel';
import { wrapWithHits } from '../../utils/wrap-with-hits.js';
import * as widgets from '../widgets/index.js';

const stories = storiesOf('RefinementList');

export default () => {
  stories.add(
    'default',
    wrapWithHits(containerNode => {
      window.search.addWidget(
        widgets.refinementList({
          containerNode,
          attributeName: 'brand',
          operator: 'or',
          limit: 10,
          title: 'Brands',
        })
      );
    })
  );
};
