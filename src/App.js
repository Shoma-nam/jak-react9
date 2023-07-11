import { Router } from "./router/Router";
import "./styles.css";

const user = {
  name: "アーセナル",
  image: "https://source.unsplash.com/aC-Qup8UkQw",
  email: "12345@example.com",
  phone: "090-1111-2222",
  company: {
    name: "テスト株式会社"
  },
  website: "https://google.com"
};

export default function App() {
  return <Router />;
}
