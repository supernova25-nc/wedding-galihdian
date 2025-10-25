import { useState, useRef, useEffect } from "react";
import EmojiPicker, { EmojiClickData } from "emoji-picker-react";

type Message = {
  name: string;
  text: string;
  id: number;
};

export default function GuestbookSection() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [name, setName] = useState("");
  const [text, setText] = useState("");
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const messageBoxRef = useRef<HTMLDivElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !text.trim()) return;
    const id = Date.now();
    setMessages((prev) => [{ name, text, id }, ...prev]);
    setName("");
    setText("");
  };

  useEffect(() => {
    if (messageBoxRef.current) {
      messageBoxRef.current.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [messages]);

  const handleEmojiClick = (emojiData: EmojiClickData) => {
    setText((prev) => prev + emojiData.emoji);
    setShowEmojiPicker(false);
  };

  return (
    <section className="max-w-5xl mx-auto px-4 py-14">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">

        {/* 📨 Ucapan Masuk */}
        <div
          ref={messageBoxRef}
          className="rounded-2xl bg-white p-6 shadow-sm max-h-96 overflow-y-auto order-1 sm:order-2"
        >
          <h3 className="text-2xl font-serif mb-4">Ucapan Masuk</h3>
          <div className="flex flex-col gap-2 pr-2">
            {messages.length === 0 && (
              <p className="text-neutral-500 text-sm">
                Belum ada ucapan. Jadilah yang pertama ✨
              </p>
            )}
            {messages.map((msg) => (
              <div
                key={msg.id}
                className="border rounded-lg p-3 text-sm text-neutral-700 bg-neutral-50 shadow-sm overflow-hidden transition-all"
              >
                <p>
                  <strong>{msg.name}:</strong> {msg.text}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* ✍️ Form Kirim Ucapan */}
        <form
          onSubmit={handleSubmit}
          className="rounded-2xl bg-white p-6 shadow-sm order-2 sm:order-1 relative"
        >
          <h3 className="text-2xl font-serif mb-4">Kirim Ucapan</h3>
          <input
            placeholder="Nama"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full rounded-xl border px-4 py-3 mb-3 focus:ring-2 focus:ring-amber-400"
          />
          <textarea
            placeholder="Tulis ucapan terbaikmu..."
            value={text}
            onChange={(e) => setText(e.target.value)}
            className="w-full rounded-xl border px-4 py-3 mb-2 focus:ring-2 focus:ring-amber-400"
          ></textarea>

          {/* 😄 Tombol emoji */}
          <div className="flex justify-end mb-3 relative">
            <button
              type="button"
              onClick={() => setShowEmojiPicker((prev) => !prev)}
              className="text-2xl hover:scale-110 transition"
            >
              🥰
            </button>

            {showEmojiPicker && (
              <div className="absolute bottom-10 right-0 z-50">
                <EmojiPicker onEmojiClick={handleEmojiClick} />
              </div>
            )}
          </div>

          <button
            type="submit"
            className="w-full inline-flex items-center justify-center gap-2 rounded-2xl bg-neutral-900 text-white px-5 py-3 hover:bg-neutral-800 transition"
          >
            💌 Kirim Ucapan
          </button>
        </form>
      </div>
    </section>
  );
}
