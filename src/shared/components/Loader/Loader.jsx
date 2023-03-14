import { ColorRing } from 'react-loader-spinner';

const Loader = ({ size = 80, shift = '-50', yShift = '-50' }) => {
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
        transform: `translate(${shift}%, ${yShift}%)`,
      }}
      wrapperClass="blocks-wrapper"
      colors={['#296b00', '#3a7347', '#77b882', '#abbd81', '#9b7137']}
    />
  );
};

export default Loader;
