import React from "react";
import Link from "next/link";
import styles from "../styles/footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p>Copyright &copy; DJ Events 2023</p>
      <p>
        <Link legacyBehavior href="/about">
          About This Project
        </Link>
      </p>
    </footer>
  );
}
