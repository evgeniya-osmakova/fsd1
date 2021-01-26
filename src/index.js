import './main.scss';
//
function importAll(r) {
  r.keys().forEach(r);
}

importAll(require.context('./components', true, /\.js$/));
importAll(require.context('./pages', true, /\.js$/));
importAll(require.context('./pages', true, /\.(jpe?g|png|svg)$/));

importAll(require.context('../public/images', true, /\.(jpe?g|png|svg)$/));

importAll(require.context('./components', true, /\.(jpe?g|png|svg)$/));
