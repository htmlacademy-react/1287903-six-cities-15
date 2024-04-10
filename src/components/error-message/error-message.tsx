import { useAppSelector } from '../../hooks';
import './error-message.css';


function ErrorMessage(): JSX.Element | null {
  const error = useAppSelector((state) => state.error);

  return (error)
    ? <div className="error__message">{error}</div>
    : null;
}

export default ErrorMessage;
