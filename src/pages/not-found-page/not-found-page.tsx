import { Helmet } from 'react-helmet-async';
import Logo from '../../components/logo/logo';
import { Link } from 'react-router-dom';

const container = {
  padding: 50,
};

function NotFoundPage(): JSX.Element {
  return (
    <div style={container}>
      <Helmet>
        <title>Six cities. 404 Page not found.</title>
      </Helmet>
      <Logo />
      <h2>404 Page not found</h2>
      <Link to="/">Back to main</Link>
    </div>
  );
}

export default NotFoundPage;
