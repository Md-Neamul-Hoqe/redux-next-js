import DisplayCounter from '../atoms/DisplayCounter';
import Button from '../atoms/Button';

const Counter = () => {

    return (
        <div className='flex gap-5 items-center'>
            <Button text={'increment'} />

            {/* Display */}
            <DisplayCounter />

            <Button text={'decrement'} />
        </div>
    );
};

export default Counter;