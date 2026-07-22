# 🎓 Salesforce AI Student Leave Management System

A Salesforce Lightning Web Components (LWC) application that streamlines the student leave request and approval process. Students can submit leave requests online, while faculty members can review, approve, or reject requests with comments through a dedicated dashboard.

---

## 📖 Project Overview

The **Salesforce AI Student Leave Management System** is a cloud-based application built on the Salesforce Platform to simplify leave management in educational institutions.

The application provides separate interfaces for students and faculty:

- Students can submit leave requests and monitor their approval status.
- Faculty members can review requests, approve or reject them, and provide comments.
- Dashboard statistics offer a quick overview of leave requests.

---

## ✨ Features

### 👨‍🎓 Student Module

- Submit new leave requests
- View leave request history
- Track leave approval status
- View faculty comments
- User-friendly Lightning interface

### 👨‍🏫 Faculty Module

- View all leave requests
- Approve leave requests
- Reject leave requests
- Add faculty comments
- Prevent duplicate approvals/rejections
- Dashboard summary statistics

---

## 📊 Dashboard Features

The Faculty Dashboard displays:

- 📋 Total Leave Requests
- 🟡 Pending Requests
- 🟢 Approved Requests
- 🔴 Rejected Requests

---

## 🛠 Tech Stack

### Salesforce

- Lightning Web Components (LWC)
- Apex
- SOQL
- Lightning App Builder
- Salesforce Developer Edition

### Development Tools

- Visual Studio Code
- Salesforce CLI
- Git
- GitHub

---

## 📂 Project Structure

```text
salesforce-ai-student-leave-management/
│
├── force-app/
│   └── main/
│       └── default/
│           ├── classes/
│           │   ├── LeaveController.cls
│           │   └── LeaveController.cls-meta.xml
│           │
│           ├── lwc/
│           │   ├── leaveRequestForm/
│           │   ├── leaveHistory/
│           │   └── facultyDashboard/
│           │
│           ├── objects/
│           │   └── Leave_Request__c/
│           │
│           └── applications/
│
├── sfdx-project.json
├── package.json
└── README.md
```

---

## ⚙️ Installation

### Clone the repository

```bash
git clone https://github.com/23pa1a12c5/salesforce-ai-student-leave-management.git
```

### Open the project

```bash
cd salesforce-ai-student-leave-management
```

### Login to Salesforce Org

```bash
sf org login web
```

### Deploy the project

```bash
sf project deploy start
```

### Open the default org

```bash
sf org open
```

---

## 🧩 Custom Object

### Leave_Request__c

### Fields

| Field | Type |
|------|------|
| Student Name | Text |
| Student ID | Text |
| Email | Email |
| Department | Picklist |
| Year | Picklist |
| Leave From | Date |
| Leave To | Date |
| Reason | Long Text Area |
| Status | Picklist |
| Faculty Comments | Long Text Area |

---

## 👨‍💻 Modules

### Student Dashboard

- Submit Leave Request
- Leave History
- Track Status
- View Faculty Comments

### Faculty Dashboard

- View Leave Requests
- Approve Requests
- Reject Requests
- Add Comments
- Dashboard Statistics

---

## 📸 Screenshots

Create a folder named:

```text
screenshots/
```

Add screenshots such as:

- Student Dashboard
- Faculty Dashboard
- Leave Request Form
- Leave History
- Dashboard Summary

Example:

```markdown
![Faculty Dashboard](screenshots/faculty-dashboard.png)
```

---

## 🚀 Future Enhancements

- Email Notifications
- Search & Filter
- Charts & Analytics
- Mobile Responsive UI
- AI-based Leave Recommendation
- Multi-level Approval Workflow

---

## 🎯 Learning Outcomes

Through this project, I gained hands-on experience with:

- Lightning Web Components (LWC)
- Apex Programming
- SOQL Queries
- Salesforce Custom Objects
- Salesforce Lightning App Builder
- Component Communication
- Salesforce CLI
- Git & GitHub

---

## 📌 Repository

**GitHub**

https://github.com/23pa1a12c5/salesforce-ai-student-leave-management

---

## 👤 Author

**Mahesh Meesala**

- GitHub: https://github.com/23pa1a12c5
- LinkedIn: *(Add your LinkedIn profile here)*

---

## ⭐ Support

If you found this project useful, consider giving it a ⭐ on GitHub.
