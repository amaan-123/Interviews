# Manager Interview Preparation

Manager interviews (especially after a technical round) assess **your thinking, ownership, collaboration, and problem-solving attitude** — not coding.

### 🔹 1. Core Themes They Evaluate

* **Ownership:** Do you take initiative, finish what you start?
* **Collaboration:** Can you communicate, accept feedback, and work in a team?
* **Learning Agility:** How do you react when you don’t know something?
* **Problem-Solving:** How do you approach issues methodically?
* **Attitude:** Calm, structured, respectful tone — not defensive or uncertain.

---

### 🔹 3. Short Answers for Common Prompts

| Question                                | Core Idea                                               |
| --------------------------------------- | ------------------------------------------------------- |
| “How do you handle pressure?”           | Break tasks, prioritize by impact, communicate early.   |
| “Describe teamwork.”                    | Share one instance of collaboration or mentoring.       |
| “What motivates you?”                   | Learning and building things that work end-to-end.      |
| “What if you disagree with a teammate?” | Discuss calmly, focus on data or testing, not ego.      |
| “Where do you see yourself?”            | Taking ownership of modules, mastering C#, APIs, Azure. |

---

### 🔹 4. 3 Smart Questions You Can Ask Them

1. “What does success in this role look like in the first 6 months?”
2. “How does your team approach learning or upskilling?”
3. “What tools or practices help your team collaborate best?”

---

### 🔹 5. Do / Don’t Checklist

**Do**

* Be concise; think before answering.
* Relate answers to *teamwork, ownership, growth.*
* Smile slightly, maintain eye contact (on video or in person).
* Keep examples short (under 90 seconds each).

**Don’t**

* Dive into deep technical detail unless asked.
* Blame others or sound uncertain.
* Say “no experience”; instead say “I’ve learned it in training and want to apply it further.”

---

### 🔹 6. Last-Minute Mental Reset

* **Three keywords to repeat:** *Calm  |  Clear  |  Confident.*
* Breathe before each answer.
* Every question is a chance to show *how you think,* not just *what you know.*

---

## 1. **What They Usually Ask**

Grouped by theme:

### 🔹 **Project & Ownership**

* “Tell me about a project you’re most proud of.”
* “What challenges did you face and how did you resolve them?”
* “When things went wrong, how did you handle it?”
* “How do you prioritize when multiple tasks come at once?”

### 🔹 **Teamwork & Communication**

* “How do you work with teammates who disagree with you?”
* “How do you handle feedback?”
* “Have you ever mentored or helped a teammate?”

### 🔹 **Work Ethic & Adaptability**

* “Tell me about a time you learned something quickly.”
* “What do you do when you don’t know an answer?”
* “How do you stay productive under tight deadlines?”

### 🔹 **Role & Motivation**

* “Why this company/role/tech stack?”
* “Where do you see yourself in 2–3 years?”
* “What do you expect from your manager/team?”

### 🔹 **Behavioral STAR Format**

Prepare 3–4 strong stories using the **STAR method**:

* **S**ituation
* **T**ask
* **A**ction
* **R**esult

Use them for any “Tell me about a time when…” question.

---

## 2. **How to Spend Time Between Now & Tomorrow**

### ✅ **Today Evening**

1. Review your **past projects and contributions** — be ready to explain *why* you built something, *how* you solved issues, and *what impact* it had.
2. Practice **short, clear storytelling** using STAR format.
3. Research the company (values, culture, products).
4. Prepare **3 questions to ask them**, e.g.:

   * “How does your team measure success?”
   * “What are the next big initiatives in this department?”
   * “What do you expect from someone in this role in the first 6 months?”

### ✅ **Tomorrow Morning**

1. Read your own resume once.
2. Keep 3 keywords in mind: **Ownership, Collaboration, Growth.**
3. Stay calm, natural, and avoid overexplaining.

---

## STAR Projects

Here is a concise STAR-format storytelling summary for your **three projects**:

---

### **1. Content Safety Checker (Azure Content Safety API + Fetch API)**

**Situation:** Needed a quick way to check if user-generated text on a website might contain unsafe or inappropriate content.
**Task:** Build a simple local tool to test Azure Content Safety’s text-analysis capabilities.
**Action:** Used HTML and vanilla JavaScript with the Fetch API to send input text to Azure’s endpoint and display categories/severity in a clean table. Handled CORS and JSON-parsing errors, optimized API key handling, and ensured the app ran locally without a backend.
**Result:** Created a lightweight content-moderation checker that clearly visualized Azure’s scoring output, helping evaluate the API’s usefulness for real-world moderation workflows.

---

### **2. Postman Visualizer (Azure OpenAI API Response Viewer)**

**Situation:** Needed an easier way to **see both prompt and response data with token usage** while testing Azure OpenAI API calls in Postman.
**Task:** Design a visual output that goes beyond raw JSON to make debugging and cost tracking faster.
**Action:** Built a post-response visualizer script in Postman using HTML, CSS, and Handlebars placeholders. Parsed both request and response JSON dynamically, extracted the `user` message and model usage fields, and displayed them in two formatted tables. Used an API key stored in Postman Vault for secure authorization.
**Result:** Transformed plain JSON logs into a clear, visual dashboard inside Postman—saving time in prompt evaluation and token analysis during AI API development.

---

### **3. Inventory Management Dashboard**

#### **4. STAR-format Storytelling**

**Situation:**
Inventory data was siloed across multiple Excel / CSV files, making it hard to monitor stock, vendor performance, and reorder cycles. Decision-makers lacked a single source of truth for stock insights.

**Task:**
Design a unified, automated dashboard that aggregates inventory and sales data, highlights critical KPIs, and alerts users about low stock or poor turnover—without manual reporting.

**Action:**
Imported raw data into SQL Server, built clean relational schemas, and used SQL queries to fix missing or inconsistent values. Connected Power BI via Data Gateway, created interactive visuals (ABC/XYZ analysis, turnover ratio, forecasting) using DAX, and configured Power Automate flows for alerts (`Inventory Turnover < 0.14`, `SKUs to Reorder > 80`). Optimized refresh scheduling to 10 A.M. daily for live insights.

**Result:**
Delivered a **real-time analytics dashboard** that centralized all inventory KPIs, reduced manual tracking, and improved procurement planning.
Alerts enabled faster response to low stock, and visual forecasting improved reorder accuracy. Demonstrated how **data-driven BI** can optimize supply-chain efficiency and decision quality.

---

# Projects - overview

## Content Safety Checker using Azure Content Safety API (Fetch API)

Summary for this project:

1. High-level end-user use
   A simple local web page where a user pastes or types text and clicks **Check** to get content-safety categories and severity returned from Azure Content Safety. The UI is a textarea, a Check button, and a results table.  

2. Domain
   Content moderation / content safety (tool for screening user-generated text).

3. Tech stack (clear split)

* Frontend: Static HTML + plain JavaScript (Fetch API). The page uses `index.html` and `script.js`.  
* Backend: None hosted by the project. It calls an external service: Azure Content Safety (Cognitive Services) via REST (`POST` to `/contentsafety/text:analyze`). The endpoint and API key are set in `script.js` as placeholders.
* Database: None. No persistence in the code.

## LLM Prompt/answer tabular output visualiser showing token usage & model also: using Azure OpenAI API (Postman)

Postman Visualizer (prompt/answer token-usage table) — summary, domain, tech stack.

1. High-level end-user use
   A Postman request + test script that extracts the original user prompt from the request body and the model response + usage from the response JSON. It then renders two HTML tables (user prompt and model response + token usage) inside Postman’s Visualizer tab using a Handlebars-style template. The visual appears when the user clicks Send in Postman. (You provided the raw JSON, the Handlebars template, and the post-response script.)

2. Domain
   Tooling / developer utilities for API debugging and visual inspection of LLM responses and token usage. Useful for QA, prompt engineering, and cost/usage analysis.

3. Tech stack (clear split)

* Frontend: Postman Visualizer HTML template + inline CSS (rendered inside Postman). Uses Handlebars-style `{{{ }}}` placeholders in the template.
* Backend: The request can be any API (Azure/OpenAI). Postman itself makes the HTTP call; there is no separate backend in this asset.
* Database: None.

---

## Inventory Management Dashboard

**Goal:**
Optimize inventory control and reduce stock-out risk through **data-driven monitoring** and **automated alerts**.

### **1. High-Level Use for End Users**

An interactive **Power BI dashboard** for warehouse managers and corporate decision-makers to track real-time inventory metrics, forecast demand, and receive automated alerts.
Users can view **KPIs** like inventory turnover, ABC/XYZ classification, vendor and warehouse status, and reorder needs—all refreshed daily from SQL Server.

---

### **2. Domain**

**Data Analytics / Supply Chain Management / Business Intelligence**

---

### **3. Tech Stack**

* **Backend / Database:** Microsoft SQL Server + SQL Server Management Studio (ETL, data cleaning, schema creation, DAX integration)
* **Frontend / Visualization:** Microsoft Power BI Desktop + Power BI Service (interactive dashboards, KPIs, forecasting)
* **Automation Layer:** Microsoft Power Automate (email alerts for low inventory & turnover)

---

### 🔹 Key Concepts

* **Inventory Control:** Maintaining optimal stock levels to meet demand without overstocking.
* **Dashboard Metrics:** Visual KPIs like stock levels, reorder points, and supplier lead times.
* **Automation:** Triggering **email alerts** when stock falls below thresholds using Power Automate.
* **Data Visualization:** Power BI used to create real-time, interactive reports.
* **Database Management:** SQL Server (SSMS) backend used for structured data storage and querying.

### 🔹 Interview Angle

You can frame it as:

> “I built a Power BI dashboard connected to SQL Server that tracks real-time stock metrics. When inventory drops below set thresholds, Power Automate triggers email alerts to prevent stock-outs. The project strengthened my understanding of database connectivity, data visualization, and workflow automation.”

---

### **Difference Between MySQL (phpMyAdmin/XAMPP) and MS SQL Server**

| Aspect                          | **MySQL (via phpMyAdmin/XAMPP)**                 | **MS SQL Server (via SSMS)**                                              |
| ------------------------------- | ------------------------------------------------ | ------------------------------------------------------------------------- |
| **Type**                        | Open-source **RDBMS** developed by Oracle        | Proprietary **RDBMS** by Microsoft                                        |
| **Primary Interface**           | phpMyAdmin (web-based GUI) via XAMPP stack       | SQL Server Management Studio (SSMS) — desktop client                      |
| **Platform/OS**                 | Cross-platform (Windows, Linux, macOS)           | Primarily Windows; now also supports Linux                                |
| **Query Language**              | SQL (uses MySQL-specific dialect)                | T-SQL (Transact-SQL — Microsoft’s extended SQL dialect)                   |
| **Data Storage Engine**         | Pluggable (InnoDB, MyISAM, etc.)                 | Single integrated engine controlled by Microsoft                          |
| **Integration**                 | Common in **web-based PHP** applications         | Common in **.NET / C# / Azure** enterprise ecosystems                     |
| **User Management**             | Basic authentication and privileges per database | Advanced user roles, Windows Authentication, Active Directory integration |
| **Backup/Restore**              | Manual dump (.sql export/import)                 | Full/Incremental backups, recovery models, transaction logs               |
| **Performance Tuning**          | Limited profiling; manual optimization           | Built-in performance monitor, execution plans, tuning advisor             |
| **Automation & BI Integration** | Minimal; external scripting needed               | Tight integration with **Power BI**, **Power Automate**, **SSIS/SSRS**    |
| **Use Case Focus**              | Lightweight apps, websites, open-source projects | Enterprise-level apps, analytics, ERP, large-scale data systems           |

---

#### **In short:**

* **MySQL (phpMyAdmin)** → simpler, web-developer-friendly, good for PHP/XAMPP projects.
* **MS SQL Server (SSMS)** → enterprise-grade, secure, and integrates seamlessly with Microsoft tools (Power BI, .NET, Azure).

>XAMPP is a free and open-source cross-platform web server solution stack package developed by Apache Friends, designed to provide a local environment for web development, testing, and debugging.It combines the Apache HTTP Server, MariaDB database, and interpreters for PHP and Perl programming languages into a single, easy-to-install bundle.The name XAMPP is a recursive acronym standing for Cross-Platform (X), Apache (A), MariaDB (M), PHP (P), and Perl (P).Originally, it stood for Cross-Platform + Apache + MySQL + PHP + Perl, but the database was switched from MySQL to MariaDB starting with versions 5.5.30 and 5.6.14 in October 2015.

## **1. SCADA Control Centre Architecture**

**Definition:**
SCADA (Supervisory Control and Data Acquisition) is an **industrial automation system** used for monitoring and controlling infrastructure like power grids, water systems, or manufacturing plants.

---

### 🔹 **High-Level Architecture**

| Layer                          | Description                                                      | Components                                                                    |
| ------------------------------ | ---------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| **Field Layer**                | Collects real-world data                                         | Sensors, RTUs (Remote Terminal Units), PLCs (Programmable Logic Controllers)  |
| **Communication Layer**        | Transmits data securely between field and control centers        | Routers, switches, firewalls, communication protocols (Modbus, DNP3, IEC 104) |
| **Control/Processing Layer**   | Central system that monitors, stores, and analyzes incoming data | SCADA servers, data historians, redundant servers                             |
| **Supervisory/Operator Layer** | Provides visualization and control for human operators           | HMI (Human Machine Interface) workstations, dashboards                        |
| **Enterprise Layer**           | Integrates SCADA data into business and reporting systems        | Database servers, ERP/BI systems, reporting tools                             |

**Key Features:**

* **Redundancy:** Backup servers ensure no downtime.
* **Real-time monitoring:** Operators can track and adjust parameters instantly.
* **Alarm management:** Alerts for abnormal values or faults.
* **Security:** Firewalls and role-based access restrict external threats.

---

### **2. Basic Understanding Topics**

| Concept                              | Core Idea                                                                 | Example / Relevance                                                                                                                              |
| ------------------------------------ | ------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| **Routers**                          | Direct network traffic between different networks (Layer 3 device).       | Connects SCADA subnets or remote stations to the central control network.                                                                        |
| **Firewalls**                        | Control data flow and protect systems from unauthorized access.           | Blocks non-permitted communication between SCADA network and external networks.                                                                  |
| **Virtual Machines (VMs)**           | Software-based computers running on a host system.                        | Used for testing SCADA software or simulating control environments.                                                                              |
| **Network Management Systems (NMS)** | Tools for monitoring and managing network performance.                    | E.g., SolarWinds or PRTG used to track device uptime and bandwidth usage.                                                                        |
| **OSI Layers (7 Layers)**            | Framework for data communication from physical to application level.      | Helps identify network issues (e.g., packet loss at Layer 3).                                                                                    |
| **Port Numbers**                     | Logical channels for network services (e.g., 80 for HTTP, 443 for HTTPS). | Used in firewall rules and protocol configuration.                                                                                               |
| **Backup Types**                     | Strategies to preserve data.                                              | - **Full Backup:** Entire data copy. <br> - **Incremental:** Changes since last backup. <br> - **Differential:** Changes since last full backup. |

---

**Interview-ready Summary:**

> “In my project and coursework, I gained an overview of SCADA architecture — from field devices and communication networks up to control and enterprise layers. I also learned networking fundamentals such as routers, firewalls, OSI layers, and backup strategies, which are essential for maintaining secure, reliable industrial control systems.”

## Internship Role Overview  

### Core Responsibilities  

* **IT audit support** – Assisted senior auditors in evaluating client systems, concentrating on three key areas:  
  * **Access Controls** – Reviewed who could log into SAP modules, what permissions they held, and whether segregation‑of‑duties was enforced.  
  * **Information Produced by the Entity (IPE), Information Used in Control (IUC)** – Verified that internal users followed documented procedures when creating, modifying, or deleting data in SAP.  

* **Workflow analysis** – Mapped end‑to‑end processes to pinpoint where controls should exist and where gaps appeared.  

* **Evidence collection & review** – Gathered system logs, change‑management records, and access‑request tickets; then evaluated the completeness and reliability of that evidence against audit criteria.  

* **Process improvement recommendations** – Drafted actionable suggestions such as tightening role‑based access, automating approval workflows, or enhancing monitoring scripts.  

### Technical & Knowledge Gains  

| Area | What You Learned | How You Learned It |
|------|------------------|--------------------|
| **IT audit life cycle** | Planning, fieldwork, reporting, and follow‑up phases | Instructor‑led sessions with mock audit engagements |
| **SOX compliance** | Key sections (404, 302) and how they apply to SAP | Hands‑on exercises reviewing control matrices |
| **GITCs (General IT Controls)** | Change management, logical access, IT operations, and security | Lab work configuring and testing SAP security settings |
| **Risk frameworks** | COSO, ISO 27001, and industry‑specific controls | Case studies linking framework requirements to client scenarios |

### How This Experience Adds Value  

* **Practical audit exposure** – You moved beyond theory by actually tracing transactions in SAP and documenting control effectiveness.  
* **Cross‑system insight** – Working across multiple SAP instances gave you a view of how control design must adapt to different landscapes (e.g., ECC vs. S/4HANA).  
* **Communication skills** – Summarizing findings for senior auditors and drafting improvement plans honed your ability to convey technical details to non‑technical stakeholders.  

Overall, the internship equipped you with a solid foundation in digital assurance, combining regulatory knowledge, technical SAP expertise, and real‑world audit practice.

## **Coursera Data Science Specialization (Johns Hopkins University)**

**Main Concepts Covered:**

1. **Data Science Foundations**

   * Understanding the data science process: collecting, cleaning, analyzing, and communicating results.
   * Use of **R** and **RStudio** as the core programming tools.

2. **R Programming**

   * Basics of R syntax, data structures (vectors, lists, data frames).
   * Writing reusable functions and scripts.
   * Importing, manipulating, and cleaning data.

3. **Data Manipulation and Cleaning**

   * Using packages like `dplyr`, `tidyr` for data wrangling.
   * Handling missing values, inconsistent formats, and outliers.

4. **Exploratory Data Analysis (EDA)**

   * Summarizing data with descriptive statistics.
   * Visualizing data using `ggplot2`.
   * Identifying trends, correlations, and anomalies.

5. **Statistical Inference**

   * Sampling, hypothesis testing, confidence intervals, and regression models.
   * Making data-driven conclusions.

6. **Regression Models**

   * Linear and logistic regression, model diagnostics, interpretation of coefficients.
   * Predictive modeling and validation.

7. **Machine Learning (Introductory)**

   * Basics of supervised and unsupervised learning.
   * Cross-validation, overfitting, and model performance metrics.

8. **Reproducible Research**

   * Using **R Markdown** and **knitr** to produce reproducible reports.
   * Version control with Git/GitHub.

---

**Why R?**

* **Purpose-built for statistics and data visualization.**
* Strong community support and packages (CRAN ecosystem).
* Excellent for **data cleaning, EDA, and statistical modeling**.
* Integrates well with **R Markdown** for reporting and documentation.
* Lightweight and open-source, making it ideal for research and analytics over deployment-heavy systems.

---

**Interview Line Example:**

> “The Coursera Data Science Specialization helped me understand the full data science workflow — from data wrangling to model building — using R for its powerful statistical and visualization capabilities.”

# Mock Q/A

## 🔹 **Project & Ownership**

### “Tell me about a project you’re most proud of.”

* Create a simple prompt/chat visualiser using Azure OpenAI API (Postman).

### “What challenges did you face and how did you resolve them?”

1) API key authorization
2) Creating the post-response scripts to display using pm.visualizer

### “When things went wrong, how did you handle it?”

Referred to official documentation of Postman & Azure OpenAi API in AI Foundry.

### “How do you prioritize when multiple tasks come at once?”

Focus on planning ahead, and prioritise considering both deadlines & which task will take more time/effort

## 🔹 **Teamwork & Communication**

### “How do you work with teammates who disagree with you?”

If our disagreements are for a common goal then I am sure they can be resolved amicably and our different approaches/perspectives should be judged by a fair overseer to choose what's best in interest of our goal.

### “How do you handle feedback?”

Always welcome it & if it's constructive work to implement it. At my previous company I often asked my seniors about different things like behaviour/tools used/finding & presenting resources in a professional manner.

### “Have you ever mentored or helped a teammate?”

My team at Company required me to teach whatever I had learned to a new joinee on our project & had to give her walkthroughs of the audit process in the company.
Helped fellow students in college with understanding exam portions.
  
## 🔹 **Work Ethic & Adaptability**

### “Tell me about a time you learned something quickly.”

### “What do you do when you don’t know an answer?”

### “How do you stay productive under tight deadlines?”

## 🔹 **Role & Motivation**

### “Why this company/role/tech stack?”

### “Where do you see yourself in 2–3 years?”

### “What do you expect from your manager/team?”
