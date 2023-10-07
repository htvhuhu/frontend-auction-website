import axios from "axios";

class CategoryService {

  getCategories() {
    return [
      {id: 1, name: 'Clothes'},
      {id: 2, name: 'Watch'},
      {id: 3, name: 'Painting'}
    ]
  }
}

const categoryService = new CategoryService();
export default categoryService;