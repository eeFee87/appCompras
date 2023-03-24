import './Header.css';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
const Header = () => {
  const navigate = useNavigate();
  return (
    <header className="header">
      <h1 className="col-sm-12 col-md-6 text-center p-3 ">App Compras</h1>
      <div className="group_button">
        <Button
          className="button"
          variant="primary"
          onClick={() => navigate('/login')}
        >
          Login
        </Button>
        <Button
          className="button"
          variant="primary"
          onClick={() => navigate('/register')}
        >
          Register
        </Button>
      </div>
    </header>
  );
};
export default Header;
