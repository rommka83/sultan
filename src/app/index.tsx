import { Routing } from 'pages';
import { withProviders } from './providers';
import './styles/index.css';
import './styles/vars.css';
import './styles/_nulling-styles.css';

function App() {
  return <Routing />;
}

export default withProviders(App);
