import { useParams } from 'react-router-dom';
import { steven_data, camila_data, gerald_data, louie_data } from '../../assets';
import OratorTemplate from './OratorTemplate';

const oratorMap = {
  'steven-j-traub': steven_data,
  'camila-paiva-perin': camila_data,
  'gerald-c-green': gerald_data,
  'gregory-louie': louie_data,
};

const OratorDetails = () => {
  const { id } = useParams();
  const orator = oratorMap[id];

  if (!orator) {
    return <div className="text-center mt-20 text-xl font-semibold">Orator not found</div>;
  }

  return <OratorTemplate {...orator} />;
};

export default OratorDetails;
