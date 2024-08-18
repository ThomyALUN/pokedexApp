import { POKEMON_TYPE_COLORS } from './constants';

export default getColorByType = (type) => POKEMON_TYPE_COLORS[type.toLowerCase()];