$('#text-original').bind('input', function() {
	var original = $(this).val();
	var furi = convertToFuri(original);
	$('#text-furi').html(furi);
});

function convertToFuri(text) {
	var furi = '';

	// Input pattern is "kanjikana(kana)"
	var re = /([^()]*)\(([^()]*)\)/i;

	// Replace parentheses
	text = text.replace(/（/g, '(');
	text = text.replace(/）/g, ')');

	// First match
	var parts = text.match(re);

	while (parts && parts[1]) {

		var kanjikana = parts[1];
		var kana = parts[2];

		if (kana == '') {
			// Kana is empty, don't convert these kanjis, append directly
			furi += kanjikana;

		} else {
			var i = 0; // Kanjikana pointer
			var j = 0; // Kana pointer

			for (; i < kanjikana.length; i++) {
				if (isKana(kanjikana.charAt(i))) {
					// Kana found, append directly
					furi += kanjikana.charAt(i);
				} else {
					// Kanji found, find next kana
					for (var i2 = i + 1; !isKana(kanjikana.charAt(i2)) && i2 < kanjikana.length; i2++) {}
					// Find matching kana
					for (var j2 = j + 1; kana.charAt(j2) != kanjikana.charAt(i2) && j2 < kana.length; j2++) {}

					var furiKanji = kanjikana.slice(i, i2);
					var furiKana = kana.slice(j, j2);
					furi += '{{{furi(' + furiKanji + ',' + furiKana + ')}}}';

					// Minus 1 to compensate the increment at end of for loop
					i = i2 - 1;
					j = j2 + 1;
				}
			}
		}

		// Remove first matched part from string and rematch
		text = text.substring(parts[0].length);
		parts = text.match(re);
	}

	// Append whatever remains
	furi += text;

	return furi;
}

var kana = [
	'ぁ', 'あ', 'ぃ', 'い', 'ぅ', 'う', 'ぇ', 'え', 'ぉ', 'お', 'か', 'が', 'き', 'ぎ',
	'く', 'ぐ', 'け', 'げ', 'こ', 'ご', 'さ', 'ざ', 'し', 'じ', 'す', 'ず', 'せ', 'ぜ',
	'そ', 'ぞ', 'た', 'だ', 'ち', 'ぢ', 'っ', 'つ', 'づ', 'て', 'で', 'と', 'ど', 'な',
	'に', 'ぬ', 'ね', 'の', 'は', 'ば', 'ぱ', 'ひ', 'び', 'ぴ', 'ふ', 'ぶ', 'ぷ', 'へ',
	'べ', 'ぺ', 'ほ', 'ぼ', 'ぽ', 'ま', 'み', 'む', 'め', 'も', 'ゃ', 'や', 'ゅ', 'ゆ',
	'ょ', 'よ', 'ら', 'り', 'る', 'れ', 'ろ', 'ゎ', 'わ', 'ゐ', 'ゑ', 'を', 'ん', 'ゔ',
	'ァ', 'ア', 'ィ', 'イ', 'ゥ', 'ウ', 'ェ', 'エ', 'ォ', 'オ', 'ヵ', 'カ', 'ガ', 'キ', 'ギ',
	'ク', 'グ', 'ヶ', 'ケ', 'ゲ', 'コ', 'ゴ', 'サ', 'ザ', 'シ', 'ジ', 'ス', 'ズ', 'セ', 'ゼ',
	'ソ', 'ゾ', 'タ', 'ダ', 'チ', 'ヂ', 'ッ', 'ツ', 'ヅ', 'テ', 'デ', 'ト', 'ド', 'ナ', 'ニ',
	'ヌ', 'ネ', 'ノ', 'ハ', 'バ', 'パ', 'ヒ', 'ビ', 'ピ', 'フ', 'ブ', 'プ', 'ヘ', 'ベ', 'ペ',
	'ホ', 'ボ', 'ポ', 'マ', 'ミ', 'ム', 'メ', 'モ', 'ャ', 'ヤ', 'ュ', 'ユ', 'ョ', 'ヨ', 'ラ',
	'リ', 'ル', 'レ', 'ロ', 'ヮ', 'ワ', 'ヷ', 'ヴ', 'ヰ', 'ヸ', 'ヱ', 'ヹ', 'ヲ', 'ヺ', 'ン',
	// Ignore punctuations like kana
	'、', '。',
];

function isKana(char) {
	return kana.indexOf(char) != -1;
}