"use client";

import React, { useState } from "react";
import Button from "../ui/Button";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const validate = () => {
    const newErrors: { [key: string]: string } = {};
    if (!form.name) newErrors.name = "Name is required";
    if (!form.email) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(form.email)) newErrors.email = "Invalid email";
    if (!form.message) newErrors.message = "Message is required";
    return newErrors;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setSuccess(false);
      return;
    }

    setLoading(true);
    setErrors({});

    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
      setForm({ name: "", email: "", message: "" });
      setTimeout(() => setSuccess(false), 3000);
    }, 400);
  };

  return (
    <section id="contact" className="mx-auto max-w-3xl px-4 py-16">
      <h2 className="text-3xl font-bold text-center mb-8">Contact Me</h2>

      <div className="flex flex-col md:flex-row gap-8">
        {/* Form */}
        <form className="flex-1 flex flex-col gap-4" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            disabled={loading}
            className="rounded border border-zinc-300 bg-white px-3 py-2 text-zinc-950 outline-none transition-colors placeholder:text-zinc-400 focus:border-blue-500 dark:border-zinc-700 dark:bg-zinc-950 dark:text-white dark:placeholder:text-zinc-500"
          />
          {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={form.email}
            onChange={handleChange}
            disabled={loading}
            className="rounded border border-zinc-300 bg-white px-3 py-2 text-zinc-950 outline-none transition-colors placeholder:text-zinc-400 focus:border-blue-500 dark:border-zinc-700 dark:bg-zinc-950 dark:text-white dark:placeholder:text-zinc-500"
          />
          {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}

          <textarea
            name="message"
            placeholder="Your Message"
            value={form.message}
            onChange={handleChange}
            disabled={loading}
            className="h-32 resize-none rounded border border-zinc-300 bg-white px-3 py-2 text-zinc-950 outline-none transition-colors placeholder:text-zinc-400 focus:border-blue-500 dark:border-zinc-700 dark:bg-zinc-950 dark:text-white dark:placeholder:text-zinc-500"
          />
          {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}

          <Button type="submit" loading={loading}>
            {loading ? "Sending..." : "Send Message"}
          </Button>

          {success && <p className="text-green-500 mt-2">Message sent successfully!</p>}
        </form>

        {/* Contact Info */}
        <div className="flex flex-1 flex-col gap-4 text-gray-700 dark:text-zinc-300">
          <p><strong>Email:</strong> youremail@example.com</p>
          <p><strong>GitHub:</strong> <a href="https://github.com" target="_blank" rel="noreferrer">github.com/username</a></p>
          <p><strong>LinkedIn:</strong> <a href="https://linkedin.com" target="_blank" rel="noreferrer">linkedin.com/in/username</a></p>
          <p><strong>Twitter:</strong> <a href="https://twitter.com" target="_blank" rel="noreferrer">@username</a></p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
