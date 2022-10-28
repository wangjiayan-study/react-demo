import Row from './Row'
const renderDisplayContent = (startIndex, endIndex,rowHeight)=>{
  const content = []
  for (let i = startIndex;i<=endIndex;++i){
    content.push(
      <Row  index={i} 
      style={{
        width: '100%',
        height: rowHeight + 'px',
        position: "absolute",
        left: 0,
        right: 0,
        top: i * rowHeight,
        borderBottom: "1px solid #000",
      }}
      />

    )
  }
    return content
}

export default renderDisplayContent
