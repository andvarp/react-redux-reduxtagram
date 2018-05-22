import React from 'react';
import { render } from 'react-dom';

// import css
import css from './styles/style.styl';

// import Components
import Main from './components/Main';

render(<Main><p>hello</p></Main>, document.getElementById('root'));
