import styles from './index.less';
import {useCallback,useEffect,useRef,useState}  from 'react'
import { VariableSizeList as List } from "react-window";
import Row from './Row'
const Example = () => {
  const [sizes, setSizes] = useState({ 1: 50 }); // 根据索引记录列表的高度
  const [count, setCount] = useState(100); // 列表数量

  const listRef = useRef();
  console.log("sizes", sizes);

  useEffect(() => {
    return () => {
      console.log("父组件");
    };
  }, []);
  // 根据索引获取Item的尺寸
  const getItemSize = useCallback(
    (index) => {
      return sizes[index] || 150;
    },
    [sizes]
  );

  // 根据索引，设置Item高度
  const setItemSize = useCallback((index = 1, size = 10) => {
    console.log("setItemSize", index, size);
    setSizes((prevSize) => {
      return {
        ...prevSize,
        [index]: size
      };
    });
    // setCount(count + 1);
    // 根据索引，重置缓存位置。
    listRef.current.resetAfterIndex(index, false);
  }, []);
  
  const rowRender = useCallback(({ index: rowIndex, style }) => {
    return (
      <div index={rowIndex} style={style}>
        <Row
          // style={style}
          index={rowIndex}
          key={rowIndex}
          setItemSize={setItemSize}
          rowIndex={rowIndex}
        />
      </div>
    );
  }, []);

  return (
    <div style={{border:'1px solid red',margin:'0 auto'}}>
      {
        <List
          className={styles.List}
          height={400}
          itemCount={count}
          itemSize={getItemSize}
          width={300}
          ref={listRef}
        >
          {rowRender}
        </List>
      }
    </div>
  );
};

export default Example

