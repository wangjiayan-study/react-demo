import {useCallback,useEffect,useRef,useState}  from 'react'
const Row = ({ index, style, setItemSize }) => {
  const itemRef = useRef();
  useEffect(() => {
    const elementHeight = itemRef.current.offsetHeight;
    console.log("elementHeight", elementHeight);
    setItemSize(index, elementHeight);
    return () => {
      console.log("卸载1");
    };
  }, []);
  return (
    <div
      ref={itemRef}
      className={index % 2 ? "ListItemOdd" : "ListItemEven"}
      style={style}
    >
      Row {index}
    </div>
  );
};

export default Row