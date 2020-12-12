import Agpeya from './Agpeya';
import Psalmody from './Psalmody';
import Pascha from './Pascha';
import Liturgies, { 
    StBasilLiturgy,
    StGregoryLiturgy,
    StCyrilLiturgy,
} from './Liturgies';
import Readings from './Readings';
import Melodies from './Melodies';
import Antiphonary from './Antiphonary';
import Clergy from './Clergy';
import Special from './Special';

// This would bundle all the pages and export them in
// a single module so that they can all be imported at
// simeltaneously to be used in the app

export {
    Agpeya, 
    Psalmody,
    Pascha,
    Liturgies,
    StBasilLiturgy,
    StGregoryLiturgy,
    StCyrilLiturgy,
    Readings,
    Melodies,
    Antiphonary,
    Clergy,
    Special,
};