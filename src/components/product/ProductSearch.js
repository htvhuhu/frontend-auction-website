import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import CategoryService from '../../services/CategoryService';
import InputGroup from 'react-bootstrap/InputGroup';
import { useEffect, useState } from 'react';

function ProductSearch() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const res = CategoryService.getCategories();
    setCategories(res);
  }, []);

  return (
    <div className='product-search'>
      <Form className="d-flex">
        <InputGroup className="mb-3" size="lg">
          
          <InputGroup.Text id="basic-addon1">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
              <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
            </svg>
          </InputGroup.Text>
          <Form.Control
            type="search"
            placeholder="Search keywords"
            aria-label="Search"
          />
          <Button variant="primary">Search</Button>
        </InputGroup>
      </Form>
    </div>

  );
}

export default ProductSearch;