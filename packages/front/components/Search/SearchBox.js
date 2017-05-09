import { SearchBox, } from 'react-instantsearch/dom';

function SearchBoxStyle() {
  return <style jsx>{`
    .ais-SearchBox__root {
      max-width: 100%;
    }
    .ais-SearchBox__root {
      height: 100%;
    }
    .ais-SearchBox__input {
      font-size: 30px;
      width: 100%;
      border: none !important;
      outline: none;
      background-color: transparent;
      padding: 0;
      border-radius: 0;
      box-shadow: none;
    }
    .ais-SearchBox__submit {
      display: none;
    }
  `}</style>
}

export default () => (
  <div>
    <SearchBox
      autoFocus={true}
      submitComponent={<span />}
      translations={{
        placeholder: 'Search a lawyer...',
      }}
    />
    <SearchBoxStyle />
  </div>
);
