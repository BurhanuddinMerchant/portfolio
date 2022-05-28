import {FC} from 'react'
interface Prop{
    data:{
        title:string,
        link:string
    }
}
export const ArchitectureCard:FC<Prop> = (props)=>{
    const {title,link} = props.data
    return <>
        <div className='arch-card'>
            <iframe src={link}  title="architecture"></iframe>
            <div className='arch-title'>{title}</div>
        </div>
    </>
}