import {FC} from 'react'
interface Prop{
    data:{
        title:string,
        link:string
    }
}
export const YoutubeCard:FC<Prop> = (props)=>{
    const {title,link} = props.data
    return <>
        <div className='yt-card'>
        <iframe  src={link} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            <div className='yt-title'>{title}</div>
        </div>
    </>
}