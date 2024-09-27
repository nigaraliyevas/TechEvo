import image1 from '../../../public/assets/images/DetailImage/unsplash_Hin-rzhOdWs.png'
import image2 from '../../../public/assets/images/DetailImage/unsplash_2.png'
import image3 from '../../../public/assets/images/DetailImage/unsplash_3.png'
import image4 from '../../../public/assets/images/DetailImage/unsplash_4.png'
import { useState } from 'react'
import style from './DetailImage.module.scss'
const DetailImageComponent = () => {
    const detailImage = [
     {
        image:image1
     },
     {
        image:image2
     },
     {
        image:image3
     },
     {
        image:image4
     }
    ]
    const [mainImage,setMainImage] = useState(detailImage[0])
  return (
    <div className={style.detail_images}>

      <div className={style.detail_image_left}>
      {
        detailImage.map((item,index)=>(
            <img key={index} onClick={()=>setMainImage(item)} src={item.image} alt="" />
        ))
      }

      </div>
      <img src={mainImage.image} alt="" />
    </div>
  )
}

export default DetailImageComponent