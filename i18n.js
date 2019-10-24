import { Localization } from 'expo-localization';
import i18n from 'i18n-js';

import en from './translations/en.json';

// i18n.locale = Localization.region;
i18n.fallbacks = true;
i18n.translations = { en };

export default i18n;
