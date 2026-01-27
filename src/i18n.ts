export type Lang = "en" | "tr";

export const labels: Record<Lang, any> = {
  en: {
    nav: {
      courseProjects: "Course & Research Projects",
      personalProjects: "Personal Projects",
      publications: "Publications",
    },

    heroBadge: "Online • Portfolio",
    heroLead:
      "Researcher · Engineer · Turning optimization into practical engineering solutions.",

    stats: {
      focusLabel: "Focus",
      focusValue: "Robotics • Dynamics • Prototyping",
      findLabel: "What you’ll find",
      findValue: "Projects and papers",
      curLabel: "Currently",
      curValue: "Engineering internship at Logitech (Lausanne)",
    },

    courseProjects: {
      title: "Course & Research Projects",
      subtitle: "Highlights from coursework and research.",
      openRepo: "Open repo",
      hint: "Tip: Scroll horizontally →",
      items: [
        {
          title: "MRI-Guided Soft Robotics Research",
          year: "2023",
          desc: "Worked on MRI-guided, magnetically actuated continuum/guidewire robotics, including kinematic modeling, design and manufacturing of an experimental setup & a 3-DOF actuation system, simulation & MRI testing, and OpenCV-based centerline tracking using dual-camera views.",
          tags: ["Design", "Prototyping", "Simulation", "Image Processing"],
          posterSrc: "/posters/research_project1.png",
        },
        {
          title: "B.Sc. Capstone Project",
          year: "2024",
          desc: "Designed, manufactured, and tested a remotely operated underwater vehicle (ROV) and its custom RC console.",
          tags: ["Design", "Prototyping", "Control", "Experimental Validation"],
          linkText: "See Post",
          videoSrc: "/videos/course_project1.mp4",
          posterSrc: "/posters/course_project1.jpg",
          linkHref: "https://www.linkedin.com/posts/koraykelam_we-have-successfully-completed-our-mech-491-activity-7209886103053492225-Ix7A?utm_source=share&utm_medium=member_desktop&rcm=ACoAADBL9sQB_9XF4vCWbbKOPxsrMMjDlbxUocI",
        },
        {
          title: "Restocking Robot for Decathlon",
          year: "2025",
          desc: "Designed, manufactured, and tested a differential-drive mobile robot equipped with a monocular camera, LiDAR, multiple IR sensors, and proprioceptive sensors (IMU and wheel encoders) to autonomously transport items between aisles for restocking in retail environments given the map of the store.",
          tags: ["Mobile Robotics", "Design", "Prototyping", "Control"],
          linkText: "See Post",
          posterSrc: "/posters/course_project2.png",
          linkHref: "https://www.linkedin.com/posts/decathlon-group_decathlonswitzerland-epfl-innovation-activity-7406658107944165377-_h_A?utm_source=share&utm_medium=member_desktop&rcm=ACoAADBL9sQB_9XF4vCWbbKOPxsrMMjDlbxUocI",
        },
      ],
    },

    personalProjects: {
      title: "Personal Projects",
      subtitle: "Things I build outside of class.",
      openRepo: "Open repo",
      hint: "Tip: Scroll horizontally →",
      items: [
        {
          title: "Numerical Analysis & Optimization for Engineers",
          year: "Currently developing",
          desc: "An online, notebook-based course covering core numerical methods for engineers, with a focus on practical implementation and intuitive understanding through Python.",
          tags: ["Numerical Methods", "Optimization", "Scientific Computing", "Python", "Engineering Education"],
          linkText: "Open course repository",
          posterSrc: "/posters/personal_project1.png",
        },
      ],
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
          "Proposes an adaptive trochoidal milling strategy with dynamic stepover control and optimized G-code to reduce cutting forces and machining time, improving efficiency in high-performance CNC milling.",
        cta: "Read on ScienceDirect →",
        linkHref: "https://www.sciencedirect.com/science/article/abs/pii/S1526612525013532?via%3Dihub",
      },
    },

    footer: (y: number) => `© ${y} Koray Kelam · Portfolio`,
  },

  tr: {
    nav: {
      courseProjects: "Ders ve Araştırma Projeleri",
      personalProjects: "Kişisel Projeler",
      publications: "Yayınlar",
    },

    heroBadge: "Online • Portföy",
    heroLead:
      "Araştırmacı · Mühendis · Verimli ve uygulanabilir mühendislik çözümleri geliştiririm.",

    stats: {
      focusLabel: "Odak",
      focusValue: "Robotik • Dinamik • Prototipleme",
      findLabel: "İçerik",
      findValue: "Projeler ve akademik çalışmalar",
      curLabel: "Güncel",
      curValue: "Logitech’te mühendislik stajı (Lozan)",
    },

    courseProjects: {
      title: "Ders ve Araştırma Projeleri",
      subtitle: "Ders ve araştırma kapsamında yaptığım projelerden seçmeler.",
      openRepo: "Repo'yu aç",
      hint: "İpucu: Sağa kaydır →",
      items: [
        {
          title: "MRG Yönlendirmeli Yumuşak Robotik Araştırması",
          year: "2023",
          desc: "MRG yönlendirmeli ve manyetik olarak tahrik edilen bir yumuşak robotik sistem üzerinde çalışıldı; kinematik modelleme, deney düzeneği ve 3 serbestlik dereceli (3-DOF) bir tahrik sisteminin tasarım ve imalatı, simülasyon ve MRG testleri, ve çift kamera görüntülerinden OpenCV tabanlı merkez hat takibi gerçekleştirildi.",
          tags: ["Tasarım", "Prototipleme", "Simülasyon", "Görüntü İşleme"],
          posterSrc: "/posters/research_project1.png",
        },
        {
          title: "Lisans Bitirme Projesi",
          year: "2024",
          desc: "Uzaktan kumandalı bir su altı aracı (ROV) ve kontrol konsolu tasarlanmış, üretilmiş ve farklı koşullarda test edilmiştir.",
          tags: ["Tasarım", "Prototipleme", "Kontrol", "Deneysel Doğrulama"],
          linkText: "Gönderiye git",
          videoSrc: "/videos/course_project1.mp4",
          posterSrc: "/posters/course_project1.jpg",
          linkHref: "https://www.linkedin.com/posts/koraykelam_we-have-successfully-completed-our-mech-491-activity-7209886103053492225-Ix7A?utm_source=share&utm_medium=member_desktop&rcm=ACoAADBL9sQB_9XF4vCWbbKOPxsrMMjDlbxUocI",
        },
        {
          title: "Decathlon için Raf Yenileme Robotu",
          year: "2025",
          desc: "Mağaza haritası kullanılarak perakende ortamlarında raf yenileme amacıyla reyonlar arasında ürünleri otonom olarak taşıyabilen; monoküler kamera, LiDAR, birden çok IR sensör ve proprioseptif sensörler (IMU ve tekerlek enkoderleri) ile donatılmış diferansiyel sürüşlü bir mobil robot tasarlandı, üretildi ve test edildi.",
          tags: ["Mobil Robotik", "Tasarım", "Prototipleme", "Kontrol"],
          linkText: "Gönderiyi Gör",
          posterSrc: "/posters/course_project2.png",
          linkHref: "https://www.linkedin.com/posts/decathlon-group_decathlonswitzerland-epfl-innovation-activity-7406658107944165377-_h_A?utm_source=share&utm_medium=member_desktop&rcm=ACoAADBL9sQB_9XF4vCWbbKOPxsrMMjDlbxUocI",
        },
      ],
    },

    personalProjects: {
      title: "Kişisel Projeler",
      subtitle: "Ders dışında geliştirdiğim projeler.",
      openRepo: "Repo'yu aç",
      hint: "İpucu: Sağa kaydır →",
      items: [
        {
          title: "Mühendisler için Sayısal Analiz ve Optimizasyon",
          year: "Geliştiriliyor",
          desc: "Mühendislikte yaygın olarak kullanılan sayısal yöntemleri, Python tabanlı Jupyter defterleri üzerinden pratik bir yaklaşımla ele alan çevrim içi bir ders.",
          tags: ["Sayısal Yöntemler", "Optimizasyon", "Bilimsel Hesaplama", "Python", "Mühendislik Eğitimi"],
          linkText: "Kurs reposunu aç",
          posterSrc: "/posters/personal_project1.png",
        },
      ],
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
          "Dinamik adım aralığı kontrolü ve optimize edilmiş G-code kullanarak kesme kuvvetlerini ve işleme süresini azaltan, yüksek performanslı CNC frezeleme için uyarlanabilir bir trokoidal frezeleme stratejisi önerir.",
        cta: "ScienceDirect'te oku →",
        linkHref: "https://www.sciencedirect.com/science/article/abs/pii/S1526612525013532?via%3Dihub",
      },
    },

    footer: (y: number) => `© ${y} Koray Kelam · Portföy`,
  },
};
