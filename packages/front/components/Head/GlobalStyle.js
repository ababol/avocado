const style = `
  html, body {
    margin: 0;
    font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  .center__wrapper {
    display: flex;
    height: 100%;
    margin: 0 auto;
    width: 800px;
    max-width: 94%;
  }
`;

export default () => (
  <style dangerouslySetInnerHTML={{ __html: style }} />
);
