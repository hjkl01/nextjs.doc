import React from "react";
import { DocsThemeConfig } from "nextra-theme-docs";

const config: DocsThemeConfig = {
  // logo: <span>My Project</span>,
  logo: (
    <>
      <svg width="24" height="24" viewBox="0 0 24 24">
        <path
          fill="currentColor"
          d="M14.683 14.828a4.055 4.055 0 0 1-1.272.858a4.002 4.002 0 0 1-4.875-1.45l-1.658 1.119a6.063 6.063 0 0 0 1.621 1.62a5.963 5.963 0 0 0 2.148.903a6.035 6.035 0 0 0 3.542-.35a6.048 6.048 0 0 0 1.907-1.284c.272-.271.52-.571.734-.889l-1.658-1.119a4.147 4.147 0 0 1-.489.592z M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10s10-4.486 10-10S17.514 2 12 2zm0 2c2.953 0 5.531 1.613 6.918 4H5.082C6.469 5.613 9.047 4 12 4zm0 16c-4.411 0-8-3.589-8-8c0-.691.098-1.359.264-2H5v1a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2h2a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2v-1h.736c.166.641.264 1.309.264 2c0 4.411-3.589 8-8 8z"
        />
      </svg>
      <span style={{ marginLeft: ".4em", fontWeight: 800 }}>
        My Cool Project
      </span>
    </>
  ),
  // banner: {
  //   key: "2.0-release",
  //   text: (
  //     <a href="https://nextra.site" target="_blank">
  //       🎉 Nextra 2.0 is released. Read more →
  //     </a>
  //   ),
  // },
  project: {
    link: "https://github.com/shuding/nextra-docs-template",
    // icon: (
    //   <svg width="24" height="24" viewBox="0 0 256 256">
    //     <path
    //       fill="currentColor"
    //       d="m231.9 169.8l-94.8 65.6a15.7 15.7 0 0 1-18.2 0l-94.8-65.6a16.1 16.1 0 0 1-6.4-17.3L45 50a12 12 0 0 1 22.9-1.1L88.5 104h79l20.6-55.1A12 12 0 0 1 211 50l27.3 102.5a16.1 16.1 0 0 1-6.4 17.3Z"
    //     ></path>
    //   </svg>
    // ),
  },
  sidebar: {
    titleComponent({ title, type }) {
      if (type === "separator") {
        return (
          <div style={{ background: "cyan", textAlign: "center" }}>{title}</div>
        );
      }
      if (title === "About") {
        return <>❓ {title}</>;
      }
      return <>👉 {title}</>;
    },
    defaultMenuCollapseLevel: 1,
    autoCollapse: true,
    toggleButton: true,
  },
  toc: {
    backToTop: true,
  },
  navigation: {
    prev: true,
    next: true,
  },

  chat: {
    link: "https://discord.com",
  },
  docsRepositoryBase: "https://github.com/shuding/nextra-docs-template",
  footer: {
    // text: "Nextra Docs Template",
    text: (
      <span>
        MIT {new Date().getFullYear()} ©{" "}
        <a href="https://nextra.site" target="_blank">
          Nextra
        </a>
        .
      </span>
    ),
  },

  themeSwitch: {
    useOptions() {
      return {
        light: "Light",
        dark: "Dark",
        system: "System",
      };
    },
  },
};

export default config;
