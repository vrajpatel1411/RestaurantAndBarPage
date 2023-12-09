const Nav_item = (props) => {
  return (
    <li className={`${props.type} p_opensans`}>
      <a href={`#${props.title}`}>{props.title}</a>
    </li>
  );
};

export default Nav_item;
