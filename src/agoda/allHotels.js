const hotels = [
    28303943, 30913023, 31058817, 27932025, 30913074, 28303980, 30913235,
    30913207, 30913052, 27915320, 30913384, 30912902, 30913359, 28313008,
    28010405, 28304574, 30912925, 28304338, 28304235, 30912941, 30913048,
    28343203, 28695956, 28304720, 30913223, 30913204, 30639657, 30912903,
    30913347, 31058710, 28304414, 28304038, 28303852, 27825082, 30639458,
    28828454, 30912996, 28304267, 28513441, 30913366, 28304164, 28303996,
    28303966, 28304566, 28313002, 30913001, 30639708, 28304739, 28304630,
    27982510, 28304265, 28303839, 28695961, 30913228, 28304548, 28304076,
    28695957, 28304193, 28313006, 30913379, 30912907, 28695959, 30912914,
    28830740, 30913217, 28304018, 30639706, 30639690, 28828450, 28304811,
    30913334, 28304180, 28304641, 28304039, 28304358, 28304388, 30913083,
    28304026, 30639679, 28304637, 28304227, 30912993, 28304791, 28304301,
    30912942, 28304002, 28687914, 28304197, 31058386, 28304023, 27915334,
    31058378, 31058389, 27915280, 28304306, 30913020, 28194459, 27824836,
    31058407, 27915287, 30639671, 29187345, 30913385, 30913381, 30639663,
    28010408, 28543001, 28304616, 28827490, 28304409, 30639501, 30913042,
    30639674, 28304393, 28304209, 28304285, 28304701, 28303939, 31058382,
    28056321, 30913045, 30639460, 27915270, 28695960, 30913036, 30913065,
    28304715, 30639703, 31058371, 28304751, 28830745, 31058404, 27848135,
    30913068, 28304059, 28830739, 30912904, 30639457, 30913387, 30912943,
    30913220, 30913225, 30913201, 28194452, 27825075, 30639503, 30913071,
    28304278, 28830746, 28194446, 30913196, 30912954, 28687915, 30639502,
    28304458, 31058398, 28010481, 28304380, 31058376, 30913339, 28010426,
    28757111, 30639687, 30912936, 28303950, 28303949, 30912982, 28304421,
    28304594, 28304282, 28304426, 30913335, 28687917, 28304404, 28304357,
    30913376, 30912931, 28304601, 30639469, 30913198, 30639504, 28010427,
    28542994, 30913060, 28304037, 30912953, 30913051, 28304733, 28304674,
    27915267, 28304447, 30913231, 31058691, 30913053, 30639456, 28687918,
    30639499, 28304376, 30639686, 28010431, 27915282, 30913032, 28343202,
    28304512, 30639693, 30912987, 30639682, 30912901, 30639454, 28695955,
    30912915, 30913003, 30913244, 30913362, 28828452, 30639702, 26886542,
    28695953, 30639697, 28272501, 31058375, 30912919, 29257236, 30913203,
    28304005, 28542999, 28304397, 28304450, 28010425, 28513448, 28304216,
    30639496, 28304363, 30913010, 30639707, 28687912, 30913025, 31058709,
    28757110, 30912929, 30913374, 27931379, 30913216, 30913353, 30639661,
    31058402, 28304768, 28194440, 28303953, 30639450, 28304271, 30913086,
    28304043, 30913211, 30913221, 30913363, 28687916, 28010433, 28304183,
    31058373, 30912909, 30912928, 28087711, 30912969, 30913080, 27824854,
    30626425, 28304322, 28304813, 30639696, 30913063, 30913009, 28304434,
    28304370, 28160278, 28304821, 30913037, 30639473, 28304587, 28304686,
    30912950, 30639489, 28304198, 30639491, 30913368, 28304326, 28009885,
    30639658, 30913075, 30639694, 30913062, 30913343, 28345505, 28303978,
    28303868, 30639691, 30913361, 30913227, 31058374, 30639664, 30913085,
    30912932, 30913229, 30913238, 28304757, 28304490, 28010432, 30912923,
    28313012, 30639490, 28304308, 30912911, 31058397, 28304494, 28313016,
    28304476, 30912945, 30913209, 28313011, 30639488, 30639667, 30639449,
    28340601, 30913067, 28304151, 30913232, 28303975, 30912949, 28304286,
    30639677, 30912963, 30913041, 30639459, 31058820, 30913352, 30913019,
    28304257, 31058697, 27915265, 28304627, 30639692, 31058692, 30913330,
    30913360, 30912955, 30913337, 28304284, 28124066, 28307868, 28304312,
    31058395, 31058704, 28304261, 28304612, 31058705, 27824868, 28313007,
    28307879, 30913084, 28304223, 30639698, 30912991, 30912913, 30912906,
    28513447, 30639654, 30639695, 28304172, 27824858, 30639699, 27915307,
    28304401, 27934051, 30639494, 30639482, 28304254, 28010415, 30913391,
    28304752, 28304515, 28304441, 30639704, 30913345, 28056322, 30913342,
    27824852, 28304468, 30912959, 30639676, 31203447, 30913355, 30912940,
    30639452, 27915329, 27934209, 28304006, 30639705, 30913006, 28304730,
    28513444, 30913262, 28313017, 30912961, 28303889, 30913378, 30639700,
    28304195, 30912977, 28304310, 31058384, 28304316, 28087036, 30639468,
    28304186, 30912922, 28307866, 28303834, 28307848, 30639471, 28304093,
    27915045, 28695962, 30913390, 30913241, 27915041, 28304660, 28340599,
    30913029, 28303959, 28304031, 30913055, 28304166, 30639665, 30913076,
    28313021, 30639655, 28303967, 30913039, 31058393, 28304062, 28304724,
    28197734, 28303920, 30913336, 30913200, 28879398, 30639669, 30913326,
    30913000, 28304041, 30913351, 28757109, 30913245, 30639659, 31058818,
    28304442, 30913197, 28340604, 28729125, 30639660, 27915046, 28304130,
    28303988, 30913215, 28307882, 30639453, 30913213, 30913058, 30913349,
    28303958, 28304303, 28513429, 28304545, 28304539, 30639470, 28304528,
    28304169, 30912930, 28729126, 28542998, 31058702, 30913040, 28304579,
    30639666, 30913346, 28307854, 30639480, 30912918, 30639461, 28304697,
    28303907, 31058706, 30913327, 28304034, 30912912, 30913329, 30912926,
    30913077, 28304017, 28304341, 28304533, 30912960, 30639481, 30913380,
    30639493, 30913256, 30639478, 30912981, 30912947, 28303961, 30913022,
    30639467, 28303963, 30639476, 30912989, 28304352, 28304011, 30913064,
    28757108, 28304386, 27824844, 30913226, 28304554, 30913365, 30913383,
    30913210, 28513459, 27915274, 28304433, 30913222, 28304354, 28127590,
    30913043, 30913254, 31058383, 30913218, 30639455, 30913377, 30913002,
    28843623, 31058387, 30913034, 30912956, 28828449, 31058391, 28260561,
    30913333, 28304247, 28010423, 28304486, 30912984, 30912921, 28304394,
    28819952, 30913012, 28304803, 28304364, 28695964, 30639675, 28304606,
    28304090, 28194444, 28828453, 31058390, 28313014, 30913236, 30913240,
    30912998, 30912905, 30912917, 30913061, 28304263, 30639495, 27915238,
    30912924, 30913013, 30913246, 30639483, 31203449, 30913358, 28010420,
    28194097, 30639477, 30639475, 30912992, 30639486, 28010412, 28272500,
    30912934, 30912920, 28303982, 30913356, 30913202, 30912966, 30913066,
    30913038, 30913255, 30639492, 30913050, 30912952, 31058380, 31058701,
    30736069, 30913049, 28304678, 30912979, 30913340, 30913206, 27824876,
    28345490, 30912962, 30913242, 28304080, 30913233, 28304152, 30913250,
    30913332, 30912927, 30913219, 30639668, 30912948, 30913251, 30912988,
    30912939, 30639709, 31203452, 30913253, 30912983, 30913224, 28304726,
    28304276, 28303984, 30912908, 30912916, 30913382, 28307887, 30912973,
    30913248, 30913348, 31058708, 30912997, 30639474, 30913015, 30913341,
    28304003, 30912999, 28304047, 30913214, 30913364, 28304070, 31058377,
    30912938, 30913021, 30912976, 30913208, 30913008, 31058385, 31058822,
    28313023, 28303965, 30913388, 30913024, 30913249, 30913007, 28828455,
    31058707, 31058405, 31058403, 30913004, 28250725, 30912951, 30913205,
    30913028, 28304149, 31058367, 30913371, 28304007, 31058394, 30912985,
    30912946, 28343206, 30912970, 28304020, 27824838, 28543000, 30913261,
    30912980, 30913069, 31058821, 30913199, 31058699, 30913239, 30912974,
    28304142, 28303933, 31058368, 30913331, 30913046, 30913056, 30913087,
    31058370, 30913031, 30912986, 28828451, 30912968, 30912975, 28197731,
    30913018, 31058695, 31203444, 30912967, 30913079, 30912958, 30912910,
    30913367, 30913016, 28303979, 30913370, 30913014, 30912944, 30913375,
    30913243, 30913328, 30913047, 30912965, 30624168, 30913070, 28340609,
    31058369, 30913389, 28343209, 30912900, 28304129, 28304798, 28343204,
    30912964, 30913252, 30913054, 30913230, 30912933, 30913344, 28313031,
    30913369, 30913033, 30913030, 28273730, 30912995, 30912994, 30913035,
    30913212, 30913057, 27915343, 30912937, 28304315, 30913017, 28303897,
    30913044, 30913260, 31058693, 30912971, 31058381, 27824872, 30913059,
    30913082, 27824865, 28304761, 30912935,
];