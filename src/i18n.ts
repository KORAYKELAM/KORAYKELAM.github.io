export type Lang = "en" | "tr";

export const labels: Record<Lang, any> = {
  en: {
    nav: {
      courseProjects: "Course Projects",
      personalProjects: "Personal Projects",
      publications: "Publications",
    },

    heroBadge: "Online • Portfolio",
    heroTitle: "Koray Kelam",
    heroLead:
      "Researcher · Engineer · Curious Mind. I build clean solutions, ship projects, and publish what I learn.",

    // kept for compatibility (if you still use it anywhere)
    cta: { projects: "Projects", publications: "Publications" },

    stats: {
      focusLabel: "Focus",
      focusValue: "Computer Vision • ML • Robotics",
      findLabel: "What you’ll find",
      findValue: "Projects, papers, and demos",
      curLabel: "Currently",
      curValue: "Building & learning daily",
    },

    // NEW: Course Projects (horizontal scroll uses these)
    courseProjects: {
      title: "Course Projects",
      subtitle: "Scrollable highlights from coursework.",
      openRepo: "Open repo",
      hint: "Tip: Scroll horizontally →",
      items: [
        {
          title: "Project Title #1",
          year: "2025",
          desc: "Short description of the course project.",
          tags: ["Python", "Computer Vision", "OpenCV"],
          linkText: "Open repo",
          videoSrc: "/videos/project1.mp4",
          posterSrc: "/posters/project1.jpg",
          linkHref: "https://www.linkedin.com/posts/koraykelam_we-have-successfully-completed-our-mech-491-activity-7209886103053492225-Ix7A?utm_source=share&utm_medium=member_desktop&rcm=ACoAADBL9sQB_9XF4vCWbbKOPxsrMMjDlbxUocI",
        },
        {
          title: "Project Title #2",
          year: "2024",
          desc: "Another course project.",
          tags: ["PyTorch", "ML", "Data"],
          linkText: "Open repo",
        },
      ],
    },

    // NEW: Personal Projects (same template)
    personalProjects: {
      title: "Personal Projects",
      subtitle: "Things I build outside of class.",
      openRepo: "Open repo",
      hint: "Tip: Scroll horizontally →",
      items: [
        {
          title: "Personal Project #1",
          year: "2025",
          desc: "Short description.",
          tags: ["Robotics", "ROS", "C++"],
          linkText: "Open repo",
        },
      ],
    },

    // kept for compatibility (you can delete later if unused)
    projects: {
      title: "Projects",
      subtitle: "A few highlights. Hover the cards.",
      openRepo: "Open repo",
      seeDetails: "See details",
    },

    // kept for compatibility (you can delete later if unused)
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
      doi: "DOI: 10.1016/j.jmapro.2025.12.033",

      paper1: {
        title: "A new trochoidal milling strategy for high-performance CNC machining",
        venue: "Journal of Manufacturing Processes • Volume 157 • 17 Jan 2026 • pp. 747–762",
        authorsPrefix: "Mahmoud Alipour Sougavabar · ",
        authorsHighlight: "Koray Kelam",
        authorsSuffix: " · Ismail Lazoglu",
        summary:
          "Proposes an adaptive trochoidal toolpath strategy with stepover modulation and a custom G-code approach to reduce load fluctuations and improve efficiency in high-performance CNC milling.",
        cta: "Read on ScienceDirect →",
        linkHref: "https://www.sciencedirect.com/science/article/abs/pii/S1526612525013532?via%3Dihub",
      },
    },

    footer: (y: number) => `© ${y} Koray Kelam · Portfolio`,
  },

  tr: {
    nav: {
      courseProjects: "Ders Projeleri",
      personalProjects: "Kişisel Projeler",
      publications: "Yayınlar",
    },

    heroBadge: "Online • Portföy",
    heroTitle: "Koray Kelam",
    heroLead:
      "Araştırmacı · Mühendis · Meraklı zihin. Temiz çözümler üretir, projeler geliştirir ve öğrendiklerimi paylaşırım.",

    // kept for compatibility (if you still use it anywhere)
    cta: { projects: "Projeler", publications: "Yayınlar" },

    stats: {
      focusLabel: "Odak",
      focusValue: "Bilgisayarlı Görü • ML • Robotik",
      findLabel: "İçerik",
      findValue: "Projeler, makaleler ve demolar",
      curLabel: "Şu an",
      curValue: "Her gün üretim & öğrenme",
    },

    // NEW: Course Projects
    courseProjects: {
      title: "Ders Projeleri",
      subtitle: "Ders kapsamında yaptığım projelerden seçmeler.",
      openRepo: "Repo'yu aç",
      hint: "İpucu: Sağa kaydır →",
      items: [
        {
          title: "Proje Başlığı #1",
          year: "2025",
          desc: "Ders projesi için kısa açıklama.",
          tags: ["Python", "Bilgisayarlı Görü", "OpenCV"],
          linkText: "Repo'yu aç",
          videoSrc: "/videos/project1.mp4",
          posterSrc: "/posters/project1.jpg",
          linkHref: "https://www.linkedin.com/posts/koraykelam_we-have-successfully-completed-our-mech-491-activity-7209886103053492225-Ix7A?utm_source=share&utm_medium=member_desktop&rcm=ACoAADBL9sQB_9XF4vCWbbKOPxsrMMjDlbxUocI",
        },
        {
          title: "Proje Başlığı #2",
          year: "2024",
          desc: "Bir başka ders projesi.",
          tags: ["PyTorch", "Makine Öğrenmesi", "Veri"],
          linkText: "Repo'yu aç",
        },
      ],
    },

    // NEW: Personal Projects
    personalProjects: {
      title: "Kişisel Projeler",
      subtitle: "Ders dışında geliştirdiğim projeler.",
      openRepo: "Repo'yu aç",
      hint: "İpucu: Sağa kaydır →",
      items: [
        {
          title: "Kişisel Proje #1",
          year: "2025",
          desc: "Kısa açıklama.",
          tags: ["Robotik", "ROS", "C++"],
          linkText: "Repo'yu aç",
        },
      ],
    },

    // kept for compatibility (you can delete later if unused)
    projects: {
      title: "Projeler",
      subtitle: "Öne çıkanlar. Kartların üzerine gel.",
      openRepo: "Repo'yu aç",
      seeDetails: "Detaylar",
    },

    // kept for compatibility (you can delete later if unused)
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
      doi: "DOI: 10.1016/j.jmapro.2025.12.033",

      paper1: {
        title: "Yüksek performanslı CNC işleme için yeni bir trokoidal frezeleme stratejisi",
        venue: "Journal of Manufacturing Processes • Cilt 157 • 17 Oca 2026 • ss. 747–762",
        authorsPrefix: "Mahmoud Alipour Sougavabar · ",
        authorsHighlight: "Koray Kelam",
        authorsSuffix: " · İsmail Lazoğlu",
        summary:
          "Yük dalgalanmalarını azaltmak ve yüksek performanslı CNC frezelemede verimliliği artırmak için adım aralığı modülasyonu ve özel G-code yaklaşımı içeren uyarlanabilir bir trokoidal takım yolu stratejisi önerir.",
        cta: "ScienceDirect'te oku →",
        linkHref: "https://www.sciencedirect.com/science/article/abs/pii/S1526612525013532?via%3Dihub",
      },
    },

    footer: (y: number) => `© ${y} Koray Kelam · Portföy`,
  },
};
