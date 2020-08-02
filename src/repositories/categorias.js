import config from '../config'

const URL_CATEGORIES = `${config.URL_BACKEND}/categorias`;

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
}