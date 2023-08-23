import { randomRange } from '../../../global/helpers/math';

const NoPage = () => {
    const noImageIndex = randomRange(1, 3);
    return (
        <div className='page-content v-flex align-center'>
            <h1>This page cannot be found</h1>
            <div className='fit-page'>
                <img
                    className='responsive-image'
                    src={`/img/cant-find-${noImageIndex}.webp`}
                    alt='Cannot Find Page'
                />
            </div>
        </div>
    );
};

export default NoPage;
