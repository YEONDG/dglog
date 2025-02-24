import Image from 'next/image';

const Home = () => {
  return (
    <div>
      <div className='relative w-40 h-52'>
        <Image
          src={'/연동근.jpg'}
          alt='profile image'
          fill
          sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
          style={{ objectFit: 'cover' }}
          priority
        />
      </div>
      <h1>신입 프론트엔드 개발자 연동근입니다.</h1>
    </div>
  );
};

export default Home;
