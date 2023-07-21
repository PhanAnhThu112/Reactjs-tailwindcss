import {BiHomeAlt, BiInfoSquare, BiMoviePlay} from 'react-icons/bi';
const Index = () => {
    return ( 
        <nav className="col-span-1 bg-cyan-200">
            <div className="mx-4 justify-between items-center">
                <h4 className="upper-case font-bold text-primary py-4 border-b text-right border-primary">Phimmoi.net</h4>
            </div>
            <ul className="mx-4 my-2">
                <li className='flex p-2 justify-end items-center cursor-pointer bg-primary text-white'>
                    <h3 className='mr-2'>Home</h3>
                    <BiHomeAlt size="1.875rem"/>
                </li>
                <li className='flex p-2 justify-end items-center cursor-pointer text-primary '>
                    <h3 className='mr-2'>Movie</h3>
                    <BiMoviePlay size="2rem"/>
                </li>
                <li className='flex p-2 justify-end items-center cursor-pointer text-primary '>
                    <h3 className='mr-2'>Home</h3>
                    <BiInfoSquare size="2rem"/>
                </li>
            </ul>
        </nav>
     );
}

export default Index;