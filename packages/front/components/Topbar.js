import Link from 'next/link';

function TopbarStyle() {
  return <style jsx>{`
    .topbar__container {
      border-bottom: solid 1px #ececec;
      justify-content: space-between;
      display: flex;
      position: relative;
      align-items: center;
      height: 100px;
    }
    .topbar__container .topbar__logo {
      margin-left: 30px;
    }
    .topbar__container .topbar__logo .logo {
      float: left;
      height: 40px;
      width: 72px;
      background-image: url(/static/avocado.png);
      background-size: 72px 40px;
      background-repeat: no-repeat;
      position: relative;
      z-index: 1;
    }
    .topbar__container .topbar__center {
      position: absolute;
      left: 0;
      width: 100%;
      height: 100%;
    }

    @media (max-width: 1100px) {
      .topbar__container .topbar__logo {
        display: none;
      }
    }
  `}</style>
}

export default ({ children }) => (
  <div className="topbar__container">
    <div className="topbar__logo">
      <Link href="/"><a className="logo" /></Link>
    </div>
    <div className="topbar__center">
      <div className="center__wrapper">
        {children}
      </div>
    </div>
    <TopbarStyle />
  </div>
);
