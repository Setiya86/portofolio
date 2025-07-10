"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import Image from "next/image";

export default function Home() {
  const [repos, setRepos] = useState<{
    id: number;
    name: string;
    language: string | null;
    html_url: string;
    description: string | null;
    stargazers_count: number;
  }[]>([]);

  const [error, setError] = useState<string | null>(null);
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const res = await axios.get("https://api.github.com/users/Setiya86/repos");
        const starredRepos = res.data
          .filter((repo: any) => repo.stargazers_count > 0)
          .sort((a: any, b: any) => b.stargazers_count - a.stargazers_count);
        setRepos(starredRepos);
      } catch (err) {
        console.error("GitHub API error:", err);
        setError("Gagal mengambil data repositori.");
      }
    };

    fetchRepos();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch("https://formsubmit.co/YOUR_EMAIL_HERE", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify({ ...form })
      });
      if (response.ok) {
        alert("Pesan berhasil dikirim!");
        setForm({ name: "", email: "", message: "" });
      } else {
        alert("Terjadi kesalahan saat mengirim pesan.");
      }
    } catch (err) {
      alert("Gagal menghubungi server.");
    }
  };


  return (
    <main className="min-h-screen bg-black text-white font-sans scroll-smooth">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full bg-black bg-opacity-90 z-50 shadow border-b border-gray-700">
        <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-3">
          <span className="text-lg font-semibold">CaturSD</span>
          <div className="space-x-4">
            <a href="#about" className="hover:underline text-gray-300">Tentang</a>
            <a href="#skills" className="hover:underline text-gray-300">Skill</a>
            <a href="#projects" className="hover:underline text-gray-300">Proyek</a>
            {/* <a href="#certificates" className="hover:underline text-gray-300">Sertifikat</a> */}
            <a href="#contact" className="hover:underline text-gray-300">Kontak</a>
          </div>
        </div>
      </nav>

      <div className="pt-24 px-6 py-10">
        {/* Hero Section */}
        <header className="flex flex-col md:flex-row gap-8 items-center justify-between mb-12">
          <div className="md:w-1/2">
            <h1 className="text-4xl font-bold mb-2">Catur Setiya Darma</h1>
            <p className="text-gray-400 mb-4">Backend Developer | Sistem Informasi Student</p>
            <p className="text-gray-300 mb-6">
              Saya adalah mahasiswa Sistem Informasi semester 6 di Universitas Jenderal Achmad Yani Yogyakarta dengan ketertarikan tinggi di bidang pengembangan backend. Saya biasa menggunakan Flask dan Laravel untuk membangun API dan sistem manajemen data.
            </p>
            <div className="flex gap-4">
              <a href="https://wa.me/628975770056" target="_blank" rel="noopener noreferrer" className="px-4 py-2 border border-white text-white rounded hover:bg-white hover:text-black transition">WhatsApp</a>
              <a href="https://www.linkedin.com/in/catur-setiya-dharma-83aa742b2" target="_blank" rel="noopener noreferrer" className="px-4 py-2 border border-white text-white rounded hover:bg-white hover:text-black transition">LinkedIn</a>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <div className="relative w-64 h-64 rounded-full overflow-hidden border-4 border-white shadow-lg">
              <Image src="/profile.jpg" alt="Foto Catur" fill className="object-cover" />
            </div>
          </div>
        </header>

        {error && <div className="bg-red-500 text-white p-4 rounded mb-6">{error}</div>}

        {/* About Section */}
        <section id="about" className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Tentang Saya</h2>
          <p className="text-gray-300 mb-2">Saya adalah mahasiswa Sistem Informasi semester 6 di Universitas Jenderal Achmad Yani Yogyakarta yang memiliki minat tinggi dan dedikasi dalam bidang Backend Development. Saya telah mengembangkan beberapa proyek website dengan fokus pada sisi backend, menggunakan framework Flask (Python) dan Laravel (PHP).</p>
          <p className="text-gray-300">Saya terbiasa bekerja dengan MySQL dan MongoDB sebagai basis data, serta memahami penggunaan HTML untuk kebutuhan frontend dasar. Dalam pengembangan dan kolaborasi, saya aktif menggunakan GitHub dan Postman untuk testing API. Saya selalu antusias dalam mempelajari teknologi baru di bidang backend dan senang membangun solusi sistem yang efisien dan terstruktur.</p>
        </section>

        {/* Skill Section */}
        <section id="skills" className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Skill</h2>
          <div className="grid grid-cols-2 md:grid-cols-7 gap-4">
            <div className="bg-white p-4 rounded border border-white flex flex-col items-center justify-center">
              <Image src="/skills/html.png" alt="HTML" width={68} height={68} />
            </div>
            <div className="bg-white p-4 rounded border border-white flex flex-col items-center justify-center">
              <Image src="/skills/PHP.png" alt="PHP" width={68} height={68} />
            </div>
            <div className="bg-white p-4 rounded border border-white flex flex-col items-center justify-center">
              <Image src="/skills/python.png" alt="Python" width={68} height={68} />
            </div>
            <div className="bg-white p-4 rounded border border-white flex flex-col items-center justify-center">
              <Image src="/skills/flask.png" alt="Flask" width={48} height={48} />
            </div>
            <div className="bg-white p-4 rounded border border-white flex flex-col items-center justify-center">
              <Image src="/skills/laravel.png" alt="Laravel" width={128} height={128} />
            </div>
            <div className="bg-white p-4 rounded border border-white flex flex-col items-center justify-center">
              <Image src="/skills/MySQL.svg" alt="MySQL" width={108} height={108} />
            </div>
            <div className="bg-white p-4 rounded border border-white flex flex-col items-center justify-center">
              <Image src="/skills/MongoDB.png" alt="MongoDB" width={128} height={128} />
            </div>
          </div>
        </section>

        {/* Project Section */}
        <section id="projects" className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Proyek</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {repos.map((repo) => (
              <a key={repo.id} href={repo.html_url} target="_blank" rel="noopener noreferrer" className="block bg-white text-black p-4 rounded hover:shadow-lg transition">
                <h3 className="font-bold text-lg">{repo.name}</h3>
                <p className="text-sm text-gray-600">{repo.description || "Tidak ada deskripsi."}</p>
                <p className="text-blue-600 text-sm mt-2">Lihat di GitHub</p>
              </a>
            ))}
          </div>
        </section>

        {/* Certificate Section
        <section id="certificates" className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Sertifikat Kompetensi</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-blue-900 p-4 rounded border border-white">
              <Image src="/certificates/sertifikat-web.png" alt="Web Developer" width={400} height={280} className="rounded mb-2" />
              <h3 className="font-bold text-white">Junior Web Developer</h3>
              <p className="text-sm text-gray-300">BNSP</p>
              <a href="https://example.com/sertifikat-web.pdf" target="_blank" rel="noopener noreferrer" className="text-blue-400 text-sm underline">Lihat Sertifikat</a>
            </div>
            <div className="bg-blue-900 p-4 rounded border border-white">
              <Image src="/certificates/sertifikat-flask.png" alt="Flask" width={400} height={280} className="rounded mb-2" />
              <h3 className="font-bold text-white">Backend Developer Flask</h3>
              <p className="text-sm text-gray-300">Dicoding</p>
              <a href="https://example.com/sertifikat-flask.pdf" target="_blank" rel="noopener noreferrer" className="text-blue-400 text-sm underline">Lihat Sertifikat</a>
            </div>
          </div>
        </section> */}

        {/* Contact Section */}
        <section id="contact" className="mb-12 bg-color-white rounded p-10 max-w-2xl mx-auto">
          <h2 className="text-2xl font-semibold text-white mb-6 text-center">Contact Me</h2>
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <input
              type="text"
              placeholder="Your Name"
              required
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="px-4 py-2 border border-gray-300 rounded bg-gray-200 text-black placeholder-gray-600"
            />
            <input
              type="email"
              placeholder="Your Email"
              required
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="px-4 py-2 border border-gray-300 rounded bg-gray-200 text-black placeholder-gray-600"
            />
            <textarea
              placeholder="Your Message"
              required
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="px-4 py-2 border border-gray-300 rounded bg-gray-200 text-black placeholder-gray-600"
              rows={5}
            />
            <button type="submit" className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600 transition self-start">Send</button>
          </form>
        </section>
      </div>
    </main>
  );
}
