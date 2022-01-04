const extractName = (path) => path.split('/')[path.split('/').length -1].split('.')[0];

export default extractName;