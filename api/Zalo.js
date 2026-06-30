export default async function handler(req, res) {
  if (req.method === 'POST') {
    const data = req.body;
    
    if (data && data.message && data.message.text) {
      const senderName = data.sender.name;
      const messageText = data.message.text;
      
      const textToSend = `Có tin nhắn Zalo mới từ: ${senderName}\nNội dung: ${messageText}`;
      
      const telegramUrl = `https://api.telegram.org/bot8957211667:AAGJ98_8c6HssrGYxuPRDT9JV-QL8xYqhTs/sendMessage`;
      
      await fetch(telegramUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          chat_id: "8957211667",
          text: textToSend
        })
      });
    }
    return res.status(200).send('OK');
  }
  return res.status(405).send('Method Not Allowed');
}

