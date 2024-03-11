import Logo from '../../components/logo/logo';
import { Helmet } from 'react-helmet-async';

function NotFoundPage(): JSX.Element {
  return (
    <div>
      <Helmet>
        <title>404 Page not found.</title>
      </Helmet>
      <Logo />
      <h2>404 Page not found</h2>
    </div>
  );
}

export default NotFoundPage;
