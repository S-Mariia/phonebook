import { ColorRing } from 'react-loader-spinner';

const Loader = ({ size = 80, shift = '-50' }) => {
  return (
    <ColorRing
      visible={true}
      height={size}
      width={size}
      ariaLabel="blocks-loading"
      wrapperStyle={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: `translate(${shift}%, -50%)`,
      }}
      wrapperClass="blocks-wrapper"
      colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
    />
  );
};

export default Loader;
