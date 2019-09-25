export const getPosts = async() => {
  const response = await fetch('http://smktesting.herokuapp.com/api/products/');
  const result = await response.json();

  return result;
};

export const getDetails = async(id) => {
  // eslint-disable-next-line max-len
  const response = await fetch(`http://smktesting.herokuapp.com/api/reviews/${id}`);
  const result = await response.json();

  return result;
};
