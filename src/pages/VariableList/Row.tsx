const rowRenderer = ({ index, style }) => {
  // const item = this.state.list[index];
  const item = index;
  return (
    <li
      key={index}
      style={style}
      onClick={() => {
        console.log("item-", index);
      }}
    >
      item-{item}
    </li>
  );
};

export default rowRenderer