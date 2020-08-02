import config from '../config'

const URL_VIDEOS = `${config.URL_BACKEND}/videos`;

 function create(objetoDoVideo) {                
    return fetch(`${URL_VIDEOS}?_embed=videos`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(objetoDoVideo),
    })
        .then(async (serverRes) => {

            if(serverRes.ok){
                const answear = await serverRes.json();
                return answear;
            }


            throw new Error('nao foi possivel cadastrar os dados');
        });
 }

export default {
    create,
}