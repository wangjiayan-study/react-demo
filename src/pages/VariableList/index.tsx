
import styles from './index.less';
import { useMemo, useState } from 'react';
import Content from './Content'
// 可视高
const height = 600
// 行高
const rowHeight  = 80
// 可视范围内展示元素数
const limit = Math.ceil(height/rowHeight)
const total = 1000
const phantomHeight = rowHeight * total
// 上下多渲染一些元素用来过渡快速滑动时来不及渲染的问题
const bufferSize = 15 
const originStartIdx =0

const fixedList = ()=>{
  const [startIndex, setStartIndex] = useState(Math.max(originStartIdx-bufferSize,0))
  const endIndex = useMemo(()=>Math.min(startIndex + limit+bufferSize, total - 1),[startIndex])


  const vListScroll = (e)=>{
    console.log('滚动距离',e.target.scrollTop)
    const scrollTop = e.target.scrollTop
    const newStarIndex = Math.floor(scrollTop / rowHeight)
    if (newStarIndex!==startIndex){
      setStartIndex(newStarIndex)
    }
  }



  return (
    <>
    可视窗
    <div className={styles.vListContainer} onScroll={vListScroll}>
      <div className={styles.phantomContent} style={{height:phantomHeight}}>

       {Content(startIndex,endIndex,rowHeight)}
      </div>
     </div>
     </>
  )

}

export default fixedList