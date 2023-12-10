"use client";
import React, { useEffect, useState } from "react";
import { SlSocialLinkedin, SlSocialGithub, SlSocialInstagram, SlSocialGoogle } from "react-icons/sl";

export default function Footer() {
  const [isScreenSmall, setIsScreenSmall] = useState(false);

  useEffect(() => {
    const updateScreenSize = () => {
      setIsScreenSmall(window.innerWidth > 1026);
    };

    // Memperbarui ukuran layar saat komponen dimuat
    updateScreenSize();

    // Menambahkan event listener untuk memantau perubahan ukuran layar
    window.addEventListener("resize", updateScreenSize);

    // Membersihkan event listener saat komponen dibongkar
    return () => {
      window.removeEventListener("resize", updateScreenSize);
    };
  }, []);
  return (
    <footer className="mb-10 px-4 text-center text-gray-500">
      <small className="mb-2 block text-xs">
        &copy; 2023 Firyal. All rights reserved.
      </small>
      {!isScreenSmall && (
        <ul className="flex gap-x-5 justify-center">
          <li>
            <a href="https://www.linkedin.com/in/firyal-y-salsabila/" target="_blank" rel="noreferrer">
              <SlSocialLinkedin className="w-10 h-10 text-white hover:w-16" />
            </a>
          </li>
          <li>
            <a href="mailto:firsabilac@gmail.com" target="_blank" rel="noreferrer">
              <SlSocialGoogle className="w-10 h-10 text-white hover:w-16" />
            </a>
          </li>
          <li>
            <a href="https://www.github.com/firyal-salsa" target="_blank" rel="noreferrer">
              <SlSocialGithub className="w-10 h-10 text-white hover:w-16" />
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/viola.tte/" target="_blank" rel="noreferrer">
              <SlSocialInstagram className="w-10 h-10 text-white hover:w-16" />
            </a>
          </li>
        </ul>
      )}
    </footer>
  );
}
