import Header from "./header";
import Title from "./title";
import Paragraph from "./text";

const Card = ({ name, status, img_url, title, text, className }) => (
  <div className={`card ${className}`}>
    <Header name={name} status={status} img_url={img_url} />
    <Title text={title} />
    <Paragraph text={text} />
  </div>
);

export default Card;
