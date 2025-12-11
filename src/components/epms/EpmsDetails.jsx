import { useParams } from 'react-router-dom';
import { steven_data, camila_data, gerald_data, louie_data } from '../../assets';
import EpmTemplate from './EpmTemplate';
 
const epmsMap = {
  'steven-j-traub': steven_data,
  'camila-paiva-perin': camila_data,
  'gerald-c-green': gerald_data,
  'gregory-louie': louie_data,
};
 
const EpmsDetails = () => {
  const { id } = useParams();
  const epm = epmsMap[id];
 
  if (!epm) {
    return <div className="text-center mt-20 text-xl font-semibold">Orator not found</div>;
  }
 
  return <EpmTemplate {...epm} />;
};
 
export default EpmsDetails;