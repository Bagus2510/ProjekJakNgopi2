import { Button } from './Button';
export const Cards1 = (props) => {
    const { children, url, GambarCafe } = props
    return (
        <>
            <img className='w-48 h-48 rounded-md' src={GambarCafe} alt="Cafe" />
            <p className=''>{children}</p>
            <Button><a className='hover:text-white delay-150 duration-300' href={url}>Lihat</a></Button>
        </>
    )
}
