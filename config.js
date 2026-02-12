// ============================================
// 💝 CUSTOMIZE YOUR VALENTINE'S WEBSITE HERE 💝
// ============================================

const CONFIG = {
    // Your Valentine's name that will appear in the title
    // Example: "Jade", "Sarah", "Mike"
    valentineName: "Pitanje za moju wifey 💕",

    // The title that appears in the browser tab
    // You can use emojis! 💝 💖 💗 💓 💞 💕
    pageTitle: "Valentajn",

    // Floating emojis that appear in the background
    // Find more emojis at: https://emojipedia.org
    floatingEmojis: {
        hearts: ['🤍','💍','🤍','🤍','🤍','💍','🤍','🤍'],  // Heart emojis
        bears: ['🧸','🐱', '🌺','🐱']                       // Cute bear emojis
    },

    // Questions and answers
    // Customize each question and its possible responses
    questions: {
        first: {
            text: "Koga najviše voliš trenutno",                                    // First interaction
            yesBtn: "Mici 🐱",                                             // Text for "Yes" button
            noBtn: "Nisam sigurna",                                               // Text for "No" button
            secretAnswer: "JOVANAAAAAAA 💍❤️"           // Secret hover message
        },
        second: {
            text: "Koliko me voliš, al u procentima :)  ?",                          // For the love meter
            startText: "",                                   // Text before the percentage
            nextBtn: "Sledeće pitanje"                                         // Text for the next button
        },
        third: {
            text: "Šta ja (Jovan), volim najviše na svetu?", // The big question!
            yesBtn: "Malog krpelja",                                             // Text for "Yes" button
            noBtn: "Programerski keššš"                                                 // Text for "No" button
        }
    },

    // Love meter messages
    // They show up depending on how far they slide the meter
    loveMessages: {
        extreme: "SOOOOOOOO VERI MAAAAČČ 🤍🤍🤍 ",  // Shows when they go past 5000%
        high: "PREVIŠEEEEEEE 🥰",              // Shows when they go past 1000%
        normal: "MNOGO"                           // Shows when they go past 100%
    },

    // Messages that appear after they say "Yes!"
    celebration: {
        title: "🌺🌺🌺🌺🌺🌺🌺🌺🌺🌺",
        message: "Volim teeeeee 😙",
        emojis: ""  // These will bounce around
    },

    // Color scheme for the website
    // Use https://colorhunt.co or https://coolors.co to find beautiful color combinations
    colors: {
        backgroundStart: "#ffafbd",      // Gradient start (try pastel colors for a soft look)
        backgroundEnd: "#ffc3a0",        // Gradient end (should complement backgroundStart)
        buttonBackground: "#ff6b6b",     // Button color (should stand out against the background)
        buttonHover: "#ff8787",          // Button hover color (slightly lighter than buttonBackground)
        textColor: "#ff4757"             // Text color (make sure it's readable!)
    },

    // Animation settings
    // Adjust these if you want faster/slower animations
    animations: {
        floatDuration: "15s",           // How long it takes hearts to float up (10-20s recommended)
        floatDistance: "50px",          // How far hearts move sideways (30-70px recommended)
        bounceSpeed: "0.5s",            // Speed of bouncing animations (0.3-0.7s recommended)
        heartExplosionSize: 1.5         // Size of heart explosion effect (1.2-2.0 recommended)
    },

    // Background Music (Optional)
    // Add your own music URL after getting proper licenses
    music: {
        enabled: false,                     // Music feature is enabled
        autoplay: false,                    // Try to autoplay (note: some browsers may block this)
        musicUrl: "https://res.cloudinary.com/dncywqfpb/video/upload/v1738399057/music_qrhjvy.mp3", // Music streaming URL
        startText: "🎵 Play Music",        // Button text to start music
        stopText: "🔇 Stop Music",         // Button text to stop music
        volume: 0.5                        // Volume level (0.0 to 1.0)
    }
};

// Don't modify anything below this line unless you know what you're doing
window.VALENTINE_CONFIG = CONFIG; 