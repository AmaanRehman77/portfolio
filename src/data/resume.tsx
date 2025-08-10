import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Amaan Rehman Shah",
  initials: "ARS",
  url: "https://github.com/AmaanRehman77",
  location: "San Jose, CA",
  locationLink: "https://www.google.com/maps/place/San+Jose,+CA",
  description:
    "Electrical Engineering student with a minor in Computer Science at UIUC. Passionate about digital front-end VLSI design, computer architecture, and hardware verification.",
  summary:
    "I am currently a Hardware Engineer at Etched.ai, working on next-generation AI hardware acceleration systems.",
  avatarUrl: "/me.png",
  skills: [
    "SystemVerilog",
    "Python",
    "C/C++",
    "TCL",
    "Java",
    "SQL",
    "Swift",
    "HTML/CSS",
    "Cadence",
    "Synopsys VCS",
    "Xilinx Vivado",
    "Altera Quartus",
    "MATLAB",
    "LTspice",
    "Git",
    "Docker",
    "KiCad",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "amaanssh@gmail.com",
    tel: "217-200-3782",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/AmaanRehman77",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/amaan-rehman-shah/",
        icon: Icons.linkedin,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "mailto:amaanssh@gmail.com",
        icon: Icons.email,
        navbar: false,
      },
    },
  },

  work: [
    {
      company: "Etched.ai",
      href: "https://www.etched.com/",
      badges: [],
      location: "Remote",
      title: "Hardware Engineer",
      logoUrl: "/etched.png",
      start: "Aug 2025",
      end: "Present",
      description:
        "Working on next-generation AI hardware acceleration systems. Contributing to architecture design, hardware verification, and optimization of compute pipelines for large-scale AI workloads.",
    },
    {
      company: "University of Illinois Urbana-Champaign",
      href: "https://illinois.edu",
      badges: [],
      location: "Champaign, IL",
      title: "Course Assistant - Computer Organization and Design + Digital Systems",
      logoUrl: "/uiuc.png",
      start: "Aug 2023",
      end: "May 2025",
      description:
        "Assist students in debugging SystemVerilog code for caches, RISC-V processors, and verification environments. Guide use of FPGA boards and simulation software such as Xilinx Vivado. Develop and test new lab assignments.",
    },
    {
      company: "Development Consultancy Pvt. Ltd.",
      href: "#",
      badges: [],
      location: "Kolkata, India",
      title: "Power Electronics Intern",
      logoUrl: "/devconsult.png",
      start: "Jun 2024",
      end: "Aug 2024",
      description:
        "Researched VFDs and power converter/inverter topologies. Worked on EMI and harmonic mitigation using MATLAB and LTspice. Conducted harmonic distortion measurements in industrial applications using advanced analyzers.",
    },
  ],

  education: [
    {
      school: "University of Illinois Urbana-Champaign",
      href: "https://illinois.edu",
      degree: "Bachelor of Science in Electrical Engineering, Minor in Computer Science",
      logoUrl: "/uiuc.png",
      start: "Aug 2021",
      end: "May 2025",
      gpa: "3.63",
      honors: "James Scholar Honor",
    },
  ],

  projects: [
    {
      title: "Multicycle Cache UVM Testbench",
      dates: "Mar 2025",
      description:
        "Developed a complete UVM environment to verify a parameterizable multicycle cache, including agents, sequencers, drivers, monitors, scoreboard, and functional coverage. Created randomized and directed sequences for full coverage.",
      technologies: ["SystemVerilog", "UVM"],
    },
    {
      title: "Hardware Scheduled Dual-Core Cache Coherent Processor (Tapeout)",
      dates: "Nov 2024",
      description:
        "Designed and verified a dual-core RISC-V processor with performance and efficiency cores, snoop interconnect, atomic support, and hardware-based scheduling. Worked on FPGA debug protocols and full ASIC flow with Synopsys and Cadence tools.",
      technologies: ["SystemVerilog", "RISC-V", "Synopsys", "Cadence"],
    },
    {
      title: "2-Way Superscalar RISC-V Processor with Non-Blocking Cache",
      dates: "Apr 2024",
      description:
        "Designed a 2-way superscalar out-of-order processor with register renaming and non-blocking cache using MSHRs for parallel memory requests. Verified with RVFI, Spike, and CoreMarks.",
      technologies: ["SystemVerilog", "RISC-V"],
    },
  ],

  hackathons: [],
} as const;
