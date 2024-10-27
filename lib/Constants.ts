export const Backend_URL = "https://48faa09df6fa9d8c36c26570de535fc0.serveo.net";

export const emojiSet = [
    // Smileys & Emotion
    '😀', '😃', '😄', '😁', '😆', '😅', '😂', '🤣', '😊', '😇', '🙂', '🙃', '😉', '😌', '😍', '🥰', '😘', '😗', '😙', '😚',
    '😋', '😛', '😝', '😜', '🤪', '🤨', '🧐', '🤓', '😎', '🥳', '🤩', '🥸', '😏', '😒', '🙄', '😬', '🤥', '😌', '😔',
    '😪', '🤤', '😴', '😷', '🤒', '🤕', '🤢', '🤮', '🥴', '😵', '🤯', '🤠', '😎', '🤓', '🥺', '😫', '😤', '😠', '😡',
    '😭', '😓', '😩', '😢', '🤧', '🥺', '😟', '😦', '😧', '😨', '😩', '😠', '😡', '🤬', '😷', '🤒', '🤕', '🤢', '🤮',

    // People & Body
    '👶', '👦', '👧', '👨', '👩', '🧑', '👱‍♂️', '👱‍♀️', '🧓', '👴', '👵', '👨‍⚕️', '👩‍⚕️', '👨‍🎓', '👩‍🎓', '👨‍⚖️', '👩‍⚖️',
    '👮‍♂️', '👮‍♀️', '👷‍♂️', '👷‍♀️', '💂‍♂️', '💂‍♀️', '🕵️‍♂️', '🕵️‍♀️', '👨‍🚒', '👩‍🚒', '👨‍✈️', '👩‍✈️', '👨‍🚀', '👩‍🚀',
    '👨‍🔧', '👩‍🔧', '👨‍💻', '👩‍💻', '👨‍🎤', '👩‍🎤', '👨‍🏫', '👩‍🏫', '👨‍🍳', '👩‍🍳', '🧑‍🍳', '👨‍🌾', '👩‍🌾',

    // Animals & Nature
    '🐶', '🐱', '🐭', '🐹', '🐰', '🦊', '🐻', '🐼', '🐨', '🐯', '🦁', '🐮', '🐷', '🐸', '🐵', '🐔', '🐧', '🐦', '🐤', '🐣',
    '🦆', '🦅', '🦉', '🦇', '🐺', '🐗', '🐴', '🦄', '🐝', '🐛', '🦋', '🐌', '🐞', '🐜', '🦟', '🦠', '🐢', '🐍', '🦕', '🦖',
    '🦎', '🐙', '🦑', '🦞', '🦀', '🐠', '🐟', '🐡', '🐬', '🦭', '🐳', '🐋', '🦈', '🐊', '🐅', '🐆', '🐘', '🦏', '🦛', '🦧',
    '🦓', '🦍', '🐫', '🦘', '🦒', '🐂', '🐄', '🐎', '🐖', '🐏', '🐑', '🐐', '🦙', '🦝', '🦢', '🦜', '🦩', '🦚', '🐓', '🐣',
    '🌸', '🌼', '🌻', '🌹', '🌷', '🌱', '🌲', '🌳', '🌵', '🌾', '🍀', '🍁', '🍂', '🍃', '🌿', '🍄', '🌰', '🌍', '🌎', '🌏',

    // Food & Drink
    '🍏', '🍎', '🍐', '🍊', '🍋', '🍌', '🍉', '🍇', '🍓', '🍈', '🍒', '🍑', '🍍', '🥭', '🍅', '🍆', '🥑', '🥦', '🥒', '🌽',
    '🌶', '🥕', '🍄', '🥔', '🍞', '🥐', '🥖', '🥨', '🥞', '🧇', '🥯', '🥓', '🥩', '🍗', '🍖', '🍤', '🍣', '🍱', '🍛', '🍜',
    '🍝', '🍲', '🍿', '🥡', '🍦', '🍩', '🍪', '🍰', '🎂', '🍮', '🍫', '🍬', '🍭', '🍯', '🍼', '☕', '🍵', '🍻', '🥂',

    // Travel & Places
    '🚗', '🚕', '🚙', '🚌', '🚎', '🏎', '🚓', '🚑', '🚒', '🚚', '🚛', '🚜', '🛵', '🏍', '🚲', '🛴', '🚨', '🚔', '🚍', '🚠',
    '🚡', '🚃', '🚋', '🚝', '🚄', '🚅', '🚈', '🚂', '✈️', '🛫', '🛬', '🚁', '🛸', '⛵', '🚤', '🛥', '🛳', '🛶', '🚢', '🗽',
    '🗿', '🗼', '🗻', '⛲', '🎡', '🎢', '🎠', '⛺', '🏞', '🌄', '🌅', '🏖', '🏝', '🏜', '🏰', '🏯', '🏟', '🕍', '⛩',

    // Activities & Sports
    '⚽', '🏀', '🏈', '⚾', '🎾', '🏐', '🏉', '🎳', '⛳', '🏒', '🏓', '🏸', '🥅', '🎱', '🎯', '🎣', '🤿', '🛹', '🏋️‍♂️', '🏋️‍♀️',
    '🤸‍♂️', '🤸‍♀️', '⛹️‍♂️', '⛹️‍♀️', '🤾‍♂️', '🤾‍♀️', '🏌️‍♂️', '🏌️‍♀️', '🏄‍♂️', '🏄‍♀️', '🏊‍♂️', '🏊‍♀️', '🤽‍♂️', '🤽‍♀️',
    '🚴‍♂️', '🚴‍♀️', '🚵‍♂️', '🚵‍♀️', '🤹‍♂️', '🤹‍♀️', '🧘‍♂️', '🧘‍♀️', '🎿', '🛷', '⛷', '🏂', '🥌', '🎽', '🏅', '🥇', '🥈', '🥉',

    // Objects & Symbols
    '⌚', '📱', '📲', '💻', '⌨️', '🖥', '🖨', '🖱', '🖲', '💽', '💾', '💿', '📀', '📷', '📹', '🎥', '📞', '☎️', '📟', '📠',
    '📺', '📻', '🎙', '🎚', '🎛', '⏰', '⏱', '⏲', '🕰', '🧭', '💡', '🔦', '🏮', '📓', '📔', '📒', '📚', '📖', '🔒', '🔑',
    '🗝', '🔏', '🔮', '🧿', '💈', '⚗️', '🔬', '🔭', '📡', '🕹', '🎮', '🧩', '🧸', '🎭', '🎨', '🖌', '🖍', '🖊',

    // Random Emojis to reach 1000
    '🤖', '🎃', '🧙‍♀️', '🦸‍♂️', '🦸‍♀️', '🧚‍♂️', '🧚‍♀️', '👻', '👽', '💀', '🤡', '🧙‍♂️', '🧟‍♂️', '🧟‍♀️', '🤖',
    '👾', '🎄', '🎆', '🎇', '🎈', '🪄', '🧞‍♂️', '🧞‍♀️', '🎉', '🎊', '✨', '🌟', '💫', '🌈', '☀️', '🌤', '⛅', '🌥',
    '🌦', '☔', '🌧', '🌨', '❄️', '☃️', '🌬', '🌪', '🌀', '🌈', '🔥', '💧', '🌊', '🍂', '🌪', '🌋', '🧊', '💨',
    '🌌', '🌠', '🎇', '⭐', '☄️', '🔮', '🧿', '⚡', '🌈', '🕊', '🎶', '🎵', '🎤', '🎧', '🎼', '🎹', '🥁', '🎻', '🎺',
    '🎷', '🪕', '📯', '📢', '📣', '🔔', '🎊', '🎉', '🎈', '🎏', '🎌', '🏮', '📅', '📆', '📇', '🗓', '📇', '✉️', '📬', '📭',
    '📦', '📤', '📥', '📦', '📈', '📉', '📊', '📋', '📖', '📗', '📘', '📙', '📕', '📚', '📓', '📒', '📔', '📕', '📑', '🔖',
    '🏷', '🏷️', '📌', '📍', '✂️', '🔗', '📎', '🖇', '📏', '📐', '🖌', '🖍', '✏️', '🖊', '🖊️', '💻', '⌨️', '🖥', '💾',
    '💽', '💿', '📀', '📱', '📲', '☎️', '📞', '📟', '📠', '📺', '📻', '📡', '📚', '🔒', '🔑', '🔏', '🔮', '🧿', '🔬',
    '🔭', '⚗️', '🧪', '🧬', '🔋', '💡', '🕯', '🪔', '💡', '🕳', '🔍', '🔎', '🗑', '🚮', '🚰', '🗑', '🚮', '♻️', '🔄',
    '⚠️', '🚸', '♿', '🔞', '🔑', '🪙', '🪙', '🗡', '⚔️', '🪚', '🔧', '🔩', '🔨', '🪓', '🧰', '🧲', '🔮', '⚙️', '🔭', '🔬'
];



  