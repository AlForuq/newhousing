import { useLocation } from "react-router-dom";

export const UseSearch = () => {
  const { search } = useLocation();
  return new URLSearchParams(search);
};

export default UseSearch;
