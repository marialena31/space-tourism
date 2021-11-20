import { DATA } from './data.js';
import { upFirstLetter } from './utils.js';

const DATAtab = DATA;

const simuFetch = (urlApi, params = '') => {
    const item = typeof(params) === 'string' ? upFirstLetter(params) : params;
    return new Promise((resolve, reject) => {
        switch(urlApi) {
            case "getTechnologies": resolve(DATAtab.technology);
                                    break;
            case "getTechnology(item)": resolve(DATAtab.technology[item]);
                                        break;
            case "getDestinationsList": resolve(DATAtab.destinations.map(dest => dest.name));
                                        break;
            case "getDestinations": resolve(DATAtab.destinations);
                                    break;    
            case "getDestination(item)": resolve(DATAtab.destinations.find(dest => dest.name == item));
                                        break;
            case "getCrews": resolve(DATAtab.crew);
                            break;    
            case "getCrew(item)": resolve(DATAtab.crew[item]);
                                break;                         
            default: reject('404 - route inconnue');
        }
    })
}

export default simuFetch;