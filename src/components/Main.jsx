import '../styles/Main.scss'

const Main = (props) => {
  const {data} = props
  return (
    <main className='main-container'>      
    {
      data ? data.map((item, index)=>(
        <div key={index} className='main-container__card'>
          <h1 className='main-container__h1'>{item.data.title}</h1>
          <img  className='main-container__img' src={`https://www.artic.edu/iiif/2/${item.data.image_id}/full/843,/0/default.jpg`}/>
          <p  className='main-container__p'>{item.data.id}</p>
        </div>
      )) : <>Sin informacion</>
    }
    </main>
  )
}

export default Main