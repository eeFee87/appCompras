import { Card } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
const ProductCard = ({ product }) => {
  return (
    <Card className=" p-1 m-2 flex-grow-1" style={{ width: '18rem' }}>
      <Card.Img variant="top" src={product.images} />
      <Card.Body className="d-flex flex-wrap">
        <Card.Title>{product.title}</Card.Title>
        <Card.Text className="flex-grow-1">{product.description}</Card.Text>
        <Button classvariant="primary">Añadir al carrito</Button>
      </Card.Body>
    </Card>
  );
};
export default ProductCard;
