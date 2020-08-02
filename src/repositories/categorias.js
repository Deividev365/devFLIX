import config from '../config'

const URL_CATEGORIES = `${config.URL_BACKEND}/categorias`;

function getAll() {                
    return fetch(`${URL_CATEGORIES}`)
        .then(async (serverRes) => {

            if(serverRes.ok){
                const answear = await serverRes.json();
                return answear;
            }


            throw new Error('nao peguei os dados');
        });
 }


 function getAllWithVideos() {                
    return fetch(`${URL_CATEGORIES}?_embed=videos`)
        .then(async (serverRes) => {

            if(serverRes.ok){
                const answear = await serverRes.json();
                return answear;
            }


            throw new Error('nao peguei os dados');
        });
 }

export default {
    getAllWithVideos,
    getAll,
}