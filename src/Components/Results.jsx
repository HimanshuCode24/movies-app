export default function Result(props) {
    const boxes = props.movies.map(
        () => {
             return <Box/>
        }
    )
    return (
        <div className='w-full grid md:grid-cols-4 gap-5'>
            {boxes}
        </div>
    )
}
const Box = () => {
   
    return (
        <div className='shadow min-h-[200px] mt-3 pb-1'>
           
        </div>
    )
}