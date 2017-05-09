import {
  ALGOLIA_APP_ID,
  ALGOLIA_API_INDEX_NAME,
  ALGOLIA_API_SEARCH_KEY
} from '../../config';
import {
  Configure,
  InstantSearch,
  Pagination,
} from 'react-instantsearch/dom';
import Result from './Result';
import SearchBox from './SearchBox';
import Topbar from '../Topbar';

function Paginate() {
  return (
    <div className="center__wrapper">
      <Pagination />
      <style jsx global>{`
        .ais-Pagination__itemSelected {
          background: #8de957;
        }
        .ais-Pagination__item:hover .ais-Pagination__itemLink {
          color: #8de957;
        }
      `}</style>
    </div>
  );
}

function Search() {
  return (
    <div>
      <Topbar>
        <div className="searchbox__container">
          <SearchBox />
        </div>
      </Topbar>
      <Result />
      <Paginate />
      <style jsx>{`
        .searchbox__container {
          align-self: center;
          width: 100%;
        }
      `}</style>
    </div>
  );
}

export default () => (
  <InstantSearch
    appId={ALGOLIA_APP_ID}
    apiKey={ALGOLIA_API_SEARCH_KEY}
    indexName={ALGOLIA_API_INDEX_NAME}
  >
    <Configure hitsPerPage={8} />
    <Search />
  </InstantSearch>
);
