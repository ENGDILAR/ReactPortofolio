export const projects = [
  {
    id: "hms",
    title: "Hospital Management System",
    category: "Full Stack",
    description:
      "A comprehensive hospital management platform designed to centralize administrative, medical, and financial workflows.",
    technologies: ["Laravel 11", "MySQL", "Livewire", "Blade", "Tailwind CSS"],
    github: "https://github.com/ENGDILAR/Hospital_Management_System",
    image: "/HMS.png",

    details: {
      overview:
        "A comprehensive Hospital Management System designed to streamline hospital operations through dedicated dashboards and integrated workflows for administrators, doctors, laboratory staff, radiology staff, and patients.",

      features: [
        "Administrative management of departments, doctors, patients, and employees.",
        "Laboratory workflow for processing medical tests.",
        "Radiology workflow for managing imaging requests.",
        "Patient portal for viewing invoices, reports, and payments.",
        "Invoice, receipt, and payment management.",
        "Insurance and ambulance management.",
        "Role-based dashboards and multilingual support.",
      ],
      architecture: [
        "MVC Architecture",
        "Repository Pattern",
        "Dependency Injection",
        "Eloquent ORM",
        "Livewire Components",
        "Database Transactions",
        "Form Request Validation",
      ],
    },
  },

  {
    id: "institute-api",
    title: "Institute Management System API",
    category: "Backend",
    description:
      "A RESTful backend for managing students, doctors, courses, enrollments, and academic records with secure role-based authentication.",
    technologies: ["ASP.NET Core 8", "C#", "EF Core", "SQL Server", "JWT"],
    github: "https://github.com/ENGDILAR/Institute-Management-System-API",
    image: "/InstituteAPI.jpg",

    details: {
      overview:
        "A RESTful backend designed to manage institute operations including administrators, doctors, students, courses, course offerings, enrollments, and student marks.",

      features: [
        "JWT authentication with refresh tokens.",
        "Role-based authorization for administrators, doctors, and students.",
        "Student, doctor, course, and enrollment management.",
        "Student marks and exam type management.",
        "DTO-based request and response models.",
        "FluentValidation for request validation.",
        "Database transactions for data consistency.",
        "Swagger / OpenAPI documentation.",
        "Authentication rate limiting and secure token rotation.",
      ],
      architecture: [
        "Layered Architecture",
        "Service Layer",
        "DTO Pattern",
        "Dependency Injection",
        "Entity Framework Core",
        "Database Transactions",
        "FluentValidation",
        "Middleware Pipeline",
      ],
    },
  },

  {
    id: "business-platform",
    title: "Business Management & Financial Ledger",
    category: "Full Stack",
    description:
      "A business management platform combining product and service management with financial ledger operations and reporting.",
    technologies: ["Laravel 12", "MySQL", "Blade", "Tailwind CSS", "Bootstrap"],
    github:
      "https://github.com/ENGDILAR/Company-Service-and-Billing-Platform-Private-",
    image: "/BillingPlatform.jpg",

    details: {
      overview:
        "A Laravel-based business management system that combines a public company website with an authenticated administrative dashboard for managing products, services, and financial records.",

      features: [
        "Product management with image upload support.",
        "Service management.",
        "Public landing page for company services and products.",
        "Authenticated administrative dashboard.",
        "Financial ledger management.",
        "Debit and credit transaction recording.",
        "Automatic balance calculation.",
        "PDF generation and printing.",
        "Secure file upload and automatic cleanup.",
        "Database transactions for data consistency.",
      ],
      architecture: [
        "MVC Architecture",
        "Eloquent ORM",
        "Form Request Validation",
        "Reusable Traits",
        "Blade Components",
        "Database Transactions",
      ],
    },
  },

  {
    id: "dvld",
    title: "Driving Vehicle License Department",
    category: "Desktop",
    description:
      "A Windows Forms application for managing drivers, license applications, testing, fees, and license workflows.",
    technologies: ["C#", ".NET Framework", "ADO.NET", "SQL Server"],
    github:
      "https://github.com/ENGDILAR/Driving-Vehicle-License-Department-DVLD-",
    image: "/DVLD.jpg",

    details: {
      overview:
        "A Windows Forms C# application designed to manage local and international driving licenses, drivers, license applications, testing, and related fees.",

      features: [
        "Issue, renew, replace, suspend, and reinstate licenses.",
        "Add, edit, and delete driver records.",
        "Process driving license applications.",
        "Manage vision, written, and driving tests.",
        "Track license issuance, renewal, and testing fees.",
        "Automated eligibility verification.",
        "Test result workflow management.",
        "SQL Server views for optimized queries and reporting.",
      ],
      architecture: [
        "Layered Architecture",
        "Presentation Layer",
        "Business Logic Layer",
        "Data Access Layer",
        "ADO.NET",
        "SQL Server Views",
      ],
    },
  },
];
