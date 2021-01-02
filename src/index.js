import './main.scss';
//
function importAll(r) {
  r.keys().forEach(r);
}

// require.context('./components', true, /\.scss$/);
// require.context('/Users/jane/prj/FSD/1task/src', true, /\.scss$/);
//
// importAll(require.context('../public', true, /\.scss$/));
//
// require.context('./pages', true, /\.scss$/);
importAll(require.context('./components', true, /\.js$/));
importAll(require.context('./pages', true, /\.js$/));

importAll(require.context('../public/images', true, /\.(jpe?g|png|svg)$/));

importAll(require.context('./components', true, /\.(jpe?g|png|svg)$/));

