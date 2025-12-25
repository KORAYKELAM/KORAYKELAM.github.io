export type Lang = "en" | "tr";

export const labels: Record<Lang, any> = {
  en: {
    nav: { projects: "Projects", publications: "Publications" },

    heroBadge: "Online • Portfolio",
    heroTitle: "Koray Kelam",
    heroLead:
      "Researcher · Engineer · Curious Mind. I build clean solutions, ship projects, and publish what I learn.",

    cta: { projects: "Projects", publications: "Publications" },

    stats: {
      focusLabel: "Focus",
      focusValue: "Computer Vision • ML • Robotics",
      findLabel: "What you’ll find",
      findValue: "Projects, papers, and demos",
      curLabel: "Currently",
      curValue: "Building & learning daily",
    },

    projects: {
      title: "Projects",
      subtitle: "A few highlights. Hover the cards.",
      openRepo: "Open repo",
      seeDetails: "See details",
    },

    // Project card content (titles/descriptions/tags)
    projectCards: {
      p1: {
        title: "Project Title #1",
        year: "2025",
        desc: "One-liner description of what this does and why it’s cool.",
        tags: ["Python", "Computer Vision", "OpenCV"],
        linkText: "Open repo",
      },
      p2: {
        title: "Project Title #2",
        year: "2024",
        desc: "Another short description. Replace with your real project.",
        tags: ["PyTorch", "ML", "Data"],
        linkText: "See details",
      },
    },

    tags: {
      python: "Python",
      cv: "Computer Vision",
      opencv: "OpenCV",
      pytorch: "PyTorch",
      ml: "ML",
      data: "Data",
    },

    theme: {
      light: "Light",
      dark: "Dark",
      aria: "Toggle theme",
    },

    publications: {
      title: "Publications",
      subtitle: "Peer-reviewed work and academic outputs.",
      readSD: "Read on ScienceDirect →",
      doi: "DOI:",

      paper1: {
        title: "A new trochoidal milling strategy for high-performance CNC machining",
        venue: "Journal of Manufacturing Processes • Volume 157 • 17 Jan 2026 • pp. 747–762",
        authorsPrefix: "Mahmoud Alipour Sougavabar · ",
        authorsHighlight: "Koray Kelam",
        authorsSuffix: " · Ismail Lazoglu",
        summary:
          "Proposes an adaptive trochoidal toolpath strategy with stepover modulation and a custom G-code approach to reduce load fluctuations and improve efficiency in high-performance CNC milling.",
        cta: "Read on ScienceDirect →",
      },
    },

    footer: (y: number) => `© ${y} Koray Kelam · Built with Astro + Tailwind`,
  },

  tr: {
    nav: { projects: "Projeler", publications: "Yayınlar" },

    heroBadge: "Online • Portföy",
    heroTitle: "Koray Kelam",
    heroLead:
      "Araştırmacı · Mühendis · Meraklı zihin. Temiz çözümler üretir, projeler geliştirir ve öğrendiklerimi paylaşırım.",

    cta: { projects: "Projeler", publications: "Yayınlar" },

    stats: {
      focusLabel: "Odak",
      focusValue: "Bilgisayarlı Görü • ML • Robotik",
      findLabel: "İçerik",
      findValue: "Projeler, makaleler ve demolar",
      curLabel: "Şu an",
      curValue: "Her gün üretim & öğrenme",
    },

    projects: {
      title: "Projeler",
      subtitle: "Öne çıkanlar. Kartların üzerine gel.",
      openRepo: "Repo'yu aç",
      seeDetails: "Detaylar",
    },

    projectCards: {
      p1: {
        title: "Proje Başlığı #1",
        year: "2025",
        desc: "Bu projenin ne yaptığını ve neden iyi olduğunu tek cümleyle özetle.",
        tags: ["Python", "Bilgisayarlı Görü", "OpenCV"],
        linkText: "Repo'yu aç",
      },
      p2: {
        title: "Proje Başlığı #2",
        year: "2024",
        desc: "Kısa açıklama. Gerçek projenle değiştir.",
        tags: ["PyTorch", "Makine Öğrenmesi", "Veri"],
        linkText: "Detaylar",
      },
    },

    tags: {
      python: "Python",
      cv: "Bilgisayarlı Görü",
      opencv: "OpenCV",
      pytorch: "PyTorch",
      ml: "Makine Öğrenmesi",
      data: "Veri",
    },

    theme: {
      light: "Açık",
      dark: "Koyu",
      aria: "Tema değiştir",
    },

    publications: {
      title: "Yayınlar",
      subtitle: "Hakemli çalışmalar ve akademik çıktılar.",
      readSD: "ScienceDirect'te oku →",
      doi: "DOI:",

      paper1: {
        title: "Yüksek performanslı CNC işleme için yeni bir trokoidal frezeleme stratejisi",
        venue: "Journal of Manufacturing Processes • Cilt 157 • 17 Oca 2026 • ss. 747–762",
        authorsPrefix: "Mahmoud Alipour Sougavabar · ",
        authorsHighlight: "Koray Kelam",
        authorsSuffix: " · İsmail Lazoğlu",
        summary:
          "Yük dalgalanmalarını azaltmak ve yüksek performanslı CNC frezelemede verimliliği artırmak için adım aralığı modülasyonu ve özel G-code yaklaşımı içeren uyarlanabilir bir trokoidal takım yolu stratejisi önerir.",
        cta: "ScienceDirect'te oku →",
      },
    },

    footer: (y: number) => `© ${y} Koray Kelam · Astro + Tailwind ile`,
  },
};
