import Map from './Map';

export default ({ name, address, email, tel, avatar, fax, linkedin, location }) => (
  <div className="card__avocat">
    <div className="card__header">
      <div className="avocat__logo" style={{backgroundImage: `url(${avatar || '/static/avocado.png'})`}} />
      <div className="avocat__info">
        <span className="info__name">{name}</span>
        <span className="info__address">
          <a target="_blank" href={`https://www.google.com/maps/place/${address}`}>{address}</a>
        </span>
      </div>
      <div className="avocat__contact">
        <span className="info__name"><a href={`mailto:${email}`}>{email}</a></span>
        <span className="info__address"><a href={`tel:${tel}`}>{tel}</a></span>
      </div>
    </div>
    <div className="map__container">
      <Map
        location={location}
        center={location}
        address={address}
        zoom={location ? 14 : 11}
      />
    </div>
    <style jsx>{`
      .card__avocat {
        display: flex;
        border: 1px solid #ececec;
        box-shadow: rgba(0, 0, 0, 0.10) 0px 1px 8px;
        margin: 20px 0;
        padding: 20px 24px;
        width: 100%;
        flex-direction: column;
      }
      .card__header {
        display: flex;
        margin-bottom: 20px;
        align-items: center;
      }
      .avocat__logo {
        height: 80px;
        width: 80px;
        border-radius: 80px;
        background-repeat: no-repeat;
        background-position: center center;
        background-size: 100%;
      }
      .avocat__info, .avocat__contact {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        padding: 16px 0;
        flex-wrap: wrap;
      }
      .avocat__info {
        margin-left: 20px;
      }
      .avocat__contact {
        flex: 1;
        text-align: right;
      }
      .info__name {
        font-weight: bold;
      }
      .info__address {
        font-weight: 200;
      }
      .map__container {
        height: 350px;
      }
      @media (max-width: 800px) {
        .card__header {
          flex-wrap: wrap;
          justify-content: center;
          text-align: center;
        }
        .avocat__contact, .avocat__info {
          flex: 100%;
        }
        .avocat__contact {
          text-align: center;
        }
        .avocat__info {
          margin-left: 0;
        }
      }
    `}</style>
  </div>
);
