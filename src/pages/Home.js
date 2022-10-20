import { DatePicker } from "antd";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      Ini Halaman Home <br />
      <DatePicker />
      <Link to="/about">About</Link>
    </>
  );
}

export default Home;
