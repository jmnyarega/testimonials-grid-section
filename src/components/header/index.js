const Header = (props) => (
  <div className="card__header user">
    <div className="user__photo">
      <img src={props.img_url} alt={props.name.split(" ")[0]} />
    </div>
    <div className="user__details">
      <p className="user__name"> {props.name} </p>
      <p className="user__status">{props.status} </p>
    </div>
  </div>
);

export default Header;
