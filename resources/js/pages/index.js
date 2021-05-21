import React from 'react';
import ReactDOM from 'react-dom';

const IndexPage = () => {
  return (
    <div>Index</div>
  )
}

export default IndexPage;

if (document.getElementById('app')) {
    ReactDOM.render(<IndexPage />, document.getElementById('app'));
}
