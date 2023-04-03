import axios from 'axios';

export default class SearchPhotos {
  personalKey = '35020520-428c05ef93bb42e5f6e2895e2';
  formQuery = '';
  image_type = 'photo';
  orientation = 'horizontal';
  safesearch = 'true';
  page = '1';
  per_page = '40';

  async getGallery() {
    const BASE_URL = 'https://pixabay.com/api/?';
    const url = `${BASE_URL}key=${this.personalKey}&q=${this.formQuery}&image_type=${this.image_type}&orientation=${this.orientation}&safesearch=${this.safesearch}&page=${this.page}&per_page=${this.per_page}`;

    try {
      const response = await axios.get(url);
      this.incrementPage();
      return response.data;
    } catch (error) {
      throw new Error(error.message);
    }
  }

  get query() {
    return this.formQuery;
  }

  set query(newQuery) {
    this.formQuery = newQuery;
  }

  incrementPage() {
    this.page += 1;
  }

  resetPage() {
    this.page = 1;
  }
}
