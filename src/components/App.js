import { QueryControls } from '@wordpress/components';
import { withState } from '@wordpress/compose';

const MyQueryControls = withState( {
    episodes:[],
      orderBy: 'title',
      order: 'asc',
      category: 1,
      categories: [
          {
              id: 1,
              name: 'Category 1',
              parent: 0,
          },
          {
              id: 2,
              name: 'Category 1b',
              parent: 1,
          },
          {
              id: 3,
              name: 'Category 2',
              parent: 0,
          },
      ],
      numberOfItems: 10,
  } )
  

const App = (props) => {
    console.log(props)
    return (
        <QueryControls
                onOrderByChange={ ( orderBy ) => setState( { orderBy } ) }
                onOrderChange={ ( order ) => setState( { order } ) }
             
                selectedCategoryId='1'
                onCategoryChange={ ( category ) => setState( { category } ) }
                onNumberOfItemsChange={ ( numberOfItems ) => setState( { numberOfItems } ) }
              />
    );
  }
  export default App;
