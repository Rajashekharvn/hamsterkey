from pyrogram import Client, filters

API_ID = 11284784
API_HASH = "8b0fc26910c096fc28af1e32bc1fe3f7"
BOT_TOKEN = "7189237453:AAEAJHeEGHlFAgBvqNQ_k8M7WYnbsKykm-Y"

app = Client(
    "Test-Bot",
    api_id=API_ID,
    api_hash=API_HASH,
    bot_token=BOT_TOKEN
)

@app.on_message(filters.command("start"))
async def start(_, message):
    await message.reply_text("Hello! I am your bot. How can I help you?")

print("BOT SUCCESSFULLY DEPLOYED !!")

app.run()
