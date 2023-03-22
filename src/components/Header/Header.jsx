import './Header.css';
import { Button } from 'react-bootstrap';
const Header = () => {
  return (
    <header className="header">
      <h1 className="col-sm-12 col-md-6 text-center p-3 ">App Compras</h1>
      <div className="group_button">
        <Button className="button" variant="primary">
          Login
        </Button>
        <Button className="button" variant="primary">
          Register
        </Button>
      </div>
    </header>
  );
};
export default Header;
