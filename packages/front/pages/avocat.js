import React from 'react'
import 'isomorphic-fetch'
import Head from '../components/Head/Head';
import Topbar from '../components/Topbar';
import Avocat from '../components/Avocat';
import Link from 'next/link'
import { AVOCADO_API_URL } from '../config';

export default class extends React.Component {
  static async getInitialProps ({ query: { id } }) {
    // eslint-disable-next-line no-undef
    const res = await fetch(`${AVOCADO_API_URL}/avocats/${id}`)
    const avocat = await res.json()
    return { avocat, }
  }

  render () {
    const { avocat } = this.props;

    if (!avocat) {
      return <div>Not found</div>;
    }

    return (
      <div>
        <Head
          title={avocat.name}
        />
        <Topbar>
          <Link
            prefetch
            href='/'
          >
            <a>
              <h1>← Back to Search</h1>
            </a>
          </Link>
        </Topbar>
        <div className="center__wrapper">
          <Avocat {...avocat} />
        </div>
        <style jsx>{`
          a {
            align-self: center;
          }
          h1 {
            font-size: 30px;
            margin: 0;
            padding: 0;
          }
        `}</style>
      </div>
    );
  }
}
