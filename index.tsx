import React, { useEffect, useState } from 'react';

import { render } from 'react-dom';

const App = () => {
  const [pages, setPages] = useState(null);

  const numPages = 10
  useEffect(() => {
    setPages(numPages);
  }, [numPages]);

  return (
    <div>
      <p>Pages = {pages}</p>
    </div>
  );
};

render(<App />, document.getElementById('root'));
