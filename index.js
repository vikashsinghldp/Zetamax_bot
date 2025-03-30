require('dotenv').config();
const { Telegraf, Markup } = require('telegraf');

const bot = new Telegraf(process.env.BOT_TOKEN);

// Store user language preferences
const userLanguage = {};

// Language selection menu
const languageMenu = Markup.inlineKeyboard([
    [Markup.button.callback("🇮🇳 हिंदी", "set_hindi"), Markup.button.callback("🇬🇧 English", "set_english")]
]);

// Hindi FAQ menu
const faqMenuHindi = Markup.inlineKeyboard([
    [Markup.button.callback("📌 Zetamax Coin क्या है?", "what_is_zetamax_hi")],
    [Markup.button.callback("📌 Zetamax Coin को कैसे खरीदें?", "buy_zetamax_hi")],
    [Markup.button.callback("📌 क्या निवेश करना सुरक्षित है?", "safe_investment_hi")],
    [Markup.button.callback("📌 Zetamax Coin से कमाई कैसे करें?", "earn_zetamax_hi")],
    [Markup.button.callback("📌 Zetamax Coin को स्टेक कैसे करें?", "stake_zetamax_hi")],
    [Markup.button.callback("📌 क्या इसका कोई मोबाइल ऐप है?", "mobile_app_hi")],
    [Markup.button.callback("📌 क्या यह प्रोडक्ट बेस्ड कंपनी है?", "product_based_hi")],
    [Markup.button.callback("📌 क्या ट्रांजैक्शन चार्ज लगता है?", "transaction_fee_hi")],
    [Markup.button.callback("📌 Zetamax Coin से पैसे कैसे निकालें?", "withdraw_zetamax_hi")],
    [Markup.button.callback("🏠 मुख्य मेनू", "main_menu_hi")]
]);

// English FAQ menu
const faqMenuEnglish = Markup.inlineKeyboard([
    [Markup.button.callback("📌 What is Zetamax Coin?", "what_is_zetamax_en")],
    [Markup.button.callback("📌 How to buy Zetamax Coin?", "buy_zetamax_en")],
    [Markup.button.callback("📌 Is it safe to invest?", "safe_investment_en")],
    [Markup.button.callback("📌 How to earn with Zetamax Coin?", "earn_zetamax_en")],
    [Markup.button.callback("📌 How to stake Zetamax Coin?", "stake_zetamax_en")],
    [Markup.button.callback("📌 Is there a mobile app?", "mobile_app_en")],
    [Markup.button.callback("📌 Is Zetamax Coin product-based?", "product_based_en")],
    [Markup.button.callback("📌 Are there transaction fees?", "transaction_fee_en")],
    [Markup.button.callback("📌 How to withdraw Zetamax Coin?", "withdraw_zetamax_en")],
    [Markup.button.callback("🏠 Main Menu", "main_menu_en")]
]);

// Welcome message with language selection
bot.start((ctx) => {
    ctx.reply("👋 *Welcome to Zetamax!* \nPlease select your language:\n\n🇮🇳 कृपया अपनी भाषा चुनें।\n🇬🇧 Please choose your language.", 
        { parse_mode: "Markdown", ...languageMenu });
});

// Set Hindi as the preferred language
bot.action("set_hindi", (ctx) => {
    userLanguage[ctx.from.id] = "hindi";
    ctx.reply("✅ *आपकी भाषा हिंदी सेट कर दी गई है।*\n\n📌 *Zetamax Coin से जुड़ी जानकारी के लिए नीचे दिए गए विकल्पों में से चुनें:*", 
        { parse_mode: "Markdown", ...faqMenuHindi });
});

// Set English as the preferred language
bot.action("set_english", (ctx) => {
    userLanguage[ctx.from.id] = "english";
    ctx.reply("✅ *Your language is set to English.*\n\n📌 *Select an option below to learn more about Zetamax Coin:*", 
        { parse_mode: "Markdown", ...faqMenuEnglish });
});

// Hindi FAQ responses
bot.action("what_is_zetamax_hi", (ctx) => {
    ctx.reply("✅ *Zetamax Coin* एक *डिजिटल क्रिप्टोकरेंसी* है, जिसे स्मार्ट ट्रांजैक्शन और फाइनेंशियल ग्रोथ के लिए डिज़ाइन किया गया है।");
});
bot.action("buy_zetamax_hi", (ctx) => {
    ctx.reply("✅ आप **[Zetamax ICO Platform](https://ico.zetamax.live/)** पर जाकर Zetamax Coin खरीद सकते हैं।");
});
bot.action("safe_investment_hi", (ctx) => {
    ctx.reply("✅ हाँ, Zetamax Coin *ब्लॉकचेन टेक्नोलॉजी* पर आधारित है, जिससे यह सुरक्षित और पारदर्शी है।");
});
bot.action("earn_zetamax_hi", (ctx) => {
    ctx.reply("✅ *तीन तरीके:* \n1️⃣ *Staking:* Zetamax Coin को स्टेक करके रोज़ाना रिटर्न कमाएं।\n2️⃣ *Referral Bonus:* अपने नेटवर्क में शेयर करके कमीशन कमाएं।\n3️⃣ *10-Level Income:* टीम बनाकर मल्टीपल लेवल से इनकम प्राप्त करें।");
});
bot.action("mobile_app_hi",(ctx)=>{
  ctx.reply("✅ अभी Zetamax Coin के लिए मोबाइल ऐप डेवलप हो रहा है, जल्द ही लॉन्च किया");
})
bot.action("product_based_hi",(ctx)=>{
  ctx.reply("✅ नहीं, Zetamax Coin एक **ब्लॉकचेन-बेस्ड डिजिटल करेंसी** है, जिसे फाइनेंशियल ट्रांजैक्शन्स और इन्वेस्टमेंट के लिए डिज़ाइन");
})
bot.action("transaction_fee_hi",(ctx)=>{
  ctx.reply("✅ नहीं, Zetamax Coin प्लेटफॉर्म पर ट्रांजैक्शन्स के लिए कोई अतिरिक्त चार्ज नहीं लिया जाता है।");
})
bot.action("withdraw_zetamax_hi",(ctx)=>{
  ctx.reply("✅ आप अपने **Zetamax Wallet** से सीधे अपनी क्रिप्टो वॉलेट या एक्सचेंज अकाउंट में ट्रांसफर कर सकते है")
})

bot.action("main_menu_hi", (ctx) => {
    ctx.reply("🏠 *मुख्य मेनू*\n\n📌 *Zetamax Coin से जुड़ी जानकारी के लिए नीचे दिए गए विकल्पों में से चुनें:*", 
        { parse_mode: "Markdown", ...faqMenuHindi });
});

// English FAQ responses
bot.action("what_is_zetamax_en", (ctx) => {
    ctx.reply("✅ *Zetamax Coin* is a *digital cryptocurrency* designed for smart transactions and financial growth.");
});
bot.action("buy_zetamax_en", (ctx) => {
    ctx.reply("✅ You can buy Zetamax Coin on the **[Zetamax ICO Platform](https://ico.zetamax.live/)**.");
});
bot.action("safe_investment_en", (ctx) => {
    ctx.reply("✅ Yes, Zetamax Coin is based on *blockchain technology*, making it secure and transparent.");
});
bot.action("earn_zetamax_en", (ctx) => {
    ctx.reply("✅ *Three ways to earn:* \n1️⃣ *Staking:* Earn daily returns by staking Zetamax Coin.\n2️⃣ *Referral Bonus:* Earn commission by sharing with your network.\n3️⃣ *10-Level Income:* Build a team and earn from multiple levels.");
});
bot.action("stake_zetamax_en", (ctx)=>{
  ctx.reply("✅ Visit the **Zetamax Staking Platform**, choose a staking plan, and start earning rewards.");
})
bot.action("mobile_app_en",(ctx)=>{
  ctx.reply("✅ A **mobile app for Zetamax Coin** is under development and will be launched soon!");

})
bot.action("product_based_en", (ctx)=>{
  ctx.reply("✅ No, **Zetamax Coin is a blockchain-based digital currency** designed for financial transactions and investment.");
})
bot.action("transaction_fee_en", (ctx)=>{
  ctx.reply("✅ **No,** there are **no extra transaction fees** on the Zetamax Coin platform.");
})
bot.action("withdraw_zetamax_en", (ctx)=>{
  ctx.reply("✅ You can withdraw funds from your **Zetamax Wallet** to your **crypto wallet or exchange account**.")
})
bot.action("main_menu_en", (ctx) => {
    ctx.reply("🏠 *Main Menu*\n\n📌 *Select an option below to learn more about Zetamax Coin:*", 
        { parse_mode: "Markdown", ...faqMenuEnglish });
});

// Start the bot
bot.launch();
console.log("🤖 Zetamax Bot is running with multilingual support...");

// Graceful stop
process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));
