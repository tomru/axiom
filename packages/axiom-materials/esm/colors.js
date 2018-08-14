var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import { opacityTextSubtle, opacityTextDisabled, opacityBackgroundOverlayHeavy, opacityBackgroundOverlayLight, opacityBackgroundSubtle, opacityBackgroundActive, opacityBackgroundDisabled, opacityBackgroundHover, opacityBorder } from './opacities';

export var uiCarbon = { r: 72, g: 70, b: 77 };
export var uiCarbonDark = { r: 57, g: 55, b: 62 };
export var uiCarbonDarker = { r: 48, g: 45, b: 53 };

export var uiWhiteNoiseDarker = { r: 227, g: 225, b: 232 };
export var uiWhiteNoiseDark = { r: 237, g: 235, b: 242 };
export var uiWhiteNoise = { r: 247, g: 245, b: 252 };

export var uiAccentHover = { r: 48, g: 171, b: 232 };
export var uiAccent = { r: 35, g: 158, b: 219 };
export var uiAccentActive = { r: 22, g: 145, b: 207 };

export var uiSuccessHover = { r: 10, g: 204, b: 162 };
export var uiSuccess = { r: 0, g: 190, b: 150 };
export var uiSuccessActive = { r: 0, g: 166, b: 130 };

export var uiWarningHover = { r: 237, g: 195, b: 97 };
export var uiWarning = { r: 224, g: 182, b: 81 };
export var uiWarningActive = { r: 212, g: 168, b: 66 };

export var uiErrorHover = { r: 255, g: 99, b: 133 };
export var uiError = { r: 252, g: 72, b: 112 };
export var uiErrorActive = { r: 240, g: 58, b: 97 };

export var uiInfoHover = { r: 48, g: 171, b: 232 };
export var uiInfo = { r: 35, g: 158, b: 219 };
export var uiInfoActive = { r: 22, g: 145, b: 207 };

export var uiBlack = { r: 33, g: 33, b: 33 };
export var uiWhite = { r: 255, g: 255, b: 255 };

export var uiHighlight = { r: 215, g: 255, b: 0 };

export var productForbiddenPlanetActive = { r: 242, g: 173, b: 141 };
export var productForbiddenPlanet = { r: 255, g: 190, b: 161 };
export var productForbiddenPlanetHover = { r: 250, g: 207, b: 188 };

export var productTinyClangerActive = { r: 232, g: 132, b: 166 };
export var productTinyClanger = { r: 244, g: 152, b: 183 };
export var productTinyClangerHover = { r: 255, g: 171, b: 199 };

export var productCriticalMassActive = { r: 214, g: 75, b: 107 };
export var productCriticalMass = { r: 227, g: 90, b: 122 };
export var productCriticalMassHover = { r: 240, g: 108, b: 139 };

export var productFantasticVoyageActive = { r: 156, g: 36, b: 82 };
export var productFantasticVoyage = { r: 167, g: 46, b: 94 };
export var productFantasticVoyageHover = { r: 181, g: 60, b: 106 };

export var productParadiseLostActive = { r: 143, g: 99, b: 166 };
export var productParadiseLost = { r: 156, g: 115, b: 178 };
export var productParadiseLostHover = { r: 171, g: 134, b: 191 };

export var productSereneSeaActive = { r: 125, g: 143, b: 201 };
export var productSereneSea = { r: 144, g: 160, b: 214 };
export var productSereneSeaHover = { r: 163, g: 178, b: 227 };

export var productEventHorizonActive = { r: 81, g: 85, b: 148 };
export var productEventHorizon = { r: 96, g: 99, b: 161 };
export var productEventHorizonHover = { r: 113, g: 116, b: 173 };

export var productElectricDreamsActive = { r: 46, g: 109, b: 191 };
export var productElectricDreams = { r: 59, g: 121, b: 204 };
export var productElectricDreamsHover = { r: 74, g: 136, b: 217 };

export var productOuterLimitsActive = { r: 108, g: 199, b: 235 };
export var productOuterLimits = { r: 127, g: 214, b: 248 };
export var productOuterLimitsHover = { r: 147, g: 222, b: 252 };

export var productGiantLeapActive = { r: 20, g: 192, b: 204 };
export var productGiantLeap = { r: 33, g: 206, b: 217 };
export var productGiantLeapHover = { r: 46, g: 217, b: 230 };

export var productMoonLagoonActive = { r: 25, g: 161, b: 176 };
export var productMoonLagoon = { r: 36, g: 173, b: 189 };
export var productMoonLagoonHover = { r: 48, g: 186, b: 201 };

export var productSpaceInvaderActive = { r: 36, g: 133, b: 100 };
export var productSpaceInvader = { r: 47, g: 145, b: 112 };
export var productSpaceInvaderHover = { r: 58, g: 158, b: 125 };

export var productExtraterrestrialActive = { r: 108, g: 194, b: 97 };
export var productExtraterrestrial = { r: 124, g: 207, b: 113 };
export var productExtraterrestrialHover = { r: 142, g: 219, b: 132 };

export var productTerraFormActive = { r: 115, g: 179, b: 62 };
export var productTerraForm = { r: 128, g: 190, b: 76 };
export var productTerraFormHover = { r: 142, g: 204, b: 92 };

export var productPrimevalSoupActive = { r: 186, g: 186, b: 15 };
export var productPrimevalSoup = { r: 200, g: 200, b: 25 };
export var productPrimevalSoupHover = { r: 212, g: 212, b: 38 };

export var productFutureShockActive = { r: 227, g: 223, b: 16 };
export var productFutureShock = { r: 240, g: 236, b: 29 };
export var productFutureShockHover = { r: 252, g: 249, b: 43 };

export var productSunMakerActive = { r: 240, g: 201, b: 5 };
export var productSunMaker = { r: 252, g: 213, b: 18 };
export var productSunMakerHover = { r: 255, g: 220, b: 46 };

export var productNewHorizonActive = { r: 227, g: 163, b: 0 };
export var productNewHorizon = { r: 242, g: 174, b: 0 };
export var productNewHorizonHover = { r: 255, g: 186, b: 13 };

export var productBlastOffActive = { r: 237, g: 124, b: 43 };
export var productBlastOff = { r: 249, g: 138, b: 57 };
export var productBlastOffHover = { r: 255, g: 148, b: 71 };

export var productCrashCourseActive = { r: 242, g: 93, b: 70 };
export var productCrashCourse = { r: 255, g: 109, b: 86 };
export var productCrashCourseHover = { r: 255, g: 126, b: 106 };

export var productSolarRustActive = { r: 191, g: 118, b: 15 };
export var productSolarRust = { r: 205, g: 129, b: 26 };
export var productSolarRustHover = { r: 217, g: 143, b: 39 };

export var productGroundControlActive = { r: 145, g: 71, b: 22 };
export var productGroundControl = { r: 158, g: 83, b: 32 };
export var productGroundControlHover = { r: 171, g: 94, b: 43 };

export var productSpaceOddityActive = { r: 176, g: 149, b: 76 };
export var productSpaceOddity = { r: 189, g: 163, b: 91 };
export var productSpaceOddityHover = { r: 201, g: 176, b: 107 };

export var productRockyPlanetActive = { r: 145, g: 128, b: 100 };
export var productRockyPlanet = { r: 158, g: 142, b: 117 };
export var productRockyPlanetHover = { r: 171, g: 157, b: 135 };

export var productDeepThoughtActive = { r: 167, g: 162, b: 179 };
export var productDeepThought = { r: 187, g: 185, b: 192 };
export var productDeepThoughtHover = { r: 204, g: 204, b: 204 };

export var productLunaDustActive = { r: 103, g: 129, b: 143 };
export var productLunaDust = { r: 120, g: 144, b: 156 };
export var productLunaDustHover = { r: 138, g: 158, b: 168 };

export var sentimentPositiveActive = { r: 62, g: 148, b: 76 };
export var sentimentPositive = { r: 76, g: 161, b: 90 };
export var sentimentPositiveHover = { r: 90, g: 173, b: 104 };

export var sentimentNegativeActive = { r: 201, g: 58, b: 58 };
export var sentimentNegative = { r: 215, g: 74, b: 74 };
export var sentimentNegativeHover = { r: 227, g: 89, b: 89 };

export var sentimentNeutralActive = productDeepThoughtActive;
export var sentimentNeutral = productDeepThought;
export var sentimentNeutralHover = productDeepThoughtHover;

export var socialTwitterActive = { r: 16, g: 148, b: 230 };
export var socialTwitter = { r: 29, g: 161, b: 242 };
export var socialTwitterHover = { r: 43, g: 174, b: 255 };

export var socialFacebookActive = { r: 48, g: 77, b: 140 };
export var socialFacebook = { r: 59, g: 89, b: 152 };
export var socialFacebookHover = { r: 73, g: 102, b: 166 };

export var socialInstagramActive = { r: 171, g: 58, b: 133 };
export var socialInstagram = { r: 183, g: 71, b: 146 };
export var socialInstagramHover = { r: 196, g: 86, b: 160 };

export var externalTwiiterBlue = socialTwitter;

export var themeDayMain = uiCarbon;
export var themeDayMainDark = uiCarbonDark;
export var themeDayMainDarker = uiCarbonDarker;

export var themeDayText = themeDayMain;
export var themeDayTextSubtle = _extends({}, themeDayMain, { a: opacityTextSubtle });
export var themeDayTextDisabled = _extends({}, themeDayMain, { a: opacityTextDisabled });

export var themeDayBackgroundOverlayHeavy = _extends({}, themeDayMain, { a: opacityBackgroundOverlayHeavy });
export var themeDayBackgroundOverlayLight = _extends({}, themeDayMain, { a: opacityBackgroundOverlayLight });
export var themeDayBackgroundSubtle = _extends({}, themeDayMain, { a: opacityBackgroundSubtle });
export var themeDayBackgroundActive = _extends({}, themeDayMain, { a: opacityBackgroundActive });
export var themeDayBackgroundDisabled = _extends({}, themeDayMain, { a: opacityBackgroundDisabled });
export var themeDayBackgroundHover = _extends({}, themeDayMain, { a: opacityBackgroundHover });

export var themeDayBorder = _extends({}, themeDayMain, { a: opacityBorder });

export var themeNightMain = uiWhiteNoise;
export var themeNightMainDark = uiWhiteNoiseDark;
export var themeNightMainDarker = uiWhiteNoiseDarker;

export var themeNightText = themeNightMain;
export var themeNightTextSubtle = _extends({}, themeNightMain, { a: opacityTextSubtle });
export var themeNightTextDisabled = _extends({}, themeNightMain, { a: opacityTextDisabled });

export var themeNightBackgroundOverlayHeavy = _extends({}, themeNightMain, { a: opacityBackgroundOverlayHeavy });
export var themeNightBackgroundOverlayLight = _extends({}, themeNightMain, { a: opacityBackgroundOverlayLight });
export var themeNightBackgroundSubtle = _extends({}, themeNightMain, { a: opacityBackgroundSubtle });
export var themeNightBackgroundActive = _extends({}, themeNightMain, { a: opacityBackgroundActive });
export var themeNightBackgroundDisabled = _extends({}, themeNightMain, { a: opacityBackgroundDisabled });
export var themeNightBackgroundHover = _extends({}, themeNightMain, { a: opacityBackgroundHover });

export var themeNightBorder = _extends({}, themeNightMain, { a: opacityBorder });

export var productColorNames = {
  'forbidden-planet': 'Forbidden Planet',
  'tiny-clanger': 'Tiny Clanger',
  'critical-mass': 'Critical Mass',
  'fantastic-voyage': 'Fantasitc Voyage',
  'paradise-lost': 'Paradise Lost',
  'serene-sea': 'Serene Sea',
  'event-horizon': 'Event Horizon',
  'electric-dreams': 'Electric Dreams',
  'outer-limits': 'Outer Limits',
  'giant-leap': 'Giant Leap',
  'moon-lagoon': 'Moon Lagoon',
  'space-invader': 'Space Invader',
  'extraterrestrial': 'Extraterrestrial',
  'terra-form': 'Terra Form',
  'primeval-soup': 'Primeval Soup',
  'future-shock': 'Future Shock',
  'sun-maker': 'Sun Maker',
  'new-horizon': 'New Horizon',
  'blast-off': 'Blast Off',
  'crash-course': 'Crash Course',
  'solar-rust': 'Solar Rust',
  'ground-control': 'Ground Control',
  'space-oddity': 'Space Oddity',
  'rocky-planet': 'Rocky Planet',
  'deep-thought': 'Deep Thought',
  'luna-dust': 'Luna Dust'
};

export var productColors = {
  'forbidden-planet': productForbiddenPlanet,
  'tiny-clanger': productTinyClanger,
  'critical-mass': productCriticalMass,
  'fantastic-voyage': productFantasticVoyage,
  'paradise-lost': productParadiseLost,
  'serene-sea': productSereneSea,
  'event-horizon': productEventHorizon,
  'electric-dreams': productElectricDreams,
  'outer-limits': productOuterLimits,
  'giant-leap': productGiantLeap,
  'moon-lagoon': productMoonLagoon,
  'space-invader': productSpaceInvader,
  'extraterrestrial': productExtraterrestrial,
  'terra-form': productTerraForm,
  'primeval-soup': productPrimevalSoup,
  'future-shock': productFutureShock,
  'sun-maker': productSunMaker,
  'new-horizon': productNewHorizon,
  'blast-off': productBlastOff,
  'crash-course': productCrashCourse,
  'solar-rust': productSolarRust,
  'ground-control': productGroundControl,
  'space-oddity': productSpaceOddity,
  'rocky-planet': productRockyPlanet,
  'deep-thought': productDeepThought,
  'luna-dust': productLunaDust
};

export var productActiveColors = {
  'forbidden-planet': productForbiddenPlanetActive,
  'tiny-clanger': productTinyClangerActive,
  'critical-mass': productCriticalMassActive,
  'fantastic-voyage': productFantasticVoyageActive,
  'paradise-lost': productParadiseLostActive,
  'serene-sea': productSereneSeaActive,
  'event-horizon': productEventHorizonActive,
  'electric-dreams': productElectricDreamsActive,
  'outer-limits': productOuterLimitsActive,
  'giant-leap': productGiantLeapActive,
  'moon-lagoon': productMoonLagoonActive,
  'space-invader': productSpaceInvaderActive,
  'extraterrestrial': productExtraterrestrialActive,
  'terra-form': productTerraFormActive,
  'primeval-soup': productPrimevalSoupActive,
  'future-shock': productFutureShockActive,
  'sun-maker': productSunMakerActive,
  'new-horizon': productNewHorizonActive,
  'blast-off': productBlastOffActive,
  'crash-course': productCrashCourseActive,
  'solar-rust': productSolarRustActive,
  'ground-control': productGroundControlActive,
  'space-oddity': productSpaceOddityActive,
  'rocky-planet': productRockyPlanetActive,
  'deep-thought': productDeepThoughtActive,
  'luna-dust': productLunaDustActive
};

export var productHoverColors = {
  'forbidden-planet': productForbiddenPlanetHover,
  'tiny-clanger': productTinyClangerHover,
  'critical-mass': productCriticalMassHover,
  'fantastic-voyage': productFantasticVoyageHover,
  'paradise-lost': productParadiseLostHover,
  'serene-sea': productSereneSeaHover,
  'event-horizon': productEventHorizonHover,
  'electric-dreams': productElectricDreamsHover,
  'outer-limits': productOuterLimitsHover,
  'giant-leap': productGiantLeapHover,
  'moon-lagoon': productMoonLagoonHover,
  'space-invader': productSpaceInvaderHover,
  'extraterrestrial': productExtraterrestrialHover,
  'terra-form': productTerraFormHover,
  'primeval-soup': productPrimevalSoupHover,
  'future-shock': productFutureShockHover,
  'sun-maker': productSunMakerHover,
  'new-horizon': productNewHorizonHover,
  'blast-off': productBlastOffHover,
  'crash-course': productCrashCourseHover,
  'solar-rust': productSolarRustHover,
  'ground-control': productGroundControlHover,
  'space-oddity': productSpaceOddityHover,
  'rocky-planet': productRockyPlanetHover,
  'deep-thought': productDeepThoughtHover,
  'luna-dust': productLunaDustHover
};

export var userDefinedGraphColors = {
  'tiny-clanger': productTinyClanger,
  'critical-mass': productCriticalMass,
  'paradise-lost': productParadiseLost,
  'serene-sea': productSereneSea,
  'giant-leap': productGiantLeap,
  'moon-lagoon': productMoonLagoon,
  'terra-form': productTerraForm,
  'primeval-soup': productPrimevalSoup,
  'new-horizon': productNewHorizon,
  'blast-off': productBlastOff,
  'ground-control': productGroundControl,
  'luna-dust': productLunaDust
};