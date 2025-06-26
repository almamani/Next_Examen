import Image from "next/image";
import logo from "../assets/react.svg";

const Home = () => {
  return (
    <main>
      <h1>Bienvenidos</h1>
      <hr />
      <br />
      <div className="flex items-center justify-center">
        <Image src={logo} width={350} height={350} alt="logo" />
      </div>
    </main>
  );
};

export default Home;
